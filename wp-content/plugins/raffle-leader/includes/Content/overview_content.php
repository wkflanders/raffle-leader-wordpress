<?php
if (!defined('ABSPATH')) {
    exit;
}

use Includes\API\ContestantsAPI;
use Includes\API\RaffleAPI;
use Includes\API\EntriesAPI;

$raffleAPI = new RaffleAPI();
$contestantsAPI = new ContestantsAPI();
$entriesAPI = new EntriesAPI();

if (isset($_GET['action']) && $_GET['action'] === 'trash' && isset($_GET['raffle_id']) && isset($_GET['_wpnonce'])) {
    $raffle_id = intval($_GET['raffle_id']);
    $nonce = sanitize_text_field(wp_unslash($_GET['_wpnonce']));

    if (wp_verify_nonce($nonce, 'trash_raffle_' . $raffle_id) && current_user_can('delete_post', $raffle_id)) {
        $raffleAPI->deleteRaffle($raffle_id);
        $redirect_url = add_query_arg(array(
            'page' => 'raffleleader_plugin',
            'trashed' => '1'
        ), admin_url('admin.php'));

        echo '<script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function() {
                window.location.href = "' . esc_js($redirect_url) . '";
            });
        </script>';
        return;
    }
}


if (isset($_GET['action']) && $_GET['action'] === 'delete') {
    $nonce = isset($_GET['_wpnonce']) ? sanitize_text_field(wp_unslash($_GET['_wpnonce'])) : '';
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    $type = isset($_GET['type']) ? sanitize_text_field(wp_unslash($_GET['type'])) : '';
    $raffle_id = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;

    if ($id && $type && $raffle_id) {
        switch ($type) {
            case 'entry':
                if (wp_verify_nonce($nonce, 'delete_entry_' . $id)) {
                    $entriesAPI->deleteEntry($id);
                    $redirect_view = 'entry_details';
                }
                break;
            case 'contestant':
                if (wp_verify_nonce($nonce, 'delete_contestant_' . $id)) {
                    $contestant_entries = $entriesAPI->getEntriesByContestantId($id, $raffle_id);

                    foreach ($contestant_entries as $entry) {
                        $entriesAPI->deleteEntry($entry['entry_id']);
                    }

                    $contestantsAPI->deleteContestant($id);

                    $redirect_view = 'raffle_details';
                }
                break;
        }

        if (isset($redirect_view)) {
            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'raffle_id' => $raffle_id,
                'view' => $redirect_view,
            ), admin_url('admin.php'));

            $redirect_url = esc_url_raw($redirect_url);

            echo '<meta http-equiv="refresh" content="0;url=' . esc_url($redirect_url) . '">';
            exit;
        }
    }
}

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['select_winner']) && isset($_POST['select_winner_nonce']) && isset($_GET['raffle_id'])) {
        $raffle_id = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;
        if (wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['select_winner_nonce'])), 'select_winner_action_' . $raffle_id)) {
            $entries = $entriesAPI->getRaffleEntries($raffle_id);
            if (!empty($entries)) {
                $currentWinner = $entriesAPI->getEntryByWinner($raffle_id);
                if ($currentWinner) {
                    $entriesAPI->updateEntry($currentWinner['entry_id'], [ 'winner' => 'false' ]);
                }

                $randomEntryKey = array_rand($entries);
                $winnerEntry = $entries[ $randomEntryKey ];
                $entriesAPI->updateEntry($winnerEntry['entry_id'], [ 'winner' => 'true' ]);

                $redirect_url = add_query_arg(array(
                    'page' => 'raffleleader_plugin',
                    'raffle_id' => $raffle_id,
                    'view' => 'entry_details',
                    'winner_selected' => '1',
                ), admin_url('admin.php'));

                add_action('admin_footer', function () use ($redirect_url) {
                    ?>
                    <script type="text/javascript">
                        document.addEventListener('DOMContentLoaded', function () {
                            window.location.href = <?php echo wp_json_encode($redirect_url); ?>;
                        });
                    </script>
                    <?php
                });

                return;
            } else {
                wp_die('No entries found for this raffle.');
            }
        } else {
            wp_die('Security check failed for winner selection. Please try again.');
        }
    }
    // Handle bulk actions for raffles
    elseif (isset($_POST['bulk-raffles-nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['bulk-raffles-nonce'])), 'bulk-raffles-action')) {
        if (current_user_can('manage_options')) {
            $action = '-1';
            if (isset($_POST['action']) && $_POST['action'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action']));
            } elseif (isset($_POST['action2']) && $_POST['action2'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action2']));
            }

            $raffles_affected = 0;
            switch ($action) {
                case 'delete':
                    if (isset($_POST['raffle_id']) && is_array($_POST['raffle_id'])) {
                        $raffle_ids = array_map('intval', wp_unslash($_POST['raffle_id']));
                        foreach ($raffle_ids as $raffle_id) {
                            $raffle_id = intval($raffle_id);
                            if ($raffleAPI->deleteRaffle($raffle_id)) {
                                $raffles_affected++;
                            }
                        }
                    }
                    break;
                case 'duplicate':
                    if (isset($_POST['raffle_id']) && is_array($_POST['raffle_id'])) {
                        $raffle_ids = array_map('intval', wp_unslash($_POST['raffle_id']));
                        foreach ($raffle_ids as $raffle_id) {
                            $raffle_id = intval($raffle_id);
                            $new_raffle_id = $raffleAPI->duplicateRaffle($raffle_id);
                            if ($new_raffle_id) {
                                $raffles_affected++;
                            } else {
                                error_log("Failed to duplicate raffle with ID: " . $raffle_id);
                            }
                        }
                    }
                    break;
                case 'restore':
                    if (isset($_POST['raffle_id']) && is_array($_POST['raffle_id'])) {
                        $raffle_ids = array_map('intval', wp_unslash($_POST['raffle_id']));
                        foreach ($raffle_ids as $raffle_id) {
                            $raffle_id = intval($raffle_id);
                            if ($raffleAPI->restoreRaffle($raffle_id)) {
                                $raffles_affected++;
                            }
                        }
                    }
                    break;
                case 'delete_permanent':
                    if (isset($_POST['raffle_id']) && is_array($_POST['raffle_id'])) {
                        $raffle_ids = array_map('intval', wp_unslash($_POST['raffle_id']));
                        foreach ($raffle_ids as $raffle_id) {
                            $raffle_id = intval($raffle_id);
                            if ($raffleAPI->deletePermanently($raffle_id)) {
                                $raffles_affected++;
                            }
                        }
                    }
                    break;
            }

            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'view' => $onlyDeleted ? 'trash' : 'all',
                'bulk_action_performed' => $action,
                'raffles_affected' => $raffles_affected
            ), admin_url('admin.php'));

            echo '<meta http-equiv="refresh" content="0;url=' . esc_url($redirect_url) . '">';
            exit;
        } else {
            wp_die('You do not have sufficient permissions to access this page.');
        }
    } elseif (isset($_POST['bulk-contestants-nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['bulk-contestants-nonce'])), 'bulk-contestants-action')) {
        if (current_user_can('manage_options')) {
            $action = '-1';
            if (isset($_POST['action']) && $_POST['action'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action']));
            } elseif (isset($_POST['action2']) && $_POST['action2'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action2']));
            }

            $raffle_id = isset($_POST['raffle_id']) ? intval($_POST['raffle_id']) : 0;

            $contestants_affected = 0;
            if ($action === 'delete' && isset($_POST['contestant_id']) && is_array($_POST['contestant_id'])) {
                $contestant_ids = array_map('intval', wp_unslash($_POST['contestant_id']));
                foreach ($contestant_ids as $contestant_id) {
                    $contestant_entries = $entriesAPI->getEntriesByContestantId($contestant_id, $raffle_id);

                    foreach ($contestant_entries as $entry) {
                        $entriesAPI->deleteEntry($entry['entry_id']);
                    }

                    if ($contestantsAPI->deleteContestant($contestant_id)) {
                        $contestants_affected++;
                    }
                }
            }

            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'raffle_id' => $raffle_id,
                'view' => 'raffle_details',
                'bulk_action_performed' => $action,
                'contestants_affected' => $contestants_affected
            ), admin_url('admin.php'));

            add_action('admin_footer', function () use ($redirect_url) {
                ?>
                <script type="text/javascript">
                    document.addEventListener('DOMContentLoaded', function () {
                        window.location.href = <?php echo wp_json_encode($redirect_url); ?>;
                    });
                </script>
                <?php
            });

            return;
        }
    } elseif (isset($_POST['bulk-contestants-nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['bulk-contestants-nonce'])), 'bulk-contestants-action')) {
        if (current_user_can('manage_options')) {
            $action = '-1';
            if (isset($_POST['action']) && $_POST['action'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action']));
            } elseif (isset($_POST['action2']) && $_POST['action2'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action2']));
            }

            $raffle_id = isset($_POST['raffle_id']) ? intval($_POST['raffle_id']) : 0;

            $contestants_affected = 0;
            if ($action === 'delete' && isset($_POST['contestant_id']) && is_array($_POST['contestant_id'])) {
                $contestant_ids = array_map('intval', wp_unslash($_POST['contestant_id']));
                foreach ($contestant_ids as $contestant_id) {
                    if ($contestantsAPI->deleteContestant($contestant_id)) {
                        $contestants_affected++;
                    }
                }
            }

            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'raffle_id' => $raffle_id,
                'view' => 'raffle_details',
                'bulk_action_performed' => $action,
                'contestants_affected' => $contestants_affected
            ), admin_url('admin.php'));

            add_action('admin_footer', function () use ($redirect_url) {
                ?>
                <script type="text/javascript">
                    document.addEventListener('DOMContentLoaded', function () {
                        window.location.href = <?php echo wp_json_encode($redirect_url); ?>;
                    });
                </script>
                <?php
            });

            return;
        }
    } elseif (isset($_POST['bulk-entries-nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['bulk-entries-nonce'])), 'bulk-entries-action')) {
        if (current_user_can('manage_options')) {
            $action = '-1';
            if (isset($_POST['action']) && $_POST['action'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action']));
            } elseif (isset($_POST['action2']) && $_POST['action2'] != '-1') {
                $action = sanitize_text_field(wp_unslash($_POST['action2']));
            }

            $raffle_id = isset($_POST['raffle_id']) ? intval($_POST['raffle_id']) : 0;
            $entries_affected = 0;

            if ($action === 'delete' && isset($_POST['entry_id']) && is_array($_POST['entry_id'])) {
                $entry_ids = array_map('intval', wp_unslash($_POST['entry_id']));
                foreach ($entry_ids as $entry_id) {
                    if ($entriesAPI->deleteEntry($entry_id)) {
                        $entries_affected++;
                    }
                }
            }

            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'raffle_id' => $raffle_id,
                'view' => 'entry_details',
                'bulk_action_performed' => $action,
                'entries_affected' => $entries_affected
            ), admin_url('admin.php'));

            add_action('admin_footer', function () use ($redirect_url) {
                ?>
                <script type="text/javascript">
                    document.addEventListener('DOMContentLoaded', function () {
                        window.location.href = <?php echo wp_json_encode($redirect_url); ?>;
                    });
                </script>
                <?php
            });

            return;
        }
    }
}

if (isset($_GET['action']) && $_GET['action'] === 'raffle_duplicate' && isset($_GET['raffle_id']) && isset($_GET['duplicate_raffle_nonce'])) {
    $raffle_id = intval($_GET['raffle_id']);
    if (wp_verify_nonce(sanitize_text_field(wp_unslash($_GET['duplicate_raffle_nonce'])), 'duplicate_raffle_action')) {
        $new_raffle_id = $raffleAPI->duplicateRaffle($raffle_id);
        if ($new_raffle_id) {
            $request_uri = isset($_SERVER['REQUEST_URI']) ? esc_url_raw(wp_unslash($_SERVER['REQUEST_URI'])) : '';
            echo "<script>location.href = '" . esc_js(add_query_arg('raffle_duplicated', '1', $request_uri)) . "';</script>";
            exit;
        } else {
            wp_die('Failed to duplicate raffle.');
        }
    } else {
        wp_die('Security check failed for raffle duplication. Please try again.');
    }
}

if (isset($_GET['raffle_duplicated']) && $_GET['raffle_duplicated'] == '1') {
    add_action('admin_notices', function () {
        echo '<div class="notice notice-success is-dismissible"><p>Raffle duplicated successfully!</p></div>';
    });
}

if (isset($_GET['action']) && $_GET['action'] === 'raffle_restore' && isset($_GET['raffle_id']) && isset($_GET['restore_raffle_nonce'])) {
    $raffle_id = intval($_GET['raffle_id']);
    if (wp_verify_nonce(sanitize_text_field(wp_unslash($_GET['restore_raffle_nonce'])), 'restore_raffle_action')) {
        if ($raffleAPI->restoreRaffle($raffle_id)) {
            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'raffle_id' => $raffle_id,
                'view' => 'trash',
                'raffle_restored' => 1
            ), admin_url('admin.php'));
            echo '<meta http-equiv="refresh" content="0;url=' . esc_url($redirect_url) . '">';
            exit;
        } else {
            wp_die('Failed to restore raffle.');
        }
    } else {
        wp_die('Security check failed for raffle restoration. Please try again.');
    }
}

if (isset($_GET['raffle_restored']) && $_GET['raffle_restored'] == '1') {
    add_action('admin_notices', function () {
        echo '<div class="notice notice-success is-dismissible"><p>Raffle restored successfully!</p></div>';
    });
}

if (isset($_GET['action']) && $_GET['action'] === 'raffle_delete_permanent' && isset($_GET['raffle_id']) && isset($_GET['delete_raffle_permanent_nonce'])) {
    $raffle_id = intval($_GET['raffle_id']);
    if (wp_verify_nonce(sanitize_text_field(wp_unslash($_GET['delete_raffle_permanent_nonce'])), 'delete_raffle_permanent_action')) {
        if ($raffleAPI->deletePermanently($raffle_id)) {
            $redirect_url = add_query_arg(array(
                'page' => 'raffleleader_plugin',
                'raffle_id' => $raffle_id,
                'view' => 'trash',
                'raffle_deleted_permanently' => 1
            ), admin_url('admin.php'));
            echo '<meta http-equiv="refresh" content="0;url=' . esc_url($redirect_url) . '">';
            exit;
        } else {
            wp_die('Failed to permanently delete raffle.');
        }
    } else {
        wp_die('Security check failed for permanent raffle deletion. Please try again.');
    }
}

if (isset($_GET['raffle_deleted_permanently']) && $_GET['raffle_deleted_permanently'] == '1') {
    add_action('admin_notices', function () {
        echo '<div class="notice notice-success is-dismissible"><p>Raffle permanently deleted successfully!</p></div>';
    });
}

$currentView = isset($_GET['view']) ? sanitize_text_field(wp_unslash($_GET['view'])) : 'all';
$onlyDeleted = $currentView === 'trash';
$raffle_id = isset($_GET['raffle_id']) ? intval($_GET['raffle_id']) : 0;

if ($currentView === 'raffle_details' || $currentView === 'entry_details') {
    if ($raffle_id) {
        $entries = $entriesAPI->getRaffleEntries($raffle_id);
        usort($entries, function ($a, $b) {
            return strcmp($b['winner'], $a['winner']);
        });

        $contestantIDs = array_column($entries, 'contestant_id');
        $contestants = $contestantsAPI->getMultipleContestants($raffle_id, array(
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
            src="<?php echo esc_url(plugin_dir_url(dirname(__FILE__, 2)) . './assets/images/TEXT-LOGO.svg'); ?>">
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
    if (isset($_GET['bulk_action_performed']) && isset($_GET['raffles_affected'])) {
        $action = sanitize_text_field(wp_unslash($_GET['bulk_action_performed']));
        $count = intval($_GET['raffles_affected']);
        $message = '';

        switch ($action) {
            case 'delete':
                /* translators: %s: number of raffles */
                $message = sprintf(_n('%s raffle moved to trash.', '%s raffles moved to trash.', $count, 'raffleleader'), number_format_i18n($count));
                break;
            case 'duplicate':
                /* translators: %s: number of raffles */
                $message = sprintf(_n('%s raffle duplicated.', '%s raffles duplicated.', $count, 'raffleleader'), number_format_i18n($count));
                break;
            case 'restore':
                /* translators: %s: number of raffles */
                $message = sprintf(_n('%s raffle restored.', '%s raffles restored.', $count, 'raffleleader'), number_format_i18n($count));
                break;
            case 'delete_permanent':
                /* translators: %s: number of raffles */
                $message = sprintf(_n('%s raffle permanently deleted.', '%s raffles permanently deleted.', $count, 'raffleleader'), number_format_i18n($count));
                break;
        }

        if (!empty($message)) {
            echo '<div class="notice notice-success is-dismissible"><p>' . esc_html($message) . '</p></div>';
        }
    }
    switch ($currentView) {
        case 'raffle_details':
            $contestants_per_page = 10;
            $current_page = isset($_GET['paged']) ? max(1, intval($_GET['paged'])) : 1;
            $search_term = isset($_GET['s']) ? sanitize_text_field(wp_unslash($_GET['s'])) : '';

            $contestants = $contestantsAPI->getContestantsForRaffleView($raffle_id, array(
                'per_page' => $contestants_per_page,
                'page_number' => $current_page,
                'orderby' => 'created_at',
                'order' => 'DESC',
                'search_term' => $search_term
            ));

            $total_contestants = $contestantsAPI->getTotalContestantsCount($raffle_id, $search_term);
            $total_pages = ceil($total_contestants / $contestants_per_page);

            $export_nonce = wp_create_nonce('export_csv_action_' . $raffle_id);
            ?>
            <div style="clear: both;">
                <a href="<?php echo esc_url(wp_nonce_url(admin_url('admin-post.php?action=export_raffle_emails&raffle_id=' . $raffle_id), 'export_csv_action_' . $raffle_id, 'export_nonce')); ?>"
                    class="page-title-action">
                    Export CSV
                </a>
            </div>
            <form id="contestants-filter" method="post">
                <?php wp_nonce_field('bulk-contestants-action', 'bulk-contestants-nonce'); ?>
                <input type="hidden" name="raffle_id" value="<?php echo esc_attr($raffle_id); ?>">
                <div class="tablenav top">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-top" class="screen-reader-text">Select bulk action</label>
                        <select name="action" id="bulk-action-selector-top">
                            <option value="-1">Bulk Actions</option>
                            <option value="delete">Delete</option>
                        </select>
                        <input type="submit" id="doaction" class="button action" value="Apply">
                    </div>
                </div>
                <table class="wp-list-table widefat fixed striped posts">
                    <thead>
                        <tr>
                            <th scope="col" id="cb" class="manage-column column-cb check-column">
                                <input id="cb-select-all-1" type="checkbox">
                            </th>
                            <th scope="col" id="email" class="manage-column column-title column-primary">Email</th>
                            <th scope="col" id="entries" class="manage-column">Entries Count</th>
                            <th scope="col" id="creation-date" class="manage-column">Entered At</th>
                        </tr>
                    </thead>
                    <tbody id="the-list">
                        <?php foreach ($contestants as $contestant): ?>
                            <tr>
                                <th scope="row" class="check-column">
                                    <input type="checkbox" name="contestant_id[]"
                                        value="<?php echo esc_attr($contestant['contestant_id']); ?>">
                                </th>
                                <td class="email column-email"><?php echo esc_html($contestant['email']); ?>
                                    <div class="row-actions">
                                        <span class="delete">
                                            <a
                                                href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=delete&id=' . $contestant['contestant_id'] . '&type=contestant&raffle_id=' . $raffle_id), 'delete_contestant_' . $contestant['contestant_id'])); ?>">Delete</a>
                                        </span>
                                    </div>
                                </td>
                                <td class="entries column-entries">
                                    <a
                                        href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle_id . '&view=entry_details')) ?>">
                                        <?php echo intval($contestant['entries_count']); ?>
                                    </a>
                                </td>
                                <td class="creation-date column-creation-date">
                                    <?php echo esc_html($contestant['created_at']); ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php if (empty($contestants)): ?>
                            <tr>
                                <td colspan="4">No contestants found for this raffle.</td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
                <div class="tablenav bottom">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-bottom" class="screen-reader-text">Select bulk action</label>
                        <select name="action2" id="bulk-action-selector-bottom">
                            <option value="-1">Bulk Actions</option>
                            <option value="delete">Delete</option>
                        </select>
                        <input type="submit" id="doaction2" class="button action" value="Apply">
                    </div>
                    <div class="tablenav-pages">
                        <?php
                        echo wp_kses_post(paginate_links(array(
                            'base' => add_query_arg('paged', '%#%'),
                            'format' => '',
                            'prev_text' => __('&laquo; Previous'),
                            'next_text' => __('Next &raquo;'),
                            'total' => $total_pages,
                            'current' => $current_page
                        )));
                        ?>
                    </div>
                </div>
            </form>
            <?php
            break;

        case 'entry_details':
            $entries_per_page = 10;
            $current_page = isset($_GET['paged']) ? max(1, intval($_GET['paged'])) : 1;
            $offset = ($current_page - 1) * $entries_per_page;

            $winner_entry = $entriesAPI->getEntryByWinner($raffle_id);

            $other_entries = $entriesAPI->getRaffleEntries($raffle_id, array(
                'per_page' => $entries_per_page,
                'page_number' => $current_page,
                'orderby' => 'entry_date',
                'order' => 'DESC'
            ));

            $entries = array();
            if ($winner_entry) {
                $entries[] = $winner_entry;
            }
            foreach ($other_entries as $entry) {
                if ($winner_entry && $entry['entry_id'] == $winner_entry['entry_id']) {
                    continue;
                }
                $entries[] = $entry;
            }

            $total_entries = $entriesAPI->getTotalEntriesCount($raffle_id);
            $total_pages = ceil($total_entries / $entries_per_page);
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
                    font-weight: bold;
                }

                .wp-list-table .winner-row td {
                    border-top: 2px solid #4CAF50;
                    border-bottom: 2px solid #4CAF50;
                }

                .tablenav-pages {
                    float: right;
                    margin: 1em 0;
                }

                .select-winner-container {
                    clear: both;
                }
            </style>
            <div class="select-winner-container">
                <?php
                $select_winner_nonce = wp_create_nonce('select_winner_action_' . $raffle_id);
                ?>
                <form method="post">
                    <input type="hidden" name="select_winner_nonce" value="<?php echo esc_attr($select_winner_nonce); ?>">
                    <input type="submit" name="select_winner" class="button" value="Select Winner">
                </form>
            </div>
            <form id="entries-filter" method="post">
                <?php wp_nonce_field('bulk-entries-action', 'bulk-entries-nonce'); ?>
                <input type="hidden" name="raffle_id" value="<?php echo esc_attr($raffle_id); ?>">
                <div class="tablenav top">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-top" class="screen-reader-text">Select bulk action</label>
                        <select name="action" id="bulk-action-selector-top">
                            <option value="-1">Bulk Actions</option>
                            <option value="delete">Delete</option>
                        </select>
                        <input type="submit" id="doaction" class="button action" value="Apply">
                    </div>
                </div>
                <table class="wp-list-table widefat fixed striped posts">
                    <thead>
                        <tr>
                            <th scope="col" id="cb" class="manage-column column-cb check-column">
                                <input id="cb-select-all-1" type="checkbox">
                            </th>
                            <th scope="col" id="email" class="manage-column column-email column-primary">Email</th>
                            <th scope="col" id="entry-type" class="manage-column column-entry-type">Entry Type</th>
                            <th scope="col" id="social-media" class="manage-column column-social-media">Social Media Username
                            </th>
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
                            <tr class="<?php echo esc_attr($rowClass); ?>">
                                <th scope="row" class="check-column">
                                    <input type="checkbox" name="entry_id[]" value="<?php echo esc_attr($entry['entry_id']); ?>">
                                </th>
                                <td class="email column-email">
                                    <?php
                                    $contestantEmail = isset($contestantsById[ $entry['contestant_id'] ]) ? esc_html($contestantsById[ $entry['contestant_id'] ]['email']) : 'Unknown';
                                    echo esc_html($contestantEmail);
                                    ?>
                                    <div class="row-actions">
                                        <span class="delete">
                                            <a style="font-weight: normal;"
                                                href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=delete&id=' . $entry['entry_id'] . '&type=entry&raffle_id=' . $raffle_id), 'delete_entry_' . $entry['entry_id'])); ?>">Delete</a>
                                        </span>
                                    </div>
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
                                <td class="winner column-winner">
                                    <?php echo $isWinner ? '✓' : ''; ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php if (empty($entries)): ?>
                            <tr>
                                <td colspan="7">No entries found for this raffle.</td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
                <div class="tablenav bottom">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-bottom" class="screen-reader-text">Select bulk action</label>
                        <select name="action2" id="bulk-action-selector-bottom">
                            <option value="-1">Bulk Actions</option>
                            <option value="delete">Delete</option>
                        </select>
                        <input type="submit" id="doaction2" class="button action" value="Apply">
                    </div>
                    <div class="tablenav-pages">
                        <span class="displaying-num"><?php echo esc_html($total_entries); ?> items</span>
                        <?php
                        echo wp_kses_post(paginate_links(array(
                            'base' => add_query_arg('paged', '%#%'),
                            'format' => '',
                            'prev_text' => __('&laquo; Previous'),
                            'next_text' => __('Next &raquo;'),
                            'total' => $total_pages,
                            'current' => $current_page
                        )));
                        ?>
                    </div>
                </div>
            </form>
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
                            <?php if ($onlyDeleted): ?>
                                <option value="restore">Restore</option>
                                <option value="delete_permanent">Delete Permanently</option>
                            <?php else: ?>
                                <option value="delete">Trash</option>
                                <option value="duplicate">Duplicate</option>
                            <?php endif; ?>
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
                            <th scope="col" id="start-date" class="manage-column">Contestants</th>
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

                            if ($onlyDeleted) {
                                $status = "Trashed";
                            } else {
                                $raffleAPI->updateRaffle($raffle['raffle_id'], array('status' => $status));
                            }
                            ?>
                            <tr>
                                <th scope="row" class="check-column">
                                    <input type="checkbox" name="raffle_id[]" value="<?php echo esc_attr($raffle['raffle_id']); ?>">
                                </th>
                                <td class="title column-title has-row-actions column-primary">
                                    <strong>
                                        <?php if ($onlyDeleted): ?>
                                            <?php echo esc_html($raffle['name']); ?>
                                        <?php else: ?>
                                            <a href="<?php
                                            $builder_nonce = wp_create_nonce('verify_raffle_id_action');
                                            $edit_url = add_query_arg(
                                                array(
                                                    'page' => 'raffleleader_builder',
                                                    'raffle_id' => $raffle['raffle_id'],
                                                    '_wpnonce' => $builder_nonce
                                                ),
                                                admin_url('admin.php')
                                            );
                                            echo esc_url($edit_url);
                                            ?>">
                                                <?php echo esc_html($raffle['name']); ?>
                                            </a>
                                        <?php endif; ?>
                                    </strong>
                                    <div class="row-actions">
                                        <?php if ($onlyDeleted): ?>
                                            <span class="restore">
                                                <a
                                                    href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=raffle_restore&raffle_id=' . $raffle['raffle_id']), 'restore_raffle_action', 'restore_raffle_nonce')); ?>">Restore</a>
                                                |
                                            </span>
                                            <span class="delete">
                                                <a
                                                    href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=raffle_delete_permanent&raffle_id=' . $raffle['raffle_id']), 'delete_raffle_permanent_action', 'delete_raffle_permanent_nonce')); ?>">Delete
                                                    Permanently</a>
                                            </span>
                                        <?php else: ?>
                                            <span class="edit">
                                                <a href="<?php
                                                $builder_nonce = wp_create_nonce('verify_raffle_id_action');
                                                $edit_url = add_query_arg(
                                                    array(
                                                        'page' => 'raffleleader_builder',
                                                        'raffle_id' => $raffle['raffle_id'],
                                                        '_wpnonce' => $builder_nonce
                                                    ),
                                                    admin_url('admin.php')
                                                );
                                                echo esc_url($edit_url);
                                                ?>">Edit
                                                    |</a>
                                            </span>
                                            <span class="contestants">
                                                <a
                                                    href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=raffle_details')) ?>">Contestants
                                                    |</a>
                                            </span>
                                            <span class="entries">
                                                <a
                                                    href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=entry_details')) ?>">Entries
                                                    |</a>
                                            </span>
                                            <span class="duplicate">
                                                <a
                                                    href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=raffle_duplicate&raffle_id=' . $raffle['raffle_id']), 'duplicate_raffle_action', 'duplicate_raffle_nonce')); ?>">Duplicate
                                                    |</a>
                                            </span>
                                            <span class="delete">
                                                <a
                                                    href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=trash&raffle_id=' . $raffle['raffle_id']), 'trash_raffle_' . $raffle['raffle_id'])); ?>">Trash</a>
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                </td>
                                <td>
                                    <a
                                        href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_plugin&raffle_id=' . $raffle['raffle_id'] . '&view=raffle_details')); ?>">
                                        <?php echo intval($raffle['contestants']); ?>
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
                            <th scope="col" class="manage-column">Contestants</th>
                            <th scope="col" class="manage-column">Entries</th>
                            <th scope="col" class="manage-column">Start Date</th>
                            <th scope="col" class="manage-column">End Date</th>
                            <th scope="col" class="manage-column">Status</th>
                        </tr>
                    </tfoot>
                </table>
                <div class="tablenav bottom">
                    <div class="alignleft actions bulkactions">
                        <label for="bulk-action-selector-top" class="screen-reader-text">Select bulk action</label>
                        <select name="action2" id="bulk-action-selector-bottom">
                            <option value="-1">Bulk Actions</option>
                            <?php if ($onlyDeleted): ?>
                                <option value="restore">Restore</option>
                                <option value="delete_permanent">Delete Permanently</option>
                            <?php else: ?>
                                <option value="delete">Trash</option>
                                <option value="duplicate">Duplicate</option>
                            <?php endif; ?>
                        </select>
                        <input type="submit" id="doaction" class="button action" value="Apply">
                    </div>
                </div>
            </form>
            <?php
            break;
    }
    if (isset($_GET['deleted']) && $_GET['deleted'] == '1') {
        add_action('admin_notices', function () {
            echo '<div class="notice notice-success is-dismissible"><p>Item deleted successfully.</p></div>';
        });
    }
    ?>
</div>