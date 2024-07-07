<nav class="raffleleader-license-navbar">
    <div class="raffleleader-license-logo-container">
        <img class="raffleleader-license-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/TEXT-LOGO.svg">
    </div>
</nav>
<div class="wrap">
    <form method="post" action="options.php">
        <div class="wrap-form">
            <?php
            settings_fields('raffleleader_license');
            do_settings_sections('raffleleader_license');
            submit_button('Submit License Key');
            ?>
        </div>
    </form>
</div>