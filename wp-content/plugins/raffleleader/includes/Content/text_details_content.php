<div id="textDetails" class="customize-box-content">
    <div class="dropdown-wrapper text-design">
        <div class="header-box raffle-options-header">
            <h2 class="header-box-title">Text Design</h2>
        </div>
        <div class="dropdown-settings-wrapper">
            <div class="customize-settings-box">
                <p>Edit Text</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-text dropdown-edit-text">
                        <textarea id="textForm" class="text-input" data-type="editText" type="text" placeholder="Enter Text"></textarea>
                    </div>
                </div>
            </div>
            <div class="customize-settings-box">
                <p>Font Style</p>
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
                            <li class="font-title" data-type="textFont">Jura</li>
                            <li class="font-title" data-type="textFont">Nunito</li>
                            <li class="font-title" data-type="textFont">Open Sans</li>
                            <li class="font-title" data-type="textFont">Orbitron</li>
                            <li class="font-title" data-type="textFont">Roboto</li>
                            <li class="font-title" data-type="textFont">Urbanist</li>
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
                    <div class="dropdown-text">
                        <input id="textFontSizeForm" class="dropdown-display font-size-input" data-type="textFontSize" type="text" name="textFontSize" placeholder="Enter a font size">
                    </div>
                </div>
            </div>
            <div class="customize-settings-box">
                <p>Letter Spacing</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-text">
                        <input id="textLetterSpacingForm" class="dropdown-display letter-spacing-input" data-type="textLetterSpacing" name="textLetterSpacing" type="text" placeholder="Enter letter spacing">
                    </div>
                </div>
            </div>
            <div class="customize-settings-box">
                <p>Line Height</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-text">
                        <input id="textLineHeightForm" class="dropdown-display line-height-input" data-type="textLineHeight" name="textLineHeight" type="text" placeholder="Enter line height">
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
    </div>
    <div class="dropdown-wrapper section-design">
        <div class="header-box">
            <h2 class="header-box-title">Section Design</h2>
        </div>
        <div class="dropdown-settings-wrapper">
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
                <p>Border Stroke</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-multi-input">
                        <div class="dropdown-row">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_border.svg">
                            <input id="borderTopStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderTopStroke" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_border.svg">
                            <input id="borderBottomStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderBottomStroke" placeholder="--">
                        </div>
                        <div class="dropdown-row">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/left_border.svg">
                            <input id="borderLeftStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderLeftStroke" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/right_border.svg">
                            <input id="borderRightStroke" class="border-stroke-input" data-type="textBorderStroke" type="text" name="textBorderRightStroke" placeholder="--">
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
                            <input id="borderTopLeftRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderTopLeftRadius" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_right_border.svg">
                            <input id="borderTopRightRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderTopRightRadius" placeholder="--">
                        </div>
                        <div class="dropdown-row row-radius">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_left_border.svg">
                            <input id="borderBottomLeftRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderBottomLeftRadius" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_right_border.svg">
                            <input id="borderBottomRightRadius" class="border-radius-input" data-type="textBorderRadius" type="text" name="textBorderBottomRightRadius" placeholder="--">
                        </div>
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
</div>