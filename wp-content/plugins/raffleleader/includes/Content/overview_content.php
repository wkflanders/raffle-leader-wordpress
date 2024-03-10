<?php
 use Includes\API\RaffleAPI;

$currentView = isset( $_GET['view'] ) ? sanitize_text_field( $_GET['view'] ) : 'all';
$onlyDeleted = $currentView === 'trash';

$raffleAPI = new RaffleAPI();  

$raffles = $raffleAPI->getMultipleRaffles( array( 
    'per_page' => -1,
    'only_deleted' => $onlyDeleted, 
) );

 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['bulk-raffles-nonce']) && wp_verify_nonce($_POST['bulk-raffles-nonce'], 'bulk-raffles-action')) {
        if (current_user_can('manage_options')) {
            $action = $_POST['action'] != '-1' ? $_POST['action'] : $_POST['action2'];

            switch ($action) {
                case 'delete':
                    // Ensure raffle_id is an array and is not empty
                    if (isset($_POST['raffle_id']) && is_array($_POST['raffle_id']) && !empty($_POST['raffle_id'])) {
                        foreach ($_POST['raffle_id'] as $raffle_id) {
                            // Perform the delete action for each checked raffle
                            $raffle_id = intval($raffle_id); // Always sanitize user input
                            $raffleAPI->deleteRaffle($raffle_id);
                        }
                    }
                    break;
                // Handle other bulk actions...
            }
        } else {
            wp_die('You do not have sufficient permissions to access this page.');
        }
    } else {
        wp_die('Security check failed.');
    }

    // Redirect to the same page to prevent resubmissions
    ?><script><?php echo("location.href = '".$_SERVER['REQUEST_URI']."';");?></script><?php
    exit;
} 
?>
<h1 class="wp-heading-inline">Raffle Leader</h1>
<div class="wrap">
    <ul class="subsubsub">
        <li><a href="<?php echo esc_url( add_query_arg( 'view', 'all', admin_url( 'admin.php?page=raffleleader_plugin' ) ) ); ?>" <?php echo $currentView === 'all' ? 'class="current"' : ''; ?>>All</a> |</li>
        <li><a href="<?php echo esc_url( add_query_arg( 'view', 'trash', admin_url( 'admin.php?page=raffleleader_plugin' ) ) ); ?>" <?php echo $currentView === 'trash' ? 'class="current"' : ''; ?>>Trash</a></li>    
    </ul>
    <form id="raffles-filter" method="post">
        <?php wp_nonce_field( 'bulk-raffles-action', 'bulk-raffles-nonce' ); ?>
        <div class="tablenav top">
            <div class="alignleft actions bulkactions">
                <label for="bulk-action-selector-top" class="screen-reader-text">Select bulk action</label>
                <select name="action" id="bulk-action-selector-top">
                    <option value="-1">Bulk Actions</option>
                    <option value="delete">Trash</option>
                    <!-- Add more bulk actions as needed -->
                </select>
                <input type="submit" id="doaction" class="button action" value="Apply">
            </div>
        </div>
        <table class="wp-list-table widefat fixed striped posts">
            <thead>
                <tr>
                    <th style="vertical-align: middle; padding-bottom: 6px;" id="cb" class="manage-column column-cb check-column">
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
                <?php foreach ( $raffles as $raffle ) : 
                    $start_date = isset( $raffle['start_date'] ) ? new DateTime( $raffle['start_date'] ) : 'N/A';
                    $end_date = isset( $raffle['end_date'] ) ? new DateTime( $raffle['end_date'] ) : 'N/A'; 
                    
                    $start_date = !is_string( $start_date ) ? $start_date->format( 'F j, Y g:i a' ) : 'N/A';
                    $end_date = !is_string( $end_date ) ? $end_date->format( 'F j, Y g:i a' ) : 'N/A';


                    ?>
                    <tr>
                        <th scope="row" class="check-column">
                            <input type="checkbox" name="raffle_id[]" value="<?php echo esc_attr( $raffle['raffle_id'] ); ?>">
                        </th>
                        <td class="title column-title has-row-actions column-primary">
                            <strong>
                                <a href="<?php echo esc_url( admin_url( 'admin.php?page=raffleleader_builder&raffle_id=' . $raffle['raffle_id'] ) ); ?>"><?php echo esc_html( $raffle['name'] ); ?></a>
                            </strong>
                            <div class="row-actions">
                                <span class="edit">
                                    <a href="<?php echo esc_url( admin_url( 'admin.php?page=raffleleader_builder&raffle_id=' . $raffle['raffle_id'] ) ) ?>">Edit |</a>
                                </span>
                                <span class="delete">
                                    <a href="<?php echo wp_nonce_url( admin_url( 'admin.php?page=raffleleader_plugin&action=raffle_delete&raffle_id=' . $raffle['raffle_id'] ), 'delete_raffle_action', 'delete_raffle_nonce' ); ?>">Trash</a>
                                </span>
                            </div>
                        </td>
                        <td>
                            <a href="<?php echo esc_url(admin_url('admin.php?page=raffle_details&raffle_id=' . $raffle['raffle_id'] . '&detail=participants')); ?>">
                                <?php echo intval($raffle['participants']); ?>
                            </a>
                        </td>
                        <td>
                            <a href="<?php echo esc_url(admin_url('admin.php?page=raffle_details&raffle_id=' . $raffle['raffle_id'] . '&detail=entries')); ?>">
                                <?php echo intval($raffle['entries']); ?>
                            </a>
                        </td>
                        <td><?php echo esc_html( $start_date ) ?></td>
                        <td><?php echo esc_html( $end_date ) ?></td>
                        <td><?php echo esc_html( $raffle['status'] ) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
            <tfoot>
                <tr>
                    <th  style="vertical-align: middle; padding-bottom: 6px;" class="manage-column column-cb check-column">
                        <input id="cb-select-all-1" type="checkbox">
                    </th>
                    <th scope="col" id="title" class="manage-column column-title column-primary">Title</th>
                    <th scope="col" id="start-date" class="manage-column">Participants</th>
                    <th scope="col" id="start-date" class="manage-column">Entries</th>
                    <th scope="col" id="start-date" class="manage-column">Start Date</th>
                    <th scope="col" id="end-date" class="manage-column">End Date</th>
                    <th scope="col" id="status" class="manage-column">Status</th>
                </tr>
            </tfoot>
        </table>
        <div class="tablenav bottom">
            <div class="alignleft actions bulkactions">
                <label for="bulk-action-selector-bottom" class="screen-reader-text">Select bulk action</label>
                <select name="action2" id="bulk-action-selector-bottom">
                    <option value="-1">Bulk Actions</option>
                    <option value="delete">Delete</option>
                    <!-- Add more bulk actions as needed -->
                </select>
                <input type="submit" id="doaction2" class="button action" value="Apply">
            </div>
        </div>
    </form>
</div>