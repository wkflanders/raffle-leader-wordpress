<?php
$license_key = get_option( 'raffleleader_license_key' );
?>
<nav class="raffleleader-license-navbar">
    <div class="raffleleader-license-logo-container">
        <img class="raffleleader-license-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/TEXT-LOGO.svg">
    </div>
</nav>
<div class="wrap">
    <form method="post" action="options.php">
        <div class="wrap-form">
            <p>Your license key: <?php echo $license_key; ?></p>
        </div>
    </form>
</div>
