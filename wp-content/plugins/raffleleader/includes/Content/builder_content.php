<div class="raffleleader-container">
    <div id="saveModal" class="rl-save-modal">
        <div class="modal-content success-modal-content">
            <h2>Success!</h2>
            <p>Save was completed successfully</p>
        </div>
        <div class="modal-content fail-modal-content">
            <h2>Failed!</h2>
            <p>Save was not completed successfully</p>
        </div>
    </div>
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
                <div class="raffle-options-wrapper">
                    <div class="raffle-options raffle-layout">
                        <div class="header-box raffle-options-header">
                            <h2 class="header-box-title">Layout</h2>
                        </div>
                        <div class="layout-options">
                            <p>Drag & Drop to Add Sections to your Raffle</p>
                            <div id="textBox" draggable="true" class="layout-option-box">
                                <p>+ Text Section</p>
                            </div>
                            <div id="entryBox" draggable="true" class="layout-option-box">
                                <p>+ Entry Section</p>
                            </div>
                            <div id="counterBox" draggable="true" class="layout-option-box">
                                <p>+ Counter Section</p>
                            </div>
                            <div id="imageBox" draggable="true" class="layout-option-box">
                                <p>+ Image Section</p>
                            </div>
                        </div>
                        <div class="layout-size">
                            <p>Adjust Your Raffle's Height and Width</p>
                            <div class="layout-size-row-wrapper">
                                <div class="layout-size-row layout-size-text">
                                    <p>Width</p>
                                    <p>Height</p>
                                </div>
                                <div class="layout-size-row layout-size-input">
                                    <input id="layoutWidthForm" class="layout-size-form" type="text" name="layoutWidth" placeholder="Width">
                                    <p>X</p>
                                    <input id="layoutHeightForm" class="layout-size-form" type="text" name="layoutHeight" placeholder="Height">
                                </div>
                                <div class="layout-size-row layout-size-error">
                                    <p class="layout-min-width-error" style="display: none;">Width must be ≥ 500px!</p>
                                    <p class="layout-min-height-error" style="display: none;">Height must be ≥ 100px!</p>
                                    <p class="layout-max-width-error" style="display: none;">Width must be ≤ 2000px!</p>
                                    <p class="layout-max-height-error" style="display: none;">Height must be ≤ 2000px!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="raffle-options raffle-settings">
                        <div class="header-box raffle-options-header">
                            <h2 class="header-box-title">Settings</h2>
                        </div>
                        <div class="general-settings-options">
                            <a href="#dateAndTime" class="settings-tab-open"><button class="general-settings-btn">Date and Time</button></a>
                            <a href="#rulesAndTerms" class="settings-tab-open"><button class="general-settings-btn">Rules and Terms</button></a>
                            <a href="#emailSettings" class="settings-tab-open"><button class="general-settings-btn">Email Settings</button></a>
                            <a href="#successSettings" class="settings-tab-open"><button class="general-settings-btn">Success Settings</button></a>
                            <a href="#GPDR" class="settings-tab-open"><button class="general-settings-btn">GPDR Consent</button></a>
                            <a href="#recaptcha" class="settings-tab-open"><button class="general-settings-btn">Recaptcha</button></a>
                            <a href="#webhooks" class="settings-tab-open"><button class="general-settings-btn">Webhooks</button></a>
                        </div>
                    </div>
                </div>
                <div class="general-settings-wrapper">
                    <div class="general-settings-menu" id='dateAndTime'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">Date and Time</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                        <div class="general-settings-text">
                            <p>Your Raffle's Start Date & Time and End Date & Time</p>
                        </div>
                        <div class="general-settings-row">
                            <div class="customize-settings-box">
                                <p>Timezone</p>
                                <div class="customize-settings-dropdown">
                                    <div class="dropdown-display date-and-time-display dropdown-timezone">
                                        <p id="timeZoneDropDownTitle">UTC</p>
                                        <p class="dropdown-btn">▼</p>
                                    </div>
                                    <div class="dropdown-content date-and-time-content">
                                        <ul id="timezoneList">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="general-settings-row">
                            <div class="customize-settings-box">
                                <p>Start Date</p>
                                <div class="customize-settings-dropdown">
                                    <div class="dropdown-display date-and-time-display dropdown-date">
                                        <input id="startDate" type="date" name="startDate">
                                    </div>
                                </div>
                            </div>
                            <div class="customize-settings-box">
                                <p>Start Time</p>
                                <div class="customize-settings-dropdown">
                                    <div class="dropdown-display date-and-time-display dropdown-date">
                                        <input id="startTime" type="time" name="startTime">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="general-settings-row">
                            <div class="customize-settings-box">
                                <p>End Date</p>
                                <div class="customize-settings-dropdown">
                                    <div class="dropdown-display date-and-time-display dropdown-date">
                                        <input id="endDate" type="date" name="endDate">
                                    </div>
                                </div>
                            </div>
                            <div class="customize-settings-box">
                                <p>End Time</p>
                                <div class="customize-settings-dropdown">
                                    <div class="dropdown-display date-and-time-display dropdown-date">
                                        <input id="endTime" type="time" name="endTime">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="general-settings-menu" id='rulesAndTerms'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">Rules and Terms</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                        <div class="general-settings-text">
                            <p>Your Raffle's Rules and Terms</p>
                        </div>
                        <div class="general-settings-row rules-and-terms-row">
                            <textarea id="rulesAndTermsForm" class="rules-and-terms-input" type="text" placeholder="Enter Rules and Terms"></textarea>
                        </div>
                    </div>
                    <div class="general-settings-menu" id='emailSettings'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">Email Settings</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                        <div class="general-settings-text">
                            <p>Your Raffle's Email Verification Settings</p>
                        </div>
                        <div class="general-settings-row email-verify-switch">
                            <p>Toggle Email Verification</p>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="general-settings-row email-verify-info">
                            <p>Email verification requires that a participant would need to verify via a confirmation link sent to their email.
                            Entries will still be counted, but a 'verified' tag will be visible in the raffle manager if the participant successfully opened the confirmation link.
                            </p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Sender (Your) Email</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <input class="email-verify-form" type="text" name="emailSender" placeholder="Enter Sender Email">
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Sender (Your) Name</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <input class="email-verify-form" type="text" name="senderName" placeholder="Enter Sender Name">
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Verification Email Subject</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <input class="email-verify-form" type="text" name="emailSubject" placeholder="Enter Email Subject">
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Verification Email Body</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <textarea class="email-verify-body" type="text" name="emailBody" placeholder="Enter Email Body"></textarea>
                        </div>
                        <div class="general-settings-text">
                            <p>Your Raffle's Email Reciept Settings</p>
                        </div>
                        <div class="general-settings-row email-verify-switch">
                            <p>Toggle Email Receipt</p>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="general-settings-row email-verify-info">
                            <p>Email receipts are sent to a participant upon successful submission of an email <span class="inline-form-section">Form Section</span>. If email verification is enabled, then the receipt is sent after verification.</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Sender (Your) Email</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <input class="email-verify-form" type="text" name="emailSender" placeholder="Enter Sender Email">
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Sender (Your) Name</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <input class="email-verify-form" type="text" name="senderName" placeholder="Enter Sender Name">
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Email Receipt Subject</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <input class="email-verify-form" type="text" name="emailSubject" placeholder="Enter Email Subject">
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <p>Email Receipt Body</p>
                        </div>
                        <div class="general-settings-row email-verify-input">
                            <textarea class="email-verify-body" type="text" name="emailBody" placeholder="Enter Email Body"></textarea>
                        </div>
                    </div>
                    <div class="general-settings-menu" id='successSettings'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">Success Settings</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                    </div>
                    <div class="general-settings-menu" id='GPDR'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">GPDR Consent</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                    </div>
                    <div class="general-settings-menu" id='recaptcha'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">Recaptcha</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                    </div>
                    <div class="general-settings-menu" id='webhooks'>
                        <div class="header-box settings-menu-header">
                            <h2 class="header-box-title">Webhooks</h2>
                            <button class="close close-settings-menu"></button>
                        </div>
                    </div>
                </div>
                <div id="previewWrapper" class="preview-wrapper" style="display: none;">
                    <div id="preview" class="preview-box">
                        <div id="dropzone"></div>
                        <div class="footer-wrapper">
                            <div class="footer">
                                <a class="footer-content">Raffle Rules and Terms</a>
                                <img id="footer-logo" class="footer-content footer-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/footer_logo.svg">
                                <a class="footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="footer-text-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/footer_text_logo.svg"> For Yourself!</a>
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
                                    <p>Text Font</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p id="textDropDownTitle">Overview</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul id="textFontList">
                                                <li class="font-title" data-type="textFont">Overpass</li>
                                                <li class="font-title" data-type="textFont">Inter</li>
                                                <li class="font-title" data-type="textFont">Times New Roman</li>
                                                <li class="font-title" data-type="textFont">Garamond</li>
                                                <li class="font-title" data-type="textFont">Georgia</li>
                                                <li class="font-title" data-type="textFont">Palatino</li>
                                                <li class="font-title" data-type="textFont">Baskerville</li>
                                                <li class="font-title" data-type="textFont">Arial</li>
                                                <li class="font-title" data-type="textFont">Verdana</li>
                                                <li class="font-title" data-type="textFont">Helvetica</li>
                                                <li class="font-title" data-type="textFont">Tahoma</li>
                                                <li class="font-title" data-type="textFont">Trebuchet MS</li>
                                                <li class="font-title" data-type="textFont">Impact</li>
                                                <li class="font-title" data-type="textFont">Gill Sans</li>
                                                <li class="font-title" data-type="textFont">Lucida Console</li>
                                                <li class="font-title" data-type="textFont">Courier New</li>
                                                <li class="font-title" data-type="textFont">Monaco</li>
                                                <li class="font-title" data-type="textFont">Brush Script MT</li>
                                                <li class="font-title" data-type="textFont">Lucida Handwriting</li>
                                                <li class="font-title" data-type="textFont">Copperplate</li>
                                                <li class="font-title" data-type="textFont">Papyrus</li>
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
                                            <input id="textFontColorForm" class="color-input" data-type="textColor" type="text" name="textFontColor" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Font Size</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="textFontSizeForm" class="font-size-input" data-type="textFontSize" type="text" name="textFontSize" placeholder="Enter a font size">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Letter Spacing</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="textLetterSpacingForm" class="letter-spacing-input" data-type="textLetterSpacing" name="textLetterSpacing" type="text" placeholder="Enter letter spacing">
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
                                            <input id="textBackgroundColorForm" class="color-input" data-type="textBackgroundColor" type="text" name="textBackgroundColor" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Stroke</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-multi-input multi-input-stroke">
                                            <div class="dropdown-row">
                                                <p>Top</p>
                                                <input id="borderTopStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderTopStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Left</p>
                                                <input id="borderLeftStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderLeftStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Right</p>
                                                <input id="borderRightStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderRightStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Bottom</p>
                                                <input id="borderBottomStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderBottomStroke" placeholder="Enter a size">
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
                                                <input id="borderTopLeftRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderTopLeftRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Top-Right Corner</p>
                                                <input id="borderTopRightRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderTopRightRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Left Corner</p>
                                                <input id="borderBottomLeftRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderBottomLeftRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Right Corner</p>
                                                <input id="borderBottomRightRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderBottomRightRadius" placeholder="Enter a size">
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
                                            <input id="textBorderColorForm" class="color-input" data-type="textBorderColor" type="text" name="textBorderColor" placeholder="Enter a hexidecimal">
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
                        <div id="entryDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Additional Entries</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>X/Twitter Follow Entry</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterTimeLeft" class="dropdown-counter-btn" data-type="counterTimeLeft">Time Left</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>X/Twitter Repost Entry</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterTimeLeft" class="dropdown-counter-btn" data-type="counterTimeLeft">Time Left</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>X/Twitter Like Entry</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterTimeLeft" class="dropdown-counter-btn" data-type="counterTimeLeft">Time Left</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="counterDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Counter Details</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Track Time</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterTimeLeft" class="dropdown-counter-btn" data-type="counterTimeLeft">Time Left</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterTimeStart" class="dropdown-counter-btn" data-type="counterTimeStart">Time Until Start</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Track Entries</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterUserEntries" class="dropdown-counter-btn" data-type="counterUserEntries">Participant Entries</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-counter">
                                            <button id="counterTotalEntries" class="dropdown-counter-btn" data-type="counterTotalEntries">Total Entries</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Text Design</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Text Font</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display">
                                            <p id="counterDropDownTitle">Overview</p>
                                            <p class="dropdown-btn">▼</p>
                                        </div>
                                        <div class="dropdown-content">
                                            <ul id="counterFontList">
                                                <li class="font-title" data-type="counterFont">Overpass</li>
                                                <li class="font-title" data-type="counterFont">Inter</li>
                                                <li class="font-title" data-type="counterFont">Times New Roman</li>
                                                <li class="font-title" data-type="counterFont">Garamond</li>
                                                <li class="font-title" data-type="counterFont">Georgia</li>
                                                <li class="font-title" data-type="counterFont">Palatino</li>
                                                <li class="font-title" data-type="counterFont">Baskerville</li>
                                                <li class="font-title" data-type="counterFont">Arial</li>
                                                <li class="font-title" data-type="counterFont">Verdana</li>
                                                <li class="font-title" data-type="counterFont">Helvetica</li>
                                                <li class="font-title" data-type="counterFont">Tahoma</li>
                                                <li class="font-title" data-type="counterFont">Trebuchet MS</li>
                                                <li class="font-title" data-type="counterFont">Impact</li>
                                                <li class="font-title" data-type="counterFont">Gill Sans</li>
                                                <li class="font-title" data-type="counterFont">Lucida Console</li>
                                                <li class="font-title" data-type="counterFont">Courier New</li>
                                                <li class="font-title" data-type="counterFont">Monaco</li>
                                                <li class="font-title" data-type="counterFont">Brush Script MT</li>
                                                <li class="font-title" data-type="counterFont">Lucida Handwriting</li>
                                                <li class="font-title" data-type="counterFont">Copperplate</li>
                                                <li class="font-title" data-type="counterFont">Papyrus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Font Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color">
                                            <div id="counterColorGradient"></div>
                                            <div id="counterFontColorClick" class="dropdown-color-click" data-type="counterColor"></div>
                                            <input id="counterFontColorForm" class="color-input" data-type="counterColor" type="text" name="counterFontColor" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Font Size</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="counterFontSizeForm" class="font-size-input" data-type="counterFontSize" type="text" name="counterFontSize" placeholder="Enter a font size">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Letter Spacing</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-text">
                                            <input id="counterLetterSpacingForm" class="letter-spacing-input" data-type="counterLetterSpacing" type="text" name="counterLetterSpacing" placeholder="Enter letter spacing">
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
                                            <div id="counterColorGradientBackground"></div>
                                            <div id="counterBackgroundColorClick" class="dropdown-color-click" data-type="counterBackgroundColor"></div>
                                            <input id="counterBackgroundColorForm" class="color-input" data-type="counterBackgroundColor" type="text" name="counterBackgroundColor" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Stroke</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-multi-input multi-input-stroke">
                                            <div class="dropdown-row">
                                                <p>Top</p>
                                                <input id="counterBorderTopStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderTopStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Left</p>
                                                <input id="counterBorderLeftStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderLeftStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Right</p>
                                                <input id="counterBorderRightStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderRightStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Bottom</p>
                                                <input id="counterBorderBottomStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderBottomStroke" placeholder="Enter a size">
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
                                                <input id="counterBorderTopLeftRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderTopLeftRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Top-Right Corner</p>
                                                <input id="counterBorderTopRightRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderTopRightRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Left Corner</p>
                                                <input id="counterBorderBottomLeftRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderBottomLeftRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Right Corner</p>
                                                <input id="counterBorderBottomRightRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderBottomRightRadius" placeholder="Enter a size">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color dropdown-border-color">
                                            <div id="counterColorGradientBorder"></div>
                                            <div id="counterBorderColorClick" class="dropdown-color-click" data-type="counterBorderColor"></div>
                                            <input id="counterBorderColorForm" class="color-input" data-type="counterBorderColor" type="text" name="counterBorderColor" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <div class="customize-settings-dropdown">
                                        <div id="counterDelete" class="dropdown-display delete-display" data-type="counterDelete">
                                            <span>Delete</span>
                                        </div>
                                        <div id="counterConfirmDelete" class="dropdown-display confirm-delete" style="display: none;" data-type="counterDelete">
                                            <span>Confirm Delete</span>
                                        </div>
                                        <p id="counterCancelDelete" class="cancel-delete" style="display: none;" data-type="counterDelete">Cancel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="imageDetails" class="customize-box-content">
                            <div class="dropdown-wrapper">
                                <div class="header-box">
                                    <div class="spacer"></div>
                                    <h2 class="header-box-title">Image Details</h2>
                                    <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Insert Image</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-image">
                                            <div class="img-details">
                                                <a id="imgURL" class="img-url" target="_blank"></a>
                                                <button id="imgDelete" class="img-delete">Delete</button>
                                            </div>
                                            <button id="insertImageBtn" class="insert-img-btn">Insert Image</button>
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
                                    <p>Border Stroke</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-multi-input multi-input-stroke">
                                            <div class="dropdown-row">
                                                <p>Top</p>
                                                <input id="imageBorderTopStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderTopStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Left</p>
                                                <input id="imageBorderLeftStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderLeftStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Right</p>
                                                <input id="imageBorderRightStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderRightStroke" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row">
                                                <p>Bottom</p>
                                                <input id="imageBorderBottomStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderBottomStroke" placeholder="Enter a size">
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
                                                <input id="imageBorderTopLeftRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderTopLeftRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Top-Right Corner</p>
                                                <input id="imageBorderTopRightRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderTopRightRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Left Corner</p>
                                                <input id="imageBorderBottomLeftRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderBottomLeftRadius" placeholder="Enter a size">
                                            </div>
                                            <div class="dropdown-row row-radius">
                                                <p>Bottom-Right Corner</p>
                                                <input id="imageBorderBottomRightRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderBottomRightRadius" placeholder="Enter a size">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <p>Border Color</p>
                                    <div class="customize-settings-dropdown">
                                        <div class="dropdown-display dropdown-color dropdown-border-color">
                                            <div id="imageColorGradientBorder"></div>
                                            <div id="imageBorderColorClick" class="dropdown-color-click" data-type="imageBorderColor"></div>
                                            <input id="imageBorderColorForm" class="color-input" data-type="imageBorderColor" type="text" name="imageBorderColor" placeholder="Enter a hexidecimal">
                                        </div>
                                    </div>
                                </div>
                                <div class="customize-settings-box">
                                    <div class="customize-settings-dropdown">
                                        <div id="imageDelete" class="dropdown-display delete-display" data-type="imageDelete">
                                            <span>Delete</span>
                                        </div>
                                        <div id="imageConfirmDelete" class="dropdown-display confirm-delete" style="display: none;" data-type="imageDelete">
                                            <span>Confirm Delete</span>
                                        </div>
                                        <p id="imageCancelDelete" class="cancel-delete" style="display: none;" data-type="imageDelete">Cancel</p>
                                    </div>
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