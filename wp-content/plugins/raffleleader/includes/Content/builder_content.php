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
                            <div id="textBox" draggable="true" class="layout-option-box">
                                <p>+ Text</p>
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
                <div id="previewWrapper" class="preview-wrapper" style="display: none;">
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
                        <div id="textDetails" class="customize-box-content">
                            <div class="dropdown-wrapper text-design">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Text Design</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Edit Text</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text dropdown-edit-text">
                                            <textarea id="textForm" class="text-input" data-type="editText" type="text" placeholder="Enter Text"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Horizontal Text Alignment</p>
                                    <div class="customize-settings-dropdown text">
                                        <div class="dropdown-display dropdown-inline-btns text-horizontal-align">
                                            <img class="inline-btn align-left" data-type="textAlign" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/left-text-align.png">
                                            <img class="inline-btn align-center" data-type="textAlign" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/center-text-align.png">
                                            <img class="inline-btn align-right" data-type="textAlign" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/right-text-align.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Vertical Text Alignment</p>
                                    <div class="customize-settings-dropdown text-vertical-align">
                                        <div class="dropdown-display dropdown-inline-btns">
                                            <img class="inline-btn align-top" data-type="textVert" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top-vert.png">
                                            <img class="inline-btn align-middle" data-type="textVert" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/center-vert.png">
                                            <img class="inline-btn align-bottom" data-type="textVert" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom-vert.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Text Orientation</p>
                                    <div class="customize-settings-dropdown text-orientation">
                                        <div class="dropdown-display dropdown-inline-btns dropdown-two-btns">
                                            <img class="inline-btn horizontal-orient" data-type="textOrient" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/horizontal-orient.png">
                                            <img class="inline-btn vertical-orient" data-type="textOrient" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/vertical-orient.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Text Font</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p id="textDropDownTitle">Overview</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul id="textFontList">
                                                <!-- Need to add more fonts -->
                                                <li class="font-title" data-type="textFont">Overpass</li>
                                                <li class="font-title" data-type="textFont">Inter</li>
                                                <li class="font-title" data-type="textFont">Courier New</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Font Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color">
                                            <div id="colorGradient"></div>
                                            <div id="textFontColorClick" class="dropdown-color-click" data-type="textColor"></div>
                                            <input id="textFontColorForm" class="color-input" data-type="textColor" type="text" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Font Size</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="textFontSizeForm" class="font-size-input" data-type="textFontSize" type="text" placeholder="Enter a font size">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Font Style </p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-inline-btns">
                                            <img id="textBoldBtn" class="inline-btn bold-btn" data-type="textfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bold.png">
                                            <img id="textItalicizeBtn" class="inline-btn italicize-btn" data-type="textfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/italicize.png">
                                            <img id="textUnderlineBtn" class="inline-btn underline-btn" data-type="textfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/underline.png">
                                            <img id="textStrikeBtn" class="inline-btn strike-btn" data-type="textfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/strikethrough.png">
                                            <img id="textOverlineBtn" class="inline-btn overline-btn" data-type="textfStyle" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/overline.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Letter Spacing</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="textLetterSpacingForm" class="letter-spacing-input" data-type="textLetterSpacing" type="text" placeholder="Enter letter spacing">
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
                                    <p>Background Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color">
                                            <div id="colorGradientBackground"></div>
                                            <div id="textBackgroundColorClick" class="dropdown-color-click" data-type="textBackgroundColor"></div>
                                            <input id="textBackgroundColorForm" class="color-input" data-type="textBackgroundColor" type="text" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Stroke</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-multi-input multi-input-stroke">
                                            <div class="dropdown-row">
                                                <p>Top</p>
                                                <input id="borderTopStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Left</p>
                                                <input id="borderLeftStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Right</p>
                                                <input id="borderRightStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Bottom</p>
                                                <input id="borderBottomStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" placeholder="Enter a size">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Radius</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-multi-input multi-input-radius">
                                            <div class="dropdown-row row-radius">
                                                <p>Top-Left Corner</p>
                                                <input id="borderTopLeftRadius" class="border-radius-input" data-type="textBorderRadius" type="text" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Top-Right Corner</p>
                                                <input id="borderTopRightRadius" class="border-radius-input" data-type="textBorderRadius" type="text" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Left Corner</p>
                                                <input id="borderBottomLeftRadius" class="border-radius-input" data-type="textBorderRadius" type="text" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Right Corner</p>
                                                <input id="borderBottomRightRadius" class="border-radius-input" data-type="textBorderRadius" type="text" placeholder="Enter a size">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color dropdown-border-color">
                                            <div id="colorGradientBorder"></div>
                                            <div id="textBorderColorClick" class="dropdown-color-click" data-type="textBorderColor"></div>
                                            <input id="textBorderColorForm" class="color-input" data-type="textBorderColor" type="text" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <div class="customize-settings-dropdown">
                                        <div id="textDelete" class="dropdown-display delete-display" data-type="textDelete">
                                            <span>Delete</span>
                                        </div>
                                        <div id="textConfirmDelete" class="dropdown-display confirm-delete" style="display: none;" data-type="textDelete">
                                            <span>Confirm Delete</span>
                                        </div>
                                        <p id="textCancelDelete" class="cancel-delete" style="display: none;" data-type="textDelete">Cancel</p>
                                    </div>
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