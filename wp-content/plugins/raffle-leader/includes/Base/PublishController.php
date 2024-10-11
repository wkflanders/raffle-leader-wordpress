<?php
/**
 * @package RaffleLeader
 */

namespace Includes\Base;
use Includes\API\ContestantsAPI;
use Includes\API\EntriesAPI;
use Includes\API\RaffleAPI;

class PublishController extends BaseController
{

    private $raffleAPI;

    private $entriesAPI;

    private $contestantsAPI;

    public function register()
    {
        $this->raffleAPI = new RaffleAPI();
        $this->entriesAPI = new EntriesAPI();
        $this->contestantsAPI = new ContestantsAPI();

        // Register the shortcode
        add_shortcode('raffleleader', array($this, 'shortcodeHandler'));

        // Register AJAX actions
        add_action('wp_ajax_loadRaffleData', array($this, 'loadRaffleData'));
        add_action('wp_ajax_nopriv_loadRaffleData', array($this, 'loadRaffleData'));
        add_action('wp_ajax_handleEmailLogin', array($this, 'handleEmailLogin'));
        add_action('wp_ajax_nopriv_handleEmailLogin', array($this, 'handleEmailLogin'));
        add_action('wp_ajax_handleAdditionalEntry', array($this, 'handleAdditionalEntry'));
        add_action('wp_ajax_nopriv_handleAdditionalEntry', array($this, 'handleAdditionalEntry'));
        add_action('wp_ajax_handleClassicEditorModalRaffles', array($this, 'handleClassicEditorModalRaffles'));

        add_action('wp_ajax_refresh_nonce', array($this, 'refreshNonce'));
        add_action('wp_ajax_nopriv_refresh_nonce', array($this, 'refreshNonce'));
        // Add button and modal for the classic editor
        add_action('media_buttons', array($this, 'addClassicEditorButton'), 15);
        add_action('admin_footer', array($this, 'addClassicEditorModal'));

        // Register Gutenberg block for RaffleLeader
        add_action('init', array($this, 'registerRaffleGutenbergBlock'));

        // Add for creating posts/pages
        add_action('admin_footer', array($this, 'createNewRafflePost'));
        add_action('admin_footer', array($this, 'createNewRafflePage'));

        add_action('admin_post_export_raffle_emails', array($this, 'handleExportRaffleEmails'));
    }

    public function refreshNonce()
    {
        $new_nonce = wp_create_nonce('load_raffle_data');
        wp_send_json_success([ 'new_nonce' => $new_nonce ]);
    }

    public function handleExportRaffleEmails()
    {
        if (!current_user_can('manage_options')) {
            wp_die('You do not have sufficient permissions to access this page.');
        }

        $raffle_id = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;
        $export_nonce = isset($_GET['export_nonce']) ? sanitize_text_field(wp_unslash($_GET['export_nonce'])) : '';

        if (!$raffle_id || !wp_verify_nonce($export_nonce, 'export_csv_action_' . $raffle_id)) {
            wp_die('Invalid request');
        }

        $contestantsAPI = new ContestantsAPI();
        $contestants = $contestantsAPI->getContestantsForRaffleView($raffle_id, array(
            'per_page' => -1,
            'orderby' => 'created_at',
            'order' => 'DESC',
        ));

        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="raffle_' . $raffle_id . '_emails.csv"');
        header('Pragma: no-cache');
        header('Expires: 0');

        $csv_data = "Email\n"; // CSV header

        foreach ($contestants as $contestant) {
            $csv_data .= '"' . $this->esc_csv($contestant['email']) . "\"\n";
        }

        echo $csv_data; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        exit;
    }

    // Helper function to escape CSV values
    function esc_csv($value)
    {
        return str_replace('"', '""', $value);
    }

    public function shortcodeHandler($atts)
    {

        $atts = shortcode_atts(array(
            'id' => '',
        ), $atts, 'raffleleader');

        $raffle_id = intval($atts['id']);

        if ($raffle_id) {
            $output = '<div id="raffleleader-raffle-container" data-raffle-id="' . esc_attr($raffle_id) . '" style="display: flex; justify-content: center; max-width: none;"></div>';
            return $output;
        } else {
            $output = '<div id="raffleleader-raffle-container">Raffle could not be fetched</div>';
            return $output;
        }
    }

    public function loadRaffleData()
    {
        $nonce = isset($_GET['security']) ? sanitize_text_field(wp_unslash($_GET['security'])) : '';
        if (!wp_verify_nonce($nonce, 'load_raffle_data')) {
            wp_send_json_error('Nonce verification failed', 403);
            wp_die();
        }

        $raffle_id = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;

        if ($raffle_id) {
            $raffleInstance = $this->raffleAPI->getRaffle($raffle_id);

            $preview_content = !is_null($raffleInstance['content']) ? stripslashes($raffleInstance['content']) : '';
            $status = !is_null($raffleInstance['status']) ? $raffleInstance['status'] : '';
            $start_date = !is_null($raffleInstance['start_date']) ? $raffleInstance['start_date'] : '';
            $end_date = !is_null($raffleInstance['end_date']) ? $raffleInstance['end_date'] : '';
            $timezone = !is_null($raffleInstance['timezone']) ? $raffleInstance['timezone'] : '';
            $total_entries = !is_null($this->entriesAPI->getTotalEntriesCount($raffle_id)) ? $this->entriesAPI->getTotalEntriesCount($raffle_id) : 0;

            $data = array(
                'content' => $preview_content,
                'status' => $status,
                'startDate' => $start_date,
                'endDate' => $end_date,
                'timezone' => $timezone,
                'total_entries' => $total_entries,
            );

            wp_send_json($data);
        } else {
            wp_send_json_error('Raffle ID not provided.');
        }

        wp_die();
    }

    public function handleEmailLogin()
    {
        check_ajax_referer('nonce', 'security');

        if (isset($_POST['contestant_email']) && isset($_POST['raffle_id']) && isset($_POST['current_url'])) {
            $raffle_id = intval($_POST['raffle_id']);
            $email = sanitize_email(wp_unslash($_POST['contestant_email']));
            $referral_code = isset($_POST['referral_code']) ? sanitize_text_field(wp_unslash($_POST['referral_code'])) : '';
            $current_url = esc_url_raw(wp_unslash($_POST['current_url']));

            $contestant = $this->contestantsAPI->getContestantByEmail($email);

            if ($contestant) {
                $contestant_id = $contestant['contestant_id'];
            } else {
                $ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';
                $contestantData = array(
                    'email' => $email,
                    'ip' => $ip,
                );

                $contestant_id = $this->contestantsAPI->addContestant($contestantData);
            }

            if ($referral_code) {
                $this->processReferral($referral_code, $raffle_id, $contestant_id);
            }

            // Check if the contestant already has an 'Email' entry for this raffle
            $existing_entries = $this->entriesAPI->getEntriesByContestantId($contestant_id, $raffle_id);
            $has_email_entry = false;
            foreach ($existing_entries as $entry) {
                if ($entry['entry_type'] === 'Email') {
                    $has_email_entry = true;
                    break;
                }
            }

            // Only add the 'Email' entry if it doesn't already exist
            if (!$has_email_entry) {
                $entryData = array(
                    'raffle_id' => $raffle_id,
                    'contestant_id' => $contestant_id,
                    'entry_type' => 'Email',
                );
                $this->entriesAPI->addEntry($entryData);
            }

            $contestant_entries = $this->entriesAPI->getEntriesByContestantId($contestant_id, $raffle_id);
            $total_entries = $this->entriesAPI->getTotalEntriesCount($raffle_id);
            $referral_link = $this->generateReferralLink($contestant_id, $raffle_id, $current_url);

            wp_send_json_success(array(
                'contestant_id' => $contestant_id,
                'contestant_entries' => $contestant_entries,
                'total_entries' => $total_entries,
                'referral_link' => $referral_link,
            ));
        } else {
            wp_send_json_error('Invalid request.');
        }
    }

    private function processReferral($referral_code, $raffle_id, $new_contestant_id)
    {
        $referring_contestant_id = $this->verifyReferralCode($referral_code, $raffle_id);
        if ($referring_contestant_id && $referring_contestant_id != $new_contestant_id) {
            // Fetch the new contestant's email
            $new_contestant = $this->contestantsAPI->getContestant($new_contestant_id);
            if ($new_contestant && isset($new_contestant['email'])) {
                $referred_email = $new_contestant['email'];

                $entryData = array(
                    'raffle_id' => $raffle_id,
                    'contestant_id' => $referring_contestant_id,
                    'entry_type' => 'referDetails',
                    'entry_details' => "Referred contestant: $referred_email",
                );
                $this->entriesAPI->addEntry($entryData);
            }
        }
    }

    private function verifyReferralCode($referral_code, $raffle_id)
    {
        $decoded = base64_decode($referral_code);
        list($contestant_id, $encoded_raffle_id) = explode('-', $decoded);

        if ($encoded_raffle_id != $raffle_id) {
            return false;
        }

        return intval($contestant_id);
    }

    private function generateReferralLink($contestant_id, $raffle_id, $current_url)
    {
        $referral_code = base64_encode($contestant_id . '-' . $raffle_id);
        return add_query_arg('ref', $referral_code, $current_url);
    }

    public function handleAdditionalEntry()
    {
        check_ajax_referer('nonce', 'security');

        if (isset($_POST['contestant_email'], $_POST['raffle_id'], $_POST['entry_type'], $_POST['entry_details'])) {
            $email = sanitize_email(wp_unslash($_POST['contestant_email']));
            $raffle_id = intval($_POST['raffle_id']);
            $entry_type = sanitize_text_field(wp_unslash($_POST['entry_type']));
            $entry_details = sanitize_text_field(wp_unslash($_POST['entry_details']));

            $contestant = $this->contestantsAPI->getContestantByEmail($email);

            if ($contestant) {
                $contestant_id = $contestant['contestant_id'];
                $contestant_entries = $this->entriesAPI->getEntriesByContestantId($contestant_id, $raffle_id);

                foreach ($contestant_entries as $entry) {
                    if ($entry['entry_type'] === $entry_type) {
                        wp_send_json_success(array(
                            'contestant_id' => $contestant_id,
                            'contestant_entries' => $contestant_entries,
                        ));
                        return;
                    }

                    $entryData = array(
                        'raffle_id' => $raffle_id,
                        'contestant_id' => $contestant_id,
                        'entry_type' => $entry_type,
                        'entry_details' => $entry_details,
                    );

                    $this->entriesAPI->addEntry($entryData);

                    $contestant_entries = $this->entriesAPI->getEntriesByContestantId($contestant_id, $raffle_id);
                    $total_entries = $this->entriesAPI->getTotalEntriesCount($raffle_id);

                    wp_send_json_success(array(
                        'contestant_id' => $contestant_id,
                        'contestant_entries' => $contestant_entries,
                        'total_entries' => $total_entries,
                    ));
                }
            }
        } else {
            wp_send_json_error('Invalid request.');
        }
    }

    public function addClassicEditorButton($buttons)
    {
        $svg_icon = '<svg style="height: 25px; width: 23px; vertical-align: bottom; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 25">
            <g transform="translate(0, 5.5)">
                <path fill="#2271b1" d="M14.5 11.4h4c1 0 1.4-.3 1.3-1.2V4.8c0-1-.5-1-1-1l-6.6-.2a3 3 0 0 1-1.8-.7l-.3-.2c-.6-.6-1.2-1-2-1H3.4c-.8 0-1.5 0-1.5 1.1V8c.1 1 .6 1.4 1.4 1.4l6.2.2c.8 0 1.2.1 2 .5l1.1.8c.7.4 1.4.5 2 .5Z"/>
                <path fill="#2271b1" d="M22 3.3h-.2c-.7 0-1.2-.6-1.2-1.2V2h-7.9c-.7 0-1.5-.3-2-.9a4.3 4.3 0 0 0-3-1.1H1.3v.2A1.2 1.2 0 0 1 1 1c-.3.2-.6.4-1 .4v8.2h.2A1.2 1.2 0 0 1 1.4 11H9c1 0 1.9.4 2.7 1l.4.3c.5.5 1.2.7 2 .7h6.5v-.3c0-.6.6-1.2 1.2-1.1l.1-8.2Zm-3 8.4h-4.3c-.6 0-1.3-.1-2-.6l-1.2-.8c-.8-.4-1.3-.5-2-.5H3c-1 0-1.4-.4-1.5-1.5V2.5c0-1 .6-1.2 1.6-1.2h4.8c.9 0 1.6.6 2.2 1.2l.3.2c.4.4 1.3.7 1.9.7h7c.4 0 1 0 1 1v6.1c0 1-.4 1.3-1.4 1.2Z"/>
            </g>
        </svg>';

        printf(
            '<a href="#" id="insert-raffleleader-shortcode" class="button">%s %s</a>',
            wp_kses(
                $svg_icon,
                array(
                    'svg' => array(
                        'xmlns' => array(),
                        'viewBox' => array(),
                        'style' => array(),
                    ),
                    'g' => array(
                        'transform' => array(),
                    ),
                    'path' => array(
                        'fill' => array(),
                        'd' => array(),
                    ),
                )
            ),
            esc_html__('Add Raffle', 'raffle-leader')
        );
    }

    public function addClassicEditorModal()
    {
        $screen = get_current_screen();

        if ($screen->id != 'post' && $screen->id != 'page') {
            return;
        }
        ?>
        <div id="raffleModal" class="raffle-modal" style="display:none;">
            <div class="raffle-modal-content">
                <span class="close">&times;</span>
                <h2>Select a Raffle</h2>
                <ul id="raffleList">
                    <!-- Raffle items will be dynamically populated here -->
                </ul>
                <button id="insertRaffle">Insert Selected Raffle</button>
            </div>
        </div>
        <?php
    }

    public function handleClassicEditorModalRaffles()
    {
        check_ajax_referer('nonce', 'security');

        $raffles = $this->raffleAPI->getMultipleRaffles(array(
            'active' => 'true',
            'per_page' => -1,
        ));

        wp_send_json_success($raffles);
    }

    public function createNewRafflePost()
    {
        if (isset($_GET['raffle_id'], $_GET['nonce']) && current_user_can('edit_posts')) {
            $nonce = sanitize_text_field(wp_unslash($_GET['nonce']));
            if (!wp_verify_nonce($nonce, 'raffle_publish_nonce')) {
                wp_die('Security check failed. Invalid nonce.');
            }
            $raffle_id = sanitize_text_field(wp_unslash($_GET['raffle_id']));
            $shortcode = '[raffleleader id=' . $raffle_id . ']';

            echo "<script>
                document.addEventListener('DOMContentLoaded', function() {
                    const content = document.getElementById('content');
                    if (content) {
                        content.value = '" . esc_js($shortcode) . "';
                    } else if (window.tinyMCE) {
                        tinyMCE.activeEditor.setContent('" . esc_js($shortcode) . "');
                    }
                });
            </script>";
        }
    }

    public function createNewRafflePage()
    {
        if (isset($_GET['raffle_id'], $_GET['nonce']) && current_user_can('edit_posts')) {
            $nonce = sanitize_text_field(wp_unslash($_GET['nonce']));
            if (!wp_verify_nonce($nonce, 'raffle_publish_nonce')) {
                wp_die('Security check failed. Invalid nonce.');
            }
            $raffle_id = sanitize_text_field(wp_unslash($_GET['raffle_id']));
            $shortcode = '[raffleleader id=' . $raffle_id . ']';

            echo "<script>
            document.addEventListener('DOMContentLoaded', function() {
                const content = document.getElementById('content');
                if (content) {
                    content.value = '" . esc_js($shortcode) . "';
                } else if (window.tinyMCE) {
                    tinyMCE.activeEditor.setContent('" . esc_js($shortcode) . "');
                }
            });
        </script>";
        }
    }

    public function registerRaffleGutenbergBlock()
    {
        if (function_exists('register_block_type')) {
            register_block_type('raffleleader/raffle-block', array(
                'render_callback' => array($this, 'renderRaffleBlock'),
                'attributes' => array(
                    'raffleId' => array(
                        'type' => 'string',
                    ),
                    'shortcode' => array(
                        'type' => 'string',
                    ),
                ),
            ));
        }
    }

    public function renderRaffleBlock($attributes)
    {
        if (isset($attributes['shortcode'])) {
            return do_shortcode($attributes['shortcode']);
        } elseif (isset($attributes['raffleId'])) {
            $raffle_id = intval($attributes['raffleId']);
            return $this->shortcodeHandler(array('id' => $raffle_id));
        } else {
            return '<div>No raffle selected.</div>';
        }
    }
}