<div class="raffleleader-container">
    <div id="saveModal" class="rl-modal">
        <div class="modal-content success-modal-content">
            <h2>Success!</h2>
            <p>Save was completed successfully</p>
        </div>
        <div class="modal-content fail-modal-content">
            <h2>Failed!</h2>
            <p>Save was not completed successfully</p>
        </div>
    </div>
    <div id="templateModal" class="rl-modal">
        <div class="modal-content template-modal-content">
            <h2>Hold on!</h2>
            <p>Choose a template before moving on</p>
        </div>
    </div>
    <div class="loading-menu">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <nav id="rlNavbar" class="rl-navbar" style="display: none;">
        <div class="rl-nav-logo">
            <img class="rl-text-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/TEXT-LOGO.svg">
        </div>
        <ul class="rl-nav-tabs">
            <li class="templates-tab"><a class="noSelect" href="#templates">Templates</a></li>
            <li class="setup-tab"><a class="noSelect" href="#setup">Set Up</a></li>
            <li class="publish-tab"><a class="noSelect" href="#publish">Publish</a></li>
        </ul>
        <ul class="rl-nav-extras">
            <li><a class="close" href="admin.php?page=raffleleader_plugin"></a></li>
            <li><a class="help" href="">Help</a></li>
            <button class="save-btn">Save</button>
        </ul>
    </nav>
    <div class="rl-tab-content">
        <?php require plugin_dir_path( __FILE__ ) . 'templates_content.php'  ?>
        <div id="setup" class="rl-tab-pane">
            <div id="setupWrapper" class="rl-setup-wrapper">
                <div class="raffle-options-wrapper">
                    <div class="raffle-options raffle-layout">
                        <div class="header-box raffle-options-header">
                            <h2 class="header-box-title">Layout</h2>
                        </div>
                        <div class="layout-options">
                            <p>Drag & drop to add sections to your raffle</p>
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
                            <p>Adjust your raffle's height and width</p>
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
                            <a href="#emailSettings" class="settings-tab-open general-settings-deactivated"><button class="general-settings-btn">Email Settings</button></a>
                            <a href="#successSettings" class="settings-tab-open general-settings-deactivated"><button class="general-settings-btn">Success Settings</button></a>
                            <a href="#GPDR" class="settings-tab-open general-settings-deactivated"><button class="general-settings-btn">GPDR Consent</button></a>
                            <a href="#recaptcha" class="settings-tab-open general-settings-deactivated"><button class="general-settings-btn">Recaptcha</button></a>
                            <a href="#webhooks" class="settings-tab-open general-settings-deactivated"><button class="general-settings-btn">Webhooks</button></a>
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
                <div id="previewWrapper" class="raffleleader-preview-wrapper" style="display: none;">
                    <div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                        <div id="dropzone" class="raffleleader-dropzone" style="height: 600px"></div>
                        <div class="raffleleader-footer-wrapper">
                            <div class="raffleleader-footer">
                                <a class="raffleleader-footer-content">Raffle Rules and Terms</a>
                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom-vert.png"> For Yourself!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="settingsWrapper" class="settings-wrapper">
                    <div class="settings-content">
                        <?php require plugin_dir_path( __FILE__ ) . 'text_details_content.php'?>
                        <?php require plugin_dir_path( __FILE__ ) . 'entry_details_content.php'?>
                        <?php require plugin_dir_path( __FILE__ ) . 'counter_details_content.php'?>
                        <?php require plugin_dir_path( __FILE__ ) . 'image_details_content.php'?>
                        <?php require plugin_dir_path( __FILE__ ) . 'additional_entries.php'; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php require plugin_dir_path( __FILE__ ) . 'publish_content.php'?>
    </div>
</div>