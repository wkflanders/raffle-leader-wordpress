<div class="raffleleader-container">
    <nav class="rl-navbar">
        <div class="rl-nav-logo">
            <img class="rl-text-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/TEXT-LOGO.svg">
        </div>
        <ul class="rl-nav-tabs">
            <li><a class="noSelect" href="#templates">Templates</a></li>
            <li class="active-tab"><a class="noSelect" href="#setup">Set Up</a></li>
            <li><a class="noSelect" href="#publish">Publish</a></li>
        </ul>
        <ul class="rl-nav-extras">
            <li><a class="close" href="admin.php?page=raffleleader_plugin"></a></li>
            <li><a class="help" href="">? Help</a></li>
            <button class="save-btn">Save</button>
        </ul>
    </nav>
    <div class="rl-tab-content">
        <div id="templates" class="rl-tab-pane">
            <div class="rl-template-wrapper">
                <div class="rl-basics grid-row first-row">
                    <div class="label grid-item">
                        <h2>The Basics</h2>
                        <p>Your license key provides access to the plugin's features.</p>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template blank_temp" data-template-id="blank_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>Blank Raffle</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                    <div class="rl-box grid-item">
                    </div>
                    <div class="rl-box grid-item">
                    </div>
                </div>
                <div class="rl-campaigns grid-row">
                    <div class="label grid-item">
                        <h2>Campaigns</h2>
                        <p>Your license key provides access to the plugin's features.</p>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template plaunch_temp" data-template-id="plaunch_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>Pre-Launch</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template email_temp" data-template-id="email_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>Email</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template refer_temp" data-template-id="refer_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>Refer-a-Friend</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                </div>
                <div class="rl-sm grid-row">
                    <div class="label grid-item">
                        <h2>Social Media</h2>
                        <p>Your license key provides access to the plugin's features.</p>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template insta_temp" data-template-id="insta_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>Instagram</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template tiktok_temp" data-template-id="tiktok_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>TikTok</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                    <div class="rl-box grid-item">
                        <div class="rl-box-action" style="display: none">
                            <div class="template-button-wrap">
                                <button class="select-template x_temp" data-template-id="x_temp">Select</button>
                            </div>
                        </div>
                        <div class="grid-text">
                            <h3>Twitter/X</h3>
                            <p>Your license key provides access to the plugin's features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="setup" class="rl-tab-pane active-tab">
            <div id="setupWrapper" class="rl-setup-wrapper">
                <div class="layout-wrapper">
                    <div class="layout">
                        <div class="header-box layout-header">
                            <h2 class="header-box-title">Layout</h2>
                        </div>
                        <div class="layout-options">
                            <p>Drag & Drop to Add Sections to your Raffle!</p>
                            <div id="headerBox" draggable="true" class="layout-option-box">
                                <p>+ Header</p>
                            </div>
                            <div id="subheaderBox" draggable="true" class="layout-option-box">
                                <p>+ Subheader</p>
                            </div>
                            <div id="bodyBox" draggable="true" class="layout-option-box">
                                <p>+ Body Text</p>
                            </div>
                            <div id="formBox" draggable="true" class="layout-option-box">
                                <p>+ Form</p>
                            </div>
                            <div id="counterBox" draggable="true" class="layout-option-box">
                                <p>+ Counter</p>
                            </div>
                            <div id="imageBox" draggable="true" class="layout-option-box">
                                <p>+ Image Section</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="previewWrapper" class="preview-wrapper">
                    <div id="preview" class="preview-box">
                        <div id="dropzone"></div>
                        <div class="footer-wrapper">
                            <div class="footer">
                                <a class="footer-content">Rules and Terms</a>
                                <p>|</p>
                                <a class="footer-content rl_link" target="_blank" href="https://raffleleader.com">Not Using RaffleLeader Yet?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="settingsWrapper" class="settings-wrapper">
                    <div class="settings-content">
                        <div id="headerDetails" class="customize-box-content">
                            <div class="dropdown-wrapper text-design">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Text Design</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Text</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="headerTextForm" class="text-input" data-type="headerText" type="text" placeholder="Enter Header Text">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Text Alignment</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-inline-btns">
                                            <img class="inline-btn align-left" data-type="headerAlign" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/left-text-align.png">
                                            <img class="inline-btn align-center" data-type="headerAlign" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/center-text-align.png">
                                            <img class="inline-btn align-right" data-type="headerAlign" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/right-text-align.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Text Font</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p id="headerDropDownTitle">Overview</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul id="headerFontList">
                                                <!-- Need to add more fonts -->
                                                <li class="font-title" data-type="headerText">Overpass</li>
                                                <li class="font-title" data-type="headerText">Inter</li>
                                                <li class="font-title" data-type="headerText">Courier New</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Font Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color">
                                            <div id="colorGradient"></div>
                                            <div id="headerFontColorClick" class="dropdown-color-click" data-type="headerColor"></div>
                                            <input id="headerFontColorForm" class="color-input" data-type="headerColor" type="text" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Font Size</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="headerFontSizeForm" class="font-size-input" data-type="headerFontSize" type="text" placeholder="Enter a font size">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Font Style </p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-inline-btns">
                                            <img id="headerBoldBtn" class="inline-btn bold-btn" data-type="headerfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bold.png">
                                            <img id="headerItalicizeBtn" class="inline-btn italicize-btn" data-type="headerfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/italicize.png">
                                            <img id="headerUnderlineBtn" class="inline-btn underline-btn" data-type="headerfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/underline.png">
                                            <img id="headerStrikeBtn" class="inline-btn strike-btn" data-type="headerfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/strikethrough.png">
                                            <img id="headerOverlineBtn" class="inline-btn overline-btn" data-type="headerfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/overline.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Letter Spacing</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="headerLetterSpacingForm" class="letter-spacing-input" data-type="headerLetterSpacing" type="text" placeholder="Enter letter spacing">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-wrapper section-design">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Section Design</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Height</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-slide">
                                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Width</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-slide">
                                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Header Background Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p>Overview (Bold)</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Stroke</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p>Overview (Bold)</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p>Overview (Bold)</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                                <li>Overpass</li>
                                                <li>Inter</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <div class="customize-settings-dropdown">
                                        <div id="headerDelete" class="dropdown-display delete-display" data-type="headerDelete">
                                            <span>Delete</span>
                                        </div>
                                        <div id="headerConfirmDelete" class="dropdown-display confirm-delete" style="display: none;" data-type="headerDelete">
                                            <span>Confirm Delete</span>
                                        </div>
                                        <p id="headerCancelDelete" class="cancel-delete" style="display: none;" data-type="headerDelete">Cancel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="subheaderDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Subheader</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                            </div>
                        </div>
                        <div id="bodyDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Body</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                            </div>
                        </div>
                        <div id="formDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Form</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                            </div>
                        </div>
                        <div id="counterDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Counter</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                            </div>
                        </div>
                        <div id="imageDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Image</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="publish" class="rl-tab-pane">
            <h3>Publish</h3>
        </div>
    </div>
</div>