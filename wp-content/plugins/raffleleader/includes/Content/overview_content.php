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
            $posts = get_posts(array('post_type' => 'rl_raffle', 'posts_per_page' => -1, 'post_status' => 'any'));
            foreach ($posts as $post) {
            ?>
                <tr>
                    <td class="title column-title has-row-actions column-primary"><?php echo esc_html($post->post_title) ?>
                        <div class="row-actions">
                            <span class="delete">
                                <a href="<?php echo esc_url(wp_nonce_url(admin_url('admin.php?page=raffleleader_plugin&action=trash&post=' . $post->ID), 'trash_post_' . $post->ID)) ?>" class="trash-post">Trash</a>
                            </span>
                        </div>
                        <!-- close .row-actions -->
                    </td>
                    <td><?php echo esc_html($post->post_status) ?></td>
                    <!-- Output other columns here -->
                </tr>
            <?php
            }
            ?>
        </tbody>
    </table>
</div>