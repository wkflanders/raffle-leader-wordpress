<?php
// Prevent direct access to this file
if (!defined('ABSPATH')) {
    exit;
}

use Includes\API\ContestantsAPI;
use Includes\API\RaffleAPI;
use Includes\API\EntriesAPI;

$raffleAPI = new RaffleAPI();
$contestantsAPI = new ContestantsAPI();
$entriesAPI = new EntriesAPI();

// Handle bulk actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['select_winner']) && isset($_POST['select_winner_nonce']) && isset($_GET['raffle_id'])) {
        $raffleID = intval($_GET['raffle_id']);
        if (wp_verify_nonce($_POST['select_winner_nonce'], 'select_winner_action_' . $raffleID)) {
            $entries = $entriesAPI->getRaffleEntries($raffleID);
            if (!empty($entries)) {
                $currentWinner = $entriesAPI->getEntryByWinner($raffleID);
                if ($currentWinner) {
                    $entriesAPI->updateEntry($currentWinner['entry_id'], [ 'winner' => 'false' ]);
                }

                $randomEntryKey = array_rand($entries);
                $winnerEntry = $entries[ $randomEntryKey ];
                $entriesAPI->updateEntry($winnerEntry['entry_id'], [ 'winner' => 'true' ]);

                // Construct the redirect URL properly
                $redirect_url = add_query_arg(
                    array(
                        'page' => 'raffleleader_plugin',
                        'raffle_id' => $raffleID,
                        'view' => 'entry_details',
                        'winner_selected' => '1',
                    ),
                    admin_url('admin.php')
                );

                echo ("<script>location.href = '" . $redirect_url . "'</script>");
                exit;
            } else {
                wp_die('No entries found for this raffle.');
            }
        } else {
            wp_die('Security check failed for winner selection. Please try again.');
        }
    }
    // Handle bulk actions
    elseif (isset($_POST['bulk-raffles-nonce']) && wp_verify_nonce($_POST['bulk-raffles-nonce'], 'bulk-raffles-action')) {
        if (current_user_can('manage_options')) {
            $action = $_POST['action'] != '-1' ? $_POST['action'] : $_POST['action2'];

            switch ($action) {
                case 'delete':
                    if (isset($_POST['raffle_id']) && is_array($_POST['raffle_id']) && !empty($_POST['raffle_id'])) {
                        foreach ($_POST['raffle_id'] as $raffle_id) {
                            $raffle_id = intval($raffle_id);
                            $raffleAPI->deleteRaffle($raffle_id);
                        }
                    }
                    break;
                // Handle other bulk actions...
            }
            echo ("location.href = '" . $_SERVER['REQUEST_URI'] . "';");
            exit;
        } else {
            wp_die('You do not have sufficient permissions to access this page.');
        }
    }
}

$currentView = isset($_GET['view']) ? sanitize_text_field($_GET['view']) : 'all';
$onlyDeleted = $currentView === 'trash';
$raffleID = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;

// Fetch raffles or entries based on the current view
if ($currentView === 'raffle_details' || $currentView === 'entry_details') {
    if ($raffleID) {
        $entries = $entriesAPI->getRaffleEntries($raffleID);
        usort($entries, function ($a, $b) {
            return strcmp($b['winner'], $a['winner']);
        });

        $contestantIDs = array_column($entries, 'contestant_id');
        $contestants = $contestantsAPI->getMultipleContestants($raffleID, array(
            'per_page' => -1,
            'orderby' => 'contestant_id',
            'order' => 'ASC',
        ));
        $contestantsById = array_column($contestants, null, 'contestant_id');
    } else {
        $entries = [];
        $contestantsById = [];
    }
} else {
    $raffles = $raffleAPI->getMultipleRaffles(array(
        'per_page' => -1,
        'only_deleted' => $onlyDeleted,
    ));
}

$entryTypeMapping = [ 
    'Email' => 'Email',
    'XFollowDetails' => 'X Follow',
    'XRepostDetails' => 'X Repost',
    'XLikeDetails' => 'X Like',
    'instaFollowDetails' => 'Instagram Follow',
    'instaCommentDetails' => 'Instagram Comment',
    'instaLikeDetails' => 'Instagram Like',
    'facebookFollowDetails' => 'Facebook Follow',
    'facebookCommentDetails' => 'Facebook Comment',
    'facebookLikeDetails' => 'Facebook Like',
    'tiktokFollowDetails' => 'TikTok Follow',
    'tiktokCommentDetails' => 'TikTok Comment',
    'tiktokLikeDetails' => 'TikTok Like',
    'referDetails' => 'Refer-A-Friend',
];

?>

<nav class="raffleleader-overview-navbar">
    <div class="raffleleader-overview-logo-container">
        <img class="raffleleader-overview-logo"
            src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/TEXT-LOGO.svg">
    </div>
    <div class="raffleleader-overview-btn-container">
        <button class="raffleleader-overview-create-btn">Create New Raffle</button>
    </div>
</nav>

<div class="wrap">
    <ul class="subsubsub">
        <li><a href="<?php echo esc_url(add_query_arg('view', 'all', admin_url('admin.php?page=raffleleader_plugin'))); ?>"
                <?php echo $currentView === 'all' ? 'class="current"' : ''; ?>>All</a> |</li>
        <li><a href="<?php echo esc_url(add_query_arg('view', 'trash', admin_url('admin.php?page=raffleleader_plugin'))); ?>"
                <?php echo $currentView === 'trash' ? 'class="current"' : ''; ?>>Trash</a></li>
    </ul>

    <?php if (isset($_GET['winner_selected']) && $_GET['winner_selected'] == '1'): ?>
        <div style="clear: both;"></div>
        <div class="notice notice-success">
            <p>A winner has been randomly selected!</p>
        </div>
    <?php endif; ?>

    <?php
    switch ($currentView) {
        case 'raffle_details':
            ?>
            <table class="wp-list-table widefat fixed striped posts">
                <thead>
                    <tr>
                        <th scope="col" id="email" class="manage-column column-title column-primary">Email</th>
                        <th scope="col" id="entries" class="manage-column">Entries Count</th>
                        <th scope="col" id="creation-date" class="manage-column">Entered At</th>
                    </tr>
                </thead>
                <tbody id="the-list">
                    <?php foreach ($contestants as $contestant): ?>
                        <tr>
                            <td class="email column-email"><?php echo esc_html($contestant['email']); ?></td>
                            <td class="entries column-entries">
                                <a
                                    href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffleID . '&view=entry_details')) ?>">
                                    <?php echo intval($contestant['entries_count']); ?>
                                </a>
                            </td>
                            <!-- <td class="entry-date column-entry-date"><?php echo esc_html($contestant['latest_entry_date']); ?></td> -->
                            <td class="creation-date column-creation-date"><?php echo esc_html($contestant['created_at']); ?></td>
                        </tr>
                    <?php endforeach; ?>
                    <?php if (empty($contestants)): ?>
                        <tr>
                            <td colspan="4">No contestants found for this raffle.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
            <?php
            break;

        case 'entry_details':
            ?>
            <style>
                .wp-list-table .column-email {
                    width: 25%;
                }

                .wp-list-table .column-entry-type {
                    width: 15%;
                }

                .wp-list-table .column-social-media {
                    width: 20%;
                }

                .wp-list-table .column-entries {
                    width: 10%;
                }

                .wp-list-table .column-entry-date {
                    width: 20%;
                }

                .wp-list-table .column-winner {
                    width: 10%;
                }

                .wp-list-table .winner-row {
                    background-color: #e6ffe6 !important;
                    /* Light green background */
                    font-weight: bold;
                }

                .wp-list-table .winner-row td {
                    border-top: 2px solid #4CAF50;
                    /* Green top border */
                    border-bottom: 2px solid #4CAF50;
                    /* Green bottom border */
                }
            </style>
            <div style="clear: both; margin-bottom: 6px;"></div>
            <form method="post" style="margin-bottom: 6px" action="">
                <?php wp_nonce_field('select_winner_action_' . $raffleID, 'select_winner_nonce'); ?>
                <button type="submit" name="select_winner" class="button">Select Random Winner</button>
            </form>
            <table class="wp-list-table widefat fixed striped posts">
                <thead>
                    <tr>
                        <th scope="col" id="email" class="manage-column column-email column-primary">Email</th>
                        <th scope="col" id="entry-type" class="manage-column column-entry-type">Entry Type</th>
                        <th scope="col" id="social-media" class="manage-column column-social-media">Social Media Username</th>
                        <th scope="col" id="entries" class="manage-column column-entries">Entries Count</th>
                        <th scope="col" id="entry-date" class="manage-column column-entry-date">Entry Date</th>
                        <th scope="col" id="winner" class="manage-column column-winner">Winner</th>
                    </tr>
                </thead>
                <tbody id="the-list">
                    <?php foreach ($entries as $entry):
                        $isWinner = $entry['winner'] === 'true';
                        $rowClass = $isWinner ? 'winner-row' : '';
                        ?>
                        <tr class="<?php echo $rowClass; ?>">
                            <td class="email column-email">
                                <?php
                                $contestantEmail = isset($contestantsById[ $entry['contestant_id'] ]) ? esc_html($contestantsById[ $entry['contestant_id'] ]['email']) : 'Unknown';
                                ?>
                                <a
                                    href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffleID . '&view=raffle_details')) ?>"><?php echo $contestantEmail; ?>
                                </a>
                            </td>
                            <td class="entry-type column-entry-type">
                                <?php
                                $entryType = $entry['entry_type'];
                                $displayEntryType = isset($entryTypeMapping[ $entryType ]) ? $entryTypeMapping[ $entryType ] : $entryType;
                                echo esc_html($displayEntryType);
                                ?>
                            </td>
                            <td class="social-media column-social-media">
                                <?php
                                $entryDetails = $entry['entry_details'];
                                $displayEntryDetails = isset($entryType) ? $entryDetails : '';
                                echo esc_html($displayEntryDetails);
                                ?>
                            </td>
                            <td class="entries column-entries">1</td>
                            <td class="entry-date column-entry-date"><?php echo esc_html($entry['entry_date']); ?></td>
                            <td class="winner column-winner"><?php echo $isWinner ? '✓' : ''; ?></td>
                        </tr>
                    <?php endforeach; ?>
                    <?php if (empty($entries)): ?>
                        <tr>
                            <td colspan="6">No entries found for this raffle.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
            <?php
            break;


        default:
            ?>
            <form id="raffles-filter" method="post">
                <?php wp_nonce_field('bulk-raffles-action', 'bulk-raffles-nonce'); ?>
                <div class="tablenav top">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-top" class="screen-reader-text">Select bulk action</label>
                        <select name="action" id="bulk-action-selector-top">
                            <option value="-1">Bulk Actions</option>
                            <option value="delete">Trash</option>
                        </select>
                        <input type="submit" id="doaction" class="button action" value="Apply">
                    </div>
                </div>
                <table class="wp-list-table widefat fixed striped posts">
                    <thead>
                        <tr>
                            <th style="vertical-align: middle; padding-bottom: 6px;" id="cb"
                                class="manage-column column-cb check-column">
                                <input id="cb-select-all-1" type="checkbox">
                            </th>
                            <th scope="col" id="title" class="manage-column column-title column-primary">Title</th>
                            <th scope="col" id="start-date" class="manage-column">Participants</th>
                            <th scope="col" id="start-date" class="manage-column">Entries</th>
                            <th scope="col" id="start-date" class="manage-column">Start Date</th>
                            <th scope="col" id="end-date" class="manage-column">End Date</th>
                            <th scope="col" id="status" class="manage-column">Status</th>
                        </tr>
                    </thead>
                    <tbody id="the-list">
                        <?php foreach ($raffles as $raffle):
                            $current_date = new DateTime('now');
                            $start_date_str = 'N/A';
                            $end_date_str = 'N/A';

                            if (isset($raffle['timezone']) && in_array($raffle['timezone'], DateTimeZone::listIdentifiers())) {
                                $timezone = new DateTimeZone($raffle['timezone']);
                            } else {
                                $timezone = new DateTimeZone('UTC');
                            }

                            try {
                                $start_date = isset($raffle['start_date']) ? new DateTime($raffle['start_date']) : null;
                                if ($start_date !== null) {
                                    $start_date->setTimezone($timezone);
                                }

                                $end_date = isset($raffle['end_date']) ? new DateTime($raffle['end_date']) : null;
                                if ($end_date !== null) {
                                    $end_date->setTimezone($timezone);
                                }
                            } catch (Exception $e) {
                                $start_date = null;
                                $end_date = null;
                            }

                            if ($start_date) {
                                $start_date_str = $start_date->format('F j, Y g:i a');
                            }
                            if ($end_date) {
                                $end_date_str = $end_date->format('F j, Y g:i a');
                            }

                            $status = 'Draft';

                            if ($start_date && $end_date) {
                                if ($current_date < $start_date) {
                                    $interval = $current_date->diff($start_date);
                                    if ($interval->days > 0) {
                                        $status = "Starts in " . $interval->days . " day(s)";
                                    } elseif ($interval->h > 0) {
                                        $status = "Starts in " . $interval->h . " hour(s)";
                                    } else {
                                        $status = "Starts in " . $interval->i . " minute(s)";
                                    }
                                } elseif ($current_date > $start_date && $current_date < $end_date) {
                                    $interval = $current_date->diff($end_date);
                                    if ($interval->days > 0) {
                                        $status = "Ends in " . $interval->days . " day(s)";
                                    } elseif ($interval->h > 0) {
                                        $status = "Ends in " . $interval->h . " hour(s)";
                                    } else {
                                        $status = "Ends in " . $interval->i . " minute(s)";
                                    }
                                } elseif ($current_date > $end_date) {
                                    $status = "Finished";
                                }
                            }

                            $raffleAPI->updateRaffle($raffle['raffle_id'], array('status' => $status));
                            ?>
                            <tr>
                                <th scope="row" class="check-column">
                                    <input type="checkbox" name="raffle_id[]" value="<?php echo esc_attr($raffle['raffle_id']); ?>">
                                </th>
                                <td class="title column-title has-row-actions column-primary">
                                    <strong>
                                        <a
                                            href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_builder&raffle_id=' . $raffle['raffle_id'])); ?>"><?php echo esc_html($raffle['name']); ?></a>
                                    </strong>
                                    <div class="row-actions">
                                        <span class="edit">
                                            <a
                                                href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_builder&raffle_id=' . $raffle['raffle_id'])) ?>">Edit
                                                |</a>
                                        </span>
                                        <span class="participants">
                                            <a
                                                href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=raffle_details')) ?>">Participants
                                                |</a>
                                        </span>
                                        <span class="entries">
                                            <a
                                                href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=entry_details')) ?>">Entries
                                                |</a>
                                        </span>
                                        <span class="duplicate">
                                            <a
                                                href="<?php echo wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=raffle_delete&raffle_id=' . $raffle['raffle_id']), 'delete_raffle_action', 'delete_raffle_nonce'); ?>">Duplicate
                                                |</a>
                                        </span>
                                        <span class="delete">
                                            <a
                                                href="<?php echo wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=raffle_delete&raffle_id=' . $raffle['raffle_id']), 'delete_raffle_action', 'delete_raffle_nonce'); ?>">Trash</a>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <a
                                        href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=raffle_details')); ?>">
                                        <?php echo intval($raffle['participants']); ?>
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=entry_details')); ?>">
                                        <?php echo intval($raffle['entries']); ?>
                                    </a>
                                </td>
                                <td><?php echo esc_html($start_date_str) ?></td>
                                <td><?php echo esc_html($end_date_str) ?></td>
                                <td><?php echo esc_html($status) ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th style="vertical-align: middle; padding-bottom: 8px;"
                                class="manage-column column-cb check-column">
                                <input id="cb-select-all-1" type="checkbox">
                            </th>
                            <th scope="col" class="manage-column column-title column-primary">Title</th>
                            <th scope="col" class="manage-column">Participants</th>
                            <th scope="col" class="manage-column">Entries</th>
                            <th scope="col" class="manage-column">Start Date</th>
                            <th scope="col" class="manage-column">End Date</th>
                            <th scope="col" class="manage-column">Status</th>
                        </tr>
                    </tfoot>
                </table>
                <div class="tablenav bottom">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-bottom" class="screen-reader-text">Select bulk action</label>
                        <select name="action2" id="bulk-action-selector-bottom">
                            <option value="-1">Bulk Actions</option>
                            <option value="delete">Trash</option>
                            <!-- Add more bulk actions as needed -->
                        </select>
                        <input type="submit" id="doaction2" class="button action" value="Apply">
                    </div>
                </div>
            </form>
            <?php
            break;
    }
    ?>
</div>