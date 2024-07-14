<div id="counterDetails" class="customize-box-content">
    <div class="dropdown-wrapper">
        <div class="header-box">
            <h2 class="header-box-title">Counter Details</h2>
        </div>
        <div class="dropdown-settings-wrapper">
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
                        <button id="counterUserEntries" class="dropdown-counter-btn" data-type="counterUserEntries">User Entries</button>
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
    </div>
    <div class="dropdown-wrapper">
        <div class="header-box">
            <h2 class="header-box-title">Text Design</h2>
        </div>
        <div class="dropdown-settings-wrapper">
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
                            <li class="font-title" data-type="counterFont">Jura</li>
                            <li class="font-title" data-type="counterFont">Nunito</li>
                            <li class="font-title" data-type="counterFont">Open Sans</li>
                            <li class="font-title" data-type="counterFont">Orbitron</li>
                            <li class="font-title" data-type="counterFont">Roboto</li>
                            <li class="font-title" data-type="counterFont">Urbanist</li>
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
            <div class="customize-settings-box">
                <p>Text Orientation</p>
                <div class="customize-settings-dropdown counter-orientation">
                    <div class="dropdown-display dropdown-inline-btns dropdown-two-btns">
                        <img class="inline-btn horizontal-orient" data-type="counterOrient" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/horizontal-orient.png">
                        <img class="inline-btn vertical-orient" data-type="counterOrient" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/vertical-orient.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown-wrapper section-design">
        <div class="header-box">
            <h2 class="header-box-title">Section Design</h2>
            <!-- <button class="header-dropdown"><i class="header-box-down header-box-arrow"></i></button> -->
        </div>
        <div class="dropdown-settings-wrapper">
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
                <p>Border Stroke</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-multi-input">
                        <div class="dropdown-row">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_border.svg">
                            <input id="counterBorderTopStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderTopStroke" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_border.svg">
                            <input id="counterBorderBottomStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderBottomStroke" placeholder="--">
                        </div>
                        <div class="dropdown-row">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/left_border.svg">
                            <input id="counterBorderLeftStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderLeftStroke" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/right_border.svg">
                            <input id="counterBorderRightStroke" class="border-stroke-input" data-type="counterBorderStroke" type="text" name="counterBorderRightStroke" placeholder="--">
                        </div>
                    </div>
                </div>
            </div>
            <div class="customize-settings-box">
                <p>Border Radius</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-multi-input">
                        <div class="dropdown-row row-radius">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_left_border.svg">
                            <input id="counterBorderTopLeftRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderTopLeftRadius" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_right_border.svg">
                            <input id="counterBorderTopRightRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderTopRightRadius" placeholder="--">
                        </div>
                        <div class="dropdown-row row-radius">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_left_border.svg">
                            <input id="counterBorderBottomLeftRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderBottomLeftRadius" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_right_border.svg">
                            <input id="counterBorderBottomRightRadius" class="border-radius-input" data-type="counterBorderRadius" type="text" name="counterBorderBottomRightRadius" placeholder="--">
                        </div>
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
</div>