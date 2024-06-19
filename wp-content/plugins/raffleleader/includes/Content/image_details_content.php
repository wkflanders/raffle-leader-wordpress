<div id="imageDetails" class="customize-box-content">
    <div class="dropdown-wrapper">
        <div class="header-box">
            <div class="spacer"></div>
            <h2 class="header-box-title">Image Details</h2>
        </div>
        <div class="dropdown-settings-wrapper">
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
    </div>
    <div class="dropdown-wrapper section-design">
        <div class="header-box">
            <div class="spacer"></div>
            <h2 class="header-box-title">Section Design</h2>
        </div>
        <div class="dropdown-settings-wrapper">
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
                <p>Border Stroke</p>
                <div class="customize-settings-dropdown">
                    <div class="dropdown-display dropdown-multi-input">
                        <div class="dropdown-row">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_border.svg">
                            <input id="imageBorderTopStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderTopStroke" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_border.svg">
                            <input id="imageBorderBottomStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderBottomStroke" placeholder="--">
                        </div>
                        <div class="dropdown-row">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/left_border.svg">
                            <input id="imageBorderLeftStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderLeftStroke" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/right_border.svg">
                            <input id="imageBorderRightStroke" class="border-stroke-input" data-type="imageBorderStroke" type="text" name="imageBorderRightStroke" placeholder="--">
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
                            <input id="imageBorderTopLeftRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderTopLeftRadius" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/top_right_border.svg">
                            <input id="imageBorderTopRightRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderTopRightRadius" placeholder="--">
                        </div>
                        <div class="dropdown-row row-radius">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_left_border.svg">
                            <input id="imageBorderBottomLeftRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderBottomLeftRadius" placeholder="--">
                            <img class="border-icon" src="<?php echo plugin_dir_url(dirname(__FILE__, 2)) ?> ../../assets/images/bottom_right_border.svg">
                            <input id="imageBorderBottomRightRadius" class="border-radius-input" data-type="imageBorderRadius" type="text" name="imageBorderBottomRightRadius" placeholder="--">
                        </div>
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