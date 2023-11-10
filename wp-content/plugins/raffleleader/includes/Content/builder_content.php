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
            <li><a class="close" href="admin.php?page=raffleleader_plugin"></a></li>
        </ul>
    </nav>
    <div class="tab-content">
        <div id="templates" class="tab-pane active">
            <div class="giveaway-name">
                <label>Campaign Name</label>
                <input name="name" placeholder="Ex. Twitter Contest">
            </div>
            <div class="template-wrapper">
                <h2>Choose a Template</h2>
                <p class="text-prompt">Choose from one of our professionally designed templates or feel free to completely build your own!</p>
                <div class="template-panels">
                    <div class="panel default-panel">
                        <div class="panel-header">
                            Classic Raffle
                        </div>
                        <div class="panel-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div class="panel-action" style="display: none;">
                            <button class="btn select-btn"></button>
                        </div>
                    </div>
                    <div class="panel blank">
                        <div class="panel-header">
                            Blank Canvas
                        </div>
                        <div class="panel-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div class="panel-action" style="display: none;">
                            <button class="btn select-btn"></button>
                        </div>
                    </div>
                </div>
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