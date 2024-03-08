<div class="wrap">
    <h1 class="wp-heading-inline">Raffle Leader</h1>
    <table class="wp-list-table widefat fixed striped posts">
        <thead>
            <tr>
                <th scope="col" id="title" class="manage-column column-title column-primary">Title</th>
                <th scope="col" id="status" class="manage-column">Status</th>
                <!-- Add other column headers as needed -->
            </tr>
        </thead>
        <tbody id="the-list">
            <?php
            use Includes\API\RaffleAPI;

            $raffleAPI = new RaffleAPI();   
            $raffles = $raffleAPI->getMultipleRaffles( array( 'per_page' => -1 ) );
            foreach ($raffles as $raffle) {
            ?>
                <tr>
                    <td class="title column-title has-row-actions column-primary">
                        <a href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_builder&raffle_id=' . $raffle['raffle_id'])); ?>"><?php echo esc_html($raffle['name']); ?></a>
                        <div class="row-actions">
                            <span class="edit">
                                <a href="<?php echo esc_url(admin_url('admin.php?page=raffleleader_builder&raffle_id=' . $raffle['raffle_id'])) ?>" class="edit-post">Edit |</a>
                            </span>
                            <span class="delete">
                                <a href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=trash&post=' . $raffle['raffle_id']), 'trash_post_' . $raffle['raffle_id'])) ?>" class="trash-post">Trash</a>
                            </span>
                        </div>
                        <!-- close .row-actions -->
                    </td>
                    <td><?php echo esc_html($raffle['status']) ?></td>
                    <!-- Output other columns here -->
                </tr>
            <?php
            }
            ?>
        </tbody>
    </table>
</div>