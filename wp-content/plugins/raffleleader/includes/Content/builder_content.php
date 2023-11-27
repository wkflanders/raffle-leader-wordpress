<?php 
global $current_raffle_id;
if ( isset( $current_raffle_id ) ){ ?>
<div class="raffleleader-container">
    <nav class="navbar">
        <div class="nav-logo">
            <img class="text-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/TEXT-LOGO.png">
        </div>
        <ul class="nav-tabs">
            <li class="active"><a class="noSelect" href="#templates">Templates</a></li>
            <li><a class="noSelect" href="#setup">Set Up</a></li>
            <li><a class="noSelect" href="#publish">Publish</a></li>
        </ul>
        <ul class="nav-extras">
            <li><a class="close" href="edit.php?post_type=raffleleader_raffle"></a></li>
        </ul>
    </nav>
    <div class="tab-content">
        <div id="templates" class="tab-pane active">
            <div class="giveaway-name">
                <label>Campaign Name</label>
                <input name="name" placeholder="Ex. Twitter Contest">
            </div>
            <div class="template-wrapper">
                
            </div>
        </div>
        <div id="setup" class="tab-pane">
            <h3>Setup</h3>
        </div>
        <div id="publish" class="tab-pane">
            <h3>Publish</h3>
        </div>
    </div>
</div>
<?php 
}
?>