<div class="wrap">
        <form method="post" action="options.php">
            <?php
            settings_fields('raffleleader_license');
            do_settings_sections('raffleleader_license');
            submit_button('Submit License Key');
            ?>
        </form>
    </div>