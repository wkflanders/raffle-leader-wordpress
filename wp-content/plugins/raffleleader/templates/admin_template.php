<div class="wrap">
    <h1>RaffleLeader Plugin</h1>
    <?php settings_errors(); ?>

    <form method="POST" action="options.php">
        <?php 
            settings_fields( 'raffleleader_options_group' );
            do_settings_sections( 'raffleleader_plugin' );
            submit_button();
        ?>
    </form>
</div>

