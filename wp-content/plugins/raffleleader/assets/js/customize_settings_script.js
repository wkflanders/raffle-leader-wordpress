document.addEventListener('generalSettingsLoaded', ()=>{
    const dropDownBtns = document.querySelectorAll('.dropdown-btn');
    const textForms = document.querySelectorAll('.text-input');
    const leftAlignBtns = document.querySelectorAll('.align-left');
    const rightAlignBtns = document.querySelectorAll('.align-right');
    const centerAlignBtns = document.querySelectorAll('.align-center');
    const topAlignBtns = document.querySelectorAll('.align-top');
    const middleAlignBtns = document.querySelectorAll('.align-middle');
    const bottomAlignBtns = document.querySelectorAll('.align-bottom');
    const verticalOrientBtns = document.querySelectorAll('.vertical-orient');
    const horizontalOrientBtns = document.querySelectorAll('.horizontal-orient');
    const fonts = document.querySelectorAll('.font-title');
    const colorBtns = document.querySelectorAll('.dropdown-color-click');
    const colorForms = document.querySelectorAll('.color-input');
    const fontSizeForms = document.querySelectorAll('.font-size-input');
    const boldBtns = document.querySelectorAll('.bold-btn');
    const italicizeBtns = document.querySelectorAll('.italicize-btn');
    const underlineBtns = document.querySelectorAll('.underline-btn');
    const strikeBtns = document.querySelectorAll('.strike-btn');
    const overlineBtns = document.querySelectorAll('.overline-btn');
    const letterSpacingForms = document.querySelectorAll('.letter-spacing-input');
    
    const borderStrokeForms = document.querySelectorAll('.border-stroke-input');
    const borderRadiusForms = document.querySelectorAll('.border-radius-input');
    const colorGradientPanel = document.getElementById('colorGradient');
    const colorGradientPanelBorder = document.getElementById('colorGradientBorder');
    const colorGradientPanelBackground = document.getElementById('colorGradientBackground');
    const deleteBtns = document.querySelectorAll('.delete-display');
    const confirmDeleteBtns = document.querySelectorAll('.confirm-delete');
    const cancelDeleteBtns = document.querySelectorAll('.cancel-delete');

    const counterBtns = document.querySelectorAll('.dropdown-counter-btn');

    const imageBtn = document.getElementById('insertImageBtn');
    const imageDeleteBtn = document.getElementById('imgDelete');

    const endDateInput = document.getElementById('endDate');
    const startDateInput = document.getElementById('startDate');
    const endTimeInput = document.getElementById('endTime');
    const startTimeInput = document.getElementById('startTime');

    const additionalEntryInputs = document.querySelectorAll('.additional-entry-input');

    let pickrText = undefined;
    let pickrBackground = undefined;
    let pickrBorder = undefined;
    let pickrCounter = undefined;
    let pickerCounterBackground = undefined;
    let pickrCounterBorder = undefined;
    let pickrImageBorder = undefined;
    let pickrEntryBtn = undefined;
    let pickrEntryBackground = undefined;
    let pickrEntryBorder = undefined;

    let pickrXFollowHeader = undefined;
    let pickrXFollowSubheader = undefined;
    let pickrXFollowButton = undefined;
    let pickrXFollowBackground = undefined;
    let pickrXFollowBorder = undefined;
    let pickrXRepostHeader = undefined;
    let pickrXRepostSubheader = undefined;
    let pickrXRepostButton = undefined;
    let pickrXRepostBackground = undefined;
    let pickrXRepostBorder = undefined;
    let pickrXLikeHeader = undefined;
    let pickrXLikeSubheader = undefined;
    let pickrXLikeButton = undefined;
    let pickrXLikeBackground = undefined;
    let pickrXLikeBorder = undefined;

    let pickrInstaFollowHeader = undefined;
    let pickrInstaFollowSubheader = undefined;
    let pickrInstaFollowButton = undefined;
    let pickrInstaFollowBackground = undefined;
    let pickrInstaFollowBorder = undefined;
    let pickrInstaCommentHeader = undefined;
    let pickrInstaCommentSubheader = undefined;
    let pickrInstaCommentButton = undefined;
    let pickrInstaCommentBackground = undefined;
    let pickrInstaCommentBorder = undefined;
    let pickrInstaLikeHeader = undefined;
    let pickrInstaLikeSubheader = undefined;
    let pickrInstaLikeButton = undefined;
    let pickrInstaLikeBackground = undefined;
    let pickrInstaLikeBorder = undefined;

    let pickrFacebookFollowHeader = undefined;
    let pickrFacebookFollowSubheader = undefined;
    let pickrFacebookFollowButton = undefined;
    let pickrFacebookFollowBackground = undefined;
    let pickrFacebookFollowBorder = undefined;
    let pickrFacebookCommentHeader = undefined;
    let pickrFacebookCommentSubheader = undefined;
    let pickrFacebookCommentButton = undefined;
    let pickrFacebookCommentBackground = undefined;
    let pickrFacebookCommentBorder = undefined;
    let pickrFacebookLikeHeader = undefined;
    let pickrFacebookLikeSubheader = undefined;
    let pickrFacebookLikeButton = undefined;
    let pickrFacebookLikeBackground = undefined;
    let pickrFacebookLikeBorder = undefined;

    let pickrTiktokFollowHeader = undefined;
    let pickrTiktokFollowSubheader = undefined;
    let pickrTiktokFollowButton = undefined;
    let pickrTiktokFollowBackground = undefined;
    let pickrTiktokFollowBorder = undefined;
    let pickrTiktokCommentHeader = undefined;
    let pickrTiktokCommentSubheader = undefined;
    let pickrTiktokCommentButton = undefined;
    let pickrTiktokCommentBackground = undefined;
    let pickrTiktokCommentBorder = undefined;
    let pickrTiktokLikeHeader = undefined;
    let pickrTiktokLikeSubheader = undefined;
    let pickrTiktokLikeButton = undefined;
    let pickrTiktokLikeBackground = undefined;
    let pickrTiktokLikeBorder = undefined;


    dropDownBtns.forEach((dropDownBtn)=>{
        dropDownBtn.addEventListener('click', openDropDown);
    });

    textForms.forEach((textForm)=>{
        textForm.addEventListener('input', editPreviewText);
    });

    leftAlignBtns.forEach((leftAlignBtn)=>{
        leftAlignBtn.addEventListener('click', alignTextLeft);
    });

    centerAlignBtns.forEach((leftAlignBtn)=>{
        leftAlignBtn.addEventListener('click', alignTextCenter);
    });

    rightAlignBtns.forEach((leftAlignBtn)=>{
        leftAlignBtn.addEventListener('click', alignTextRight);
    });

    topAlignBtns.forEach((topAlignBtn)=>{
        topAlignBtn.addEventListener('click', alignTextTop);
    });

    middleAlignBtns.forEach((middleAlignBtn)=>{
        middleAlignBtn.addEventListener('click', alignTextMiddle);
    });
    
    bottomAlignBtns.forEach((bottomAlignBtn)=>{
        bottomAlignBtn.addEventListener('click', alignTextBottom);
    });

    verticalOrientBtns.forEach((verticalOrientBtn)=>{
        verticalOrientBtn.addEventListener('click', orientTextVertical);
    });

    horizontalOrientBtns.forEach((horizontalOrientBtn)=>{
        horizontalOrientBtn.addEventListener('click', orientTextHorizontal);
    });

    fonts.forEach((font)=>{
        font.addEventListener('click', selectFont);
    });

    colorBtns.forEach((colorBtn)=>{
        colorBtn.addEventListener('click', showColorGradient);
    });

    colorForms.forEach((colorForm)=>{
        colorForm.addEventListener('input', enterHex);
    });

    fontSizeForms.forEach((fontSizeForm)=>{
        fontSizeForm.addEventListener('input', setFontSize);
    });

    deleteBtns.forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', deleteSection);
    });

    confirmDeleteBtns.forEach((confirmDeleteBtn)=>{
        confirmDeleteBtn.addEventListener('click', confirmDelete);
    });

    cancelDeleteBtns.forEach((cancelDeleteBtn)=>{
        cancelDeleteBtn.addEventListener('click', cancelDelete);
    });

    boldBtns.forEach((boldBtn)=>{
        boldBtn.addEventListener('click', toggleBold);
    });

    italicizeBtns.forEach((italicizeBtn)=>{
        italicizeBtn.addEventListener('click', toggleItalicize);
    });

    underlineBtns.forEach((underlineBtn)=>{
        underlineBtn.addEventListener('click', toggleUnderline);
    });

    strikeBtns.forEach((strikeBtn)=>{
        strikeBtn.addEventListener('click', toggleStrike);
    });

    overlineBtns.forEach((overlineBtn)=>{
        overlineBtn.addEventListener('click', toggleOverline);
    });

    letterSpacingForms.forEach((letterSpacingForm)=>{
        letterSpacingForm.addEventListener('input', setLetterSpacing);
    });

    borderStrokeForms.forEach((borderStrokeForm)=>{
        borderStrokeForm.addEventListener('input', setBorderStroke);
    });

    borderRadiusForms.forEach((borderRadiusForm)=>{
        borderRadiusForm.addEventListener('input', setBorderRadius);
    });

    counterBtns.forEach((counterBtn)=>{
        counterBtn.addEventListener('click', selectCounter);
    });

    imageBtn.addEventListener('click', insertImage);

    imageDeleteBtn.addEventListener('click', deleteImage);

    endDateInput.addEventListener('input', ()=>{
        const endDateCounters = document.querySelectorAll('.show-time-left');
        endDateCounters.forEach(endDateCounter => {
            watchTimeLeft(endDateCounter);
        });
    });

    startDateInput.addEventListener('input', ()=>{
        const startDateCounters = document.querySelectorAll('.show-time-start');
        startDateCounters.forEach(startDateCounter => {
            watchTimeStart(startDateCounter);
        });
    });

    endTimeInput.addEventListener('input', ()=>{
        const endTimeCounters = document.querySelectorAll('.show-time-left');
        endTimeCounters.forEach(endTimeCounter => {
            watchTimeLeft(endTimeCounter);
        });
    });

    startTimeInput.addEventListener('input', ()=>{
        const startTimeCounters = document.querySelectorAll('.show-time-start');
        startTimeCounters.forEach(startTimeCounter => {
            watchTimeStart(startTimeCounter);
        });
    });

    additionalEntryInputs.forEach((additionalEntryInput)=>{
        additionalEntryInput.addEventListener('input', handleAdditionalEntry);
    });

    function openDropDown(event){
        const dropDownBtn = event.target;
        const parentDropDown = dropDownBtn.parentNode.parentNode;
        const currentDropDown = parentDropDown.querySelector('.dropdown-content');

        currentDropDown.classList.toggle('show-dropdown');
    }

    function editPreviewText(event){
        event.preventDefault();
        const inputTextForm = event.target;
        const elementType = inputTextForm.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'editText':
                const selectedTextElement = selectedSection.querySelector('h2');
                selectedTextElement.textContent = this.value;
                break;
            
            case 'editHeader':
                const selectedHeaderElement = selectedSection.querySelector('h2');
                selectedHeaderElement.textContent = this.value;
                break;

            case 'editSubheader':
                const selectedSubheaderElement = selectedSection.querySelector('p');
                selectedSubheaderElement.textContent = this.value;
                break;
        }
    }

    function alignTextLeft(event){
        const inputLeftBtn = event.target;
        const elementType = inputLeftBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textAlign':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.justifyContent = 'left';

                document.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');;
                inputLeftBtn.classList.add('inline-btn-halign-active');
        }
    }

    function alignTextRight(event){
        const inputRightBtn = event.target;
        const elementType = inputRightBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textAlign':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.justifyContent = 'right';

                document.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');;
                inputRightBtn.classList.add('inline-btn-halign-active');
        }
    }

    function alignTextCenter(event){
        const inputCenterBtn = event.target;
        const elementType = inputCenterBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textAlign':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.justifyContent = 'center';

                document.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');;
                inputCenterBtn.classList.add('inline-btn-halign-active');
        }
    }

    function alignTextTop(event){
        const inputerTopBtn = event.target;
        const elementType = inputerTopBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textVert':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.alignItems = 'start';

                document.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');;
                inputerTopBtn.classList.add('inline-btn-valign-active');
        }
    }

    function alignTextMiddle(event){
        const inputMiddleBtn = event.target;
        const elementType = inputMiddleBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textVert':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.alignItems = 'center';

                document.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');;
                inputMiddleBtn.classList.add('inline-btn-valign-active');
        }
    }

    function alignTextBottom(event){
        const inputBottomBtn = event.target;
        const elementType = inputBottomBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textVert':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.alignItems = 'end';

                document.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');;
                inputBottomBtn.classList.add('inline-btn-valign-active');
        }
    }

    function orientTextHorizontal(event){
        const inputHBtn = event.target;
        const elementType = inputHBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textOrient':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.writingMode = 'horizontal-tb';
                selectedElement.style.textOrientation = 'upright';

                document.querySelector('.inline-btn-orient-active').classList.remove('inline-btn-orient-active');;
                inputHBtn.classList.add('inline-btn-orient-active');
        }
    }

    function orientTextVertical(event){
        const inputVBtn = event.target;
        const elementType = inputVBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textOrient':
                selectedElement = selectedSection.querySelector('.raffleleader-text-section');
                selectedElement.style.writingMode = 'vertical-rl';
                selectedElement.style.textOrientation = 'upright';

                document.querySelector('.inline-btn-orient-active').classList.remove('inline-btn-orient-active');;
                inputVBtn.classList.add('inline-btn-orient-active');
        }
    }

    function selectFont(event){
        const inputFontElement = event.target;
        const fontContainer = inputFontElement.parentNode;
        const fontName = inputFontElement.innerText;
        const elementType = inputFontElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textFont':
                const selectedElement = selectedSection.querySelector('h2');
                const textDropDownDisplay = document.getElementById('textDropDownTitle');
                selectedElement.style.fontFamily = `${fontName}`;
                textDropDownDisplay.innerText = fontName;
                break;
            
            case 'counterFont':
                const counterSelectedElementh2 = selectedSection.querySelector('h2');
                const counterSelectedElementp = selectedSection.querySelector('p');
                const counterDropDownDisplay = document.getElementById('counterDropDownTitle');
                counterSelectedElementh2.style.fontFamily = `${fontName}`;
                counterSelectedElementp.style.fontFamily = `${fontName}`;
                counterDropDownDisplay.innerText = fontName;
                break;

            case 'XFollowHeaderFont':
                const selectedXFollowHeaderElement = selectedSection.querySelector('h2');
                const headerXFollowDropDownDisplay = document.getElementById('XFollowHeaderDropDownTitle');
                selectedXFollowHeaderElement.style.fontFamily = `${fontName}`;
                headerXFollowDropDownDisplay.innerText = fontName;
                break;

            case 'XFollowSubheaderFont':
                const selectedXFollowSubheaderElement = selectedSection.querySelector('p');
                const subheaderXFollowDropDownDisplay =  document.getElementById('XFollowSubheaderDropDownTitle');
                selectedXFollowSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderXFollowDropDownDisplay.innerText = fontName;
                break;

            case 'XRepostHeaderFont':
                const selectedXRepostHeaderElement = selectedSection.querySelector('h2');
                const headerXRepostDropDownDisplay = document.getElementById('XRepostHeaderDropDownTitle');
                selectedXRepostHeaderElement.style.fontFamily = `${fontName}`;
                headerXRepostDropDownDisplay.innerText = fontName;
                break;

            case 'XRepostSubheaderFont':
                const selectedXRepostSubheaderElement = selectedSection.querySelector('p');
                const subheaderXRepostDropDownDisplay =  document.getElementById('XRepostSubheaderDropDownTitle');
                selectedXRepostSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderXRepostDropDownDisplay.innerText = fontName;
                break;

            case 'XLikeHeaderFont':
                const selectedXLikeHeaderElement = selectedSection.querySelector('h2');
                const headerXLikeDropDownDisplay = document.getElementById('XLikeHeaderDropDownTitle');
                selectedXLikeHeaderElement.style.fontFamily = `${fontName}`;
                headerXLikeDropDownDisplay.innerText = fontName;
                break;

            case 'XLikeSubheaderFont':
                const selectedXLikeSubheaderElement = selectedSection.querySelector('p');
                const subheaderXLikeDropDownDisplay =  document.getElementById('XLikeSubheaderDropDownTitle');
                selectedXLikeSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderXLikeDropDownDisplay.innerText = fontName;
                break;

            case 'instaFollowHeaderFont':
                const selectedInstaFollowHeaderElement = selectedSection.querySelector('h2');
                const headerInstaFollowDropDownDisplay = document.getElementById('instaFollowHeaderDropDownTitle');
                selectedInstaFollowHeaderElement.style.fontFamily = `${fontName}`;
                headerInstaFollowDropDownDisplay.innerText = fontName;
                break;

            case 'instaFollowSubheaderFont':
                const selectedInstaFollowSubheaderElement = selectedSection.querySelector('p');
                const subheaderInstaFollowDropDownDisplay =  document.getElementById('instaFollowSubheaderDropDownTitle');
                selectedInstaFollowSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderInstaFollowDropDownDisplay.innerText = fontName;
                break;

            case 'instaCommentHeaderFont':
                const selectedInstaRepostHeaderElement = selectedSection.querySelector('h2');
                const headerInstaRepostDropDownDisplay = document.getElementById('instaRepostHeaderDropDownTitle');
                selectedInstaRepostHeaderElement.style.fontFamily = `${fontName}`;
                headerInstaRepostDropDownDisplay.innerText = fontName;
                break;

            case 'instaCommentSubheaderFont':
                const selectedInstaRepostSubheaderElement = selectedSection.querySelector('p');
                const subheaderInstaRepostDropDownDisplay =  document.getElementById('instaRepostSubheaderDropDownTitle');
                selectedInstaRepostSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderInstaRepostDropDownDisplay.innerText = fontName;
                break;

            case 'instaLikeHeaderFont':
                const selectedInstaLikeHeaderElement = selectedSection.querySelector('h2');
                const headerInstaLikeDropDownDisplay = document.getElementById('instaLikeHeaderDropDownTitle');
                selectedInstaLikeHeaderElement.style.fontFamily = `${fontName}`;
                headerInstaLikeDropDownDisplay.innerText = fontName;
                break;

            case 'instaLikeSubheaderFont':
                const selectedInstaLikeSubheaderElement = selectedSection.querySelector('p');
                const subheaderInstaLikeDropDownDisplay =  document.getElementById('instaLikeSubheaderDropDownTitle');
                selectedInstaLikeSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderInstaLikeDropDownDisplay.innerText = fontName;
                break;

            case 'facebookFollowHeaderFont':
                const selectedFacebookFollowHeaderElement = selectedSection.querySelector('h2');
                const headerFacebookFollowDropDownDisplay = document.getElementById('facebookFollowHeaderDropDownTitle');
                selectedFacebookFollowHeaderElement.style.fontFamily = `${fontName}`;
                headerFacebookFollowDropDownDisplay.innerText = fontName;
                break;
        
            case 'facebookFollowSubheaderFont':
                const selectedFacebookFollowSubheaderElement = selectedSection.querySelector('p');
                const subheaderFacebookFollowDropDownDisplay =  document.getElementById('facebookFollowSubheaderDropDownTitle');
                selectedFacebookFollowSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderFacebookFollowDropDownDisplay.innerText = fontName;
                break;
        
            case 'facebookCommentHeaderFont':
                const selectedFacebookCommentHeaderElement = selectedSection.querySelector('h2');
                const headerFacebookCommentDropDownDisplay = document.getElementById('facebookCommentHeaderDropDownTitle');
                selectedFacebookCommentHeaderElement.style.fontFamily = `${fontName}`;
                headerFacebookCommentDropDownDisplay.innerText = fontName;
                break;
        
            case 'facebookCommentSubheaderFont':
                const selectedFacebookCommentSubheaderElement = selectedSection.querySelector('p');
                const subheaderFacebookCommentDropDownDisplay =  document.getElementById('facebookCommentSubheaderDropDownTitle');
                selectedFacebookCommentSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderFacebookCommentDropDownDisplay.innerText = fontName;
                break;
        
            case 'facebookLikeHeaderFont':
                const selectedFacebookLikeHeaderElement = selectedSection.querySelector('h2');
                const headerFacebookLikeDropDownDisplay = document.getElementById('facebookLikeHeaderDropDownTitle');
                selectedFacebookLikeHeaderElement.style.fontFamily = `${fontName}`;
                headerFacebookLikeDropDownDisplay.innerText = fontName;
                break;
        
            case 'facebookLikeSubheaderFont':
                const selectedFacebookLikeSubheaderElement = selectedSection.querySelector('p');
                const subheaderFacebookLikeDropDownDisplay =  document.getElementById('facebookLikeSubheaderDropDownTitle');
                selectedFacebookLikeSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderFacebookLikeDropDownDisplay.innerText = fontName;
                break;

            case 'tiktokFollowHeaderFont':
                const selectedTiktokFollowHeaderElement = selectedSection.querySelector('h2');
                const headerTiktokFollowDropDownDisplay = document.getElementById('tiktokFollowHeaderDropDownTitle');
                selectedTiktokFollowHeaderElement.style.fontFamily = `${fontName}`;
                headerTiktokFollowDropDownDisplay.innerText = fontName;
                break;
        
            case 'tiktokFollowSubheaderFont':
                const selectedTiktokFollowSubheaderElement = selectedSection.querySelector('p');
                const subheaderTiktokFollowDropDownDisplay =  document.getElementById('tiktokFollowSubheaderDropDownTitle');
                selectedTiktokFollowSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderTiktokFollowDropDownDisplay.innerText = fontName;
                break;
        
            case 'tiktokCommentHeaderFont':
                const selectedTiktokRepostHeaderElement = selectedSection.querySelector('h2');
                const headerTiktokRepostDropDownDisplay = document.getElementById('tiktokRepostHeaderDropDownTitle');
                selectedTiktokRepostHeaderElement.style.fontFamily = `${fontName}`;
                headerTiktokRepostDropDownDisplay.innerText = fontName;
                break;
        
            case 'tiktokCommentSubheaderFont':
                const selectedTiktokRepostSubheaderElement = selectedSection.querySelector('p');
                const subheaderTiktokRepostDropDownDisplay =  document.getElementById('tiktokRepostSubheaderDropDownTitle');
                selectedTiktokRepostSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderTiktokRepostDropDownDisplay.innerText = fontName;
                break;
        
            case 'tiktokLikeHeaderFont':
                const selectedTiktokLikeHeaderElement = selectedSection.querySelector('h2');
                const headerTiktokLikeDropDownDisplay = document.getElementById('tiktokLikeHeaderDropDownTitle');
                selectedTiktokLikeHeaderElement.style.fontFamily = `${fontName}`;
                headerTiktokLikeDropDownDisplay.innerText = fontName;
                break;
        
            case 'tiktokLikeSubheaderFont':
                const selectedTiktokLikeSubheaderElement = selectedSection.querySelector('p');
                const subheaderTiktokLikeDropDownDisplay =  document.getElementById('tiktokLikeSubheaderDropDownTitle');
                selectedTiktokLikeSubheaderElement.style.fontFamily = `${fontName}`;
                subheaderTiktokLikeDropDownDisplay.innerText = fontName;
                break;
        }

        const currentFont = fontContainer.querySelector('.selected-font');

        if(event.target != currentFont){
            inputFontElement.classList.add('selected-font');
            currentFont.classList.remove('selected-font');
        }
    }


    function showColorGradient(event){
        const inputColorElement = event.target;
        const elementType = inputColorElement.getAttribute('data-type');
        
        switch(elementType){
            case 'textColor':
                const currentTextFontColor = document.getElementById('textFontColorForm').value;

                pickrText = Pickr.create({
                    el: colorGradientPanel,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTextFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrText.setColorRepresentation('HEX');
                pickrText.show();

                pickrText.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'textBackgroundColor':
                const currentTextBackgroundColor = document.getElementById('textBackgroundColorForm').value;

                pickrBackground = Pickr.create({
                    el: colorGradientPanelBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTextBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrBackground.setColorRepresentation('HEX');
                pickrBackground.show();

                pickrBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'textBorderColor':
                const currentBorderColor = document.getElementById('textBorderColorForm').value;

                pickrBorder = Pickr.create({
                    el: colorGradientPanelBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrBorder.setColorRepresentation('HEX');
                pickrBorder.show();

                pickrBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'counterColor':
                const currentCounterFontColor = document.getElementById('counterFontColorForm').value;

                pickrCounter = Pickr.create({
                    el: counterColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentCounterFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrCounter.setColorRepresentation('HEX');
                pickrCounter.show();

                pickrCounter.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'counterBackgroundColor':
                const currentCounterBackgroundColor = document.getElementById('counterBackgroundColorForm').value;

                pickerCounterBackground = Pickr.create({
                    el: counterColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentCounterBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickerCounterBackground.setColorRepresentation('HEX');
                pickerCounterBackground.show();

                pickerCounterBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'counterBorderColor':
                const counterCurrentBorderColor = document.getElementById('counterBorderColorForm').value;

                pickrCounterBorder = Pickr.create({
                    el: counterColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: counterCurrentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrCounterBorder.setColorRepresentation('HEX');
                pickrCounterBorder.show();

                pickrCounterBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'imageBorderColor':
                const imageCurrentBorderColor = document.getElementById('imageBorderColorForm').value;

                pickrImageBorder = Pickr.create({
                    el: imageColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: imageCurrentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrImageBorder.setColorRepresentation('HEX');
                pickrImageBorder.show();

                pickrImageBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'entryButtonColor':
                const entryCurrentButtonColor = document.getElementById('entryButtonColorForm').value;

                pickrEntryBtn = Pickr.create({
                    el: entryColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: entryCurrentButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrEntryBtn.setColorRepresentation('HEX');
                pickrEntryBtn.show();

                pickrEntryBtn.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'entryBackgroundColor':
                const entryCurrentBackgroundColor = document.getElementById('entryBackgroundColorForm').value;

                pickrEntryBackground = Pickr.create({
                    el: entryColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: entryCurrentBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrEntryBackground.setColorRepresentation('HEX');
                pickrEntryBackground.show();

                pickrEntryBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'entryBorderColor':
                const entryCurrentBorderColor = document.getElementById('entryBorderColorForm').value;

                pickrEntryBorder = Pickr.create({
                    el: entryColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: entryCurrentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrEntryBorder.setColorRepresentation('HEX');
                pickrEntryBorder.show();

                pickrEntryBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XFollowHeaderColor':
                const currentXFollowHeaderFontColor = document.getElementById('XFollowHeaderFontColorForm').value;

                pickrXFollowHeader = Pickr.create({
                    el: XFollowHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXFollowHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXFollowHeader.setColorRepresentation('HEX');
                pickrXFollowHeader.show();

                pickrXFollowHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XFollowSubheaderColor':
                const currentXFollowSubheaderFontColor = document.getElementById('XFollowSubheaderFontColorForm').value;

                pickrXFollowSubheader = Pickr.create({
                    el: XFollowSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXFollowSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXFollowSubheader.setColorRepresentation('HEX');
                pickrXFollowSubheader.show();

                pickrXFollowSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            case 'XFollowButtonColor':
                const currentXFollowButtonColor = document.getElementById('XFollowButtonColorForm').value;

                pickrXFollowButton = Pickr.create({
                    el: XFollowColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXFollowButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXFollowButton.setColorRepresentation('HEX');
                pickrXFollowButton.show();

                pickrXFollowButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XFollowBackgroundColor':
                const currentXFollowBackgroundColor = document.getElementById('XFollowBackgroundColorForm').value;

                pickrXFollowBackground = Pickr.create({
                    el: XFollowColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXFollowBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXFollowBackground.setColorRepresentation('HEX');
                pickrXFollowBackground.show();

                pickrXFollowBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XFollowBorderColor':
                const currentXFollowBorderColor = document.getElementById('XFollowBorderColorForm').value;

                pickrXFollowBorder = Pickr.create({
                    el: XFollowColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXFollowBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXFollowBorder.setColorRepresentation('HEX');
                pickrXFollowBorder.show();

                pickrXFollowBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XRepostHeaderColor':
                const currentXRepostHeaderFontColor = document.getElementById('XRepostHeaderFontColorForm').value;

                pickrXRepostHeader = Pickr.create({
                    el: XRepostHeadeColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXRepostHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXRepostHeader.setColorRepresentation('HEX');
                pickrXRepostHeader.show();

                pickrXRepostHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XRepostSubheaderColor':
                const currentXRepostSubheaderFontColor = document.getElementById('XRepostSubheaderFontColorForm').value;

                pickrXRepostSubheader = Pickr.create({
                    el: XRepostSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXRepostSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXRepostSubheader.setColorRepresentation('HEX');
                pickrXRepostSubheader.show();

                pickrXRepostSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            case 'XRepostButtonColor':
                const currentXRepostButtonColor = document.getElementById('XRepostButtonColorForm').value;

                pickrXRepostButton = Pickr.create({
                    el: XRepostColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXRepostButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXRepostButton.setColorRepresentation('HEX');
                pickrXRepostButton.show();

                pickrXRepostButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XRepostBackgroundColor':
                const currentXRepostBackgroundColor = document.getElementById('XRepostBackgroundColorForm').value;

                pickrXRepostBackground = Pickr.create({
                    el: XRepostColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXRepostBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXRepostBackground.setColorRepresentation('HEX');
                pickrXRepostBackground.show();

                pickrXRepostBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XRepostBorderColor':
                const currentXRepostBorderColor = document.getElementById('XRepostBorderColorForm').value;

                pickrXRepostBorder = Pickr.create({
                    el: XRepostColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXRepostBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXRepostBorder.setColorRepresentation('HEX');
                pickrXRepostBorder.show();

                pickrXRepostBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XLikeHeaderColor':
                const currentXLikeHeaderFontColor = document.getElementById('XLikeHeaderFontColorForm').value;

                pickrXLikeHeader = Pickr.create({
                    el: XLikeHeadeColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXLikeHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXLikeHeader.setColorRepresentation('HEX');
                pickrXLikeHeader.show();

                pickrXLikeHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XLikeSubheaderColor':
                const currentXLikeSubheaderFontColor = document.getElementById('XLikeSubheaderFontColorForm').value;

                pickrXLikeSubheader = Pickr.create({
                    el: XLikeSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXLikeSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXLikeSubheader.setColorRepresentation('HEX');
                pickrXLikeSubheader.show();

                pickrXLikeSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            case 'XLikeButtonColor':
                const currentXLikeButtonColor = document.getElementById('XLikeButtonColorForm').value;

                pickrXLikeButton = Pickr.create({
                    el: XLikeColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXLikeButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXLikeButton.setColorRepresentation('HEX');
                pickrXLikeButton.show();

                pickrXLikeButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XLikeBackgroundColor':
                const currentXLikeBackgroundColor = document.getElementById('XLikeBackgroundColorForm').value;

                pickrXLikeBackground = Pickr.create({
                    el: XLikeColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXLikeBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXLikeBackground.setColorRepresentation('HEX');
                pickrXLikeBackground.show();

                pickrXLikeBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'XLikeBorderColor':
                const currentXLikeBorderColor = document.getElementById('XLikeBorderColorForm').value;

                pickrXLikeBorder = Pickr.create({
                    el: XLikeColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentXLikeBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrXLikeBorder.setColorRepresentation('HEX');
                pickrXLikeBorder.show();

                pickrXLikeBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaFollowHeaderColor':
                const currentInstaFollowHeaderFontColor = document.getElementById('instaFollowHeaderFontColorForm').value;

                pickrInstaFollowHeader = Pickr.create({
                    el: instaFollowHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaFollowHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaFollowHeader.setColorRepresentation('HEX');
                pickrInstaFollowHeader.show();

                pickrInstaFollowHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaFollowSubheaderColor':
                const currentInstaFollowSubheaderFontColor = document.getElementById('instaFollowSubheaderFontColorForm').value;

                pickrInstaFollowSubheader = Pickr.create({
                    el: instaFollowSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaFollowSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaFollowSubheader.setColorRepresentation('HEX');
                pickrInstaFollowSubheader.show();

                pickrInstaFollowSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            case 'instaFollowButtonColor':
                const currentInstaFollowButtonColor = document.getElementById('instaFollowButtonColorForm').value;

                pickrInstaFollowButton = Pickr.create({
                    el: instaFollowColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaFollowButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaFollowButton.setColorRepresentation('HEX');
                pickrInstaFollowButton.show();

                pickrInstaFollowButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaFollowBackgroundColor':
                const currentInstaFollowBackgroundColor = document.getElementById('instaFollowBackgroundColorForm').value;

                pickrInstaFollowBackground = Pickr.create({
                    el: instaFollowColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaFollowBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaFollowBackground.setColorRepresentation('HEX');
                pickrInstaFollowBackground.show();

                pickrInstaFollowBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaFollowBorderColor':
                const currentInstaFollowBorderColor = document.getElementById('instaFollowBorderColorForm').value;

                pickrInstaFollowBorder = Pickr.create({
                    el: instaFollowColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaFollowBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaFollowBorder.setColorRepresentation('HEX');
                pickrInstaFollowBorder.show();

                pickrInstaFollowBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaCommentHeaderColor':
                const currentInstaCommentHeaderFontColor = document.getElementById('instaCommentHeaderFontColorForm').value;

                pickrInstaCommentHeader = Pickr.create({
                    el: instaCommentHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaCommentHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaCommentHeader.setColorRepresentation('HEX');
                pickrInstaCommentHeader.show();

                pickrInstaCommentHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaCommentSubheaderColor':
                const currentInstaCommentSubheaderFontColor = document.getElementById('instaCommentSubheaderFontColorForm').value;

                pickrInstaCommentSubheader = Pickr.create({
                    el: instaCommentSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaCommentSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaCommentSubheader.setColorRepresentation('HEX');
                pickrInstaCommentSubheader.show();

                pickrInstaCommentSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaCommentButtonColor':
                const currentInstaCommentButtonColor = document.getElementById('instaCommentButtonColorForm').value;

                pickrInstaCommentButton = Pickr.create({
                    el: instaCommentColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaCommentButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaCommentButton.setColorRepresentation('HEX');
                pickrInstaCommentButton.show();

                pickrInstaCommentButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaCommentBackgroundColor':
                const currentInstaCommentBackgroundColor = document.getElementById('instaCommentBackgroundColorForm').value;

                pickrInstaCommentBackground = Pickr.create({
                    el: instaCommentColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaCommentBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaCommentBackground.setColorRepresentation('HEX');
                pickrInstaCommentBackground.show();

                pickrInstaCommentBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaCommentBorderColor':
                const currentInstaCommentBorderColor = document.getElementById('instaCommentBorderColorForm').value;

                pickrInstaCommentBorder = Pickr.create({
                    el: instaCommentColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaCommentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaCommentBorder.setColorRepresentation('HEX');
                pickrInstaCommentBorder.show();

                pickrInstaCommentBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaLikeHeaderColor':
                const currentInstaLikeHeaderFontColor = document.getElementById('instaLikeHeaderFontColorForm').value;

                pickrInstaLikeHeader = Pickr.create({
                    el: instaLikeHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaLikeHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaLikeHeader.setColorRepresentation('HEX');
                pickrInstaLikeHeader.show();

                pickrInstaLikeHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaLikeSubheaderColor':
                const currentInstaLikeSubheaderFontColor = document.getElementById('instaLikeSubheaderFontColorForm').value;

                pickrInstaLikeSubheader = Pickr.create({
                    el: instaLikeSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaLikeSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaLikeSubheader.setColorRepresentation('HEX');
                pickrInstaLikeSubheader.show();

                pickrInstaLikeSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            case 'instaLikeButtonColor':
                const currentInstaLikeButtonColor = document.getElementById('instaLikeButtonColorForm').value;

                pickrInstaLikeButton = Pickr.create({
                    el: instaLikeColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaLikeButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaLikeButton.setColorRepresentation('HEX');
                pickrInstaLikeButton.show();

                pickrInstaLikeButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaLikeBackgroundColor':
                const currentInstaLikeBackgroundColor = document.getElementById('instaLikeBackgroundColorForm').value;

                pickrInstaLikeBackground = Pickr.create({
                    el: instaLikeColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaLikeBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaLikeBackground.setColorRepresentation('HEX');
                pickrInstaLikeBackground.show();

                pickrInstaLikeBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'instaLikeBorderColor':
                const currentInstaLikeBorderColor = document.getElementById('instaLikeBorderColorForm').value;

                pickrInstaLikeBorder = Pickr.create({
                    el: instaLikeColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentInstaLikeBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrInstaLikeBorder.setColorRepresentation('HEX');
                pickrInstaLikeBorder.show();

                pickrInstaLikeBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookFollowHeaderColor':
                const currentFacebookFollowHeaderFontColor = document.getElementById('facebookFollowHeaderFontColorForm').value;

                pickrFacebookFollowHeader = Pickr.create({
                    el: facebookFollowHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookFollowHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookFollowHeader.setColorRepresentation('HEX');
                pickrFacebookFollowHeader.show();

                pickrFacebookFollowHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookFollowSubheaderColor':
                const currentFacebookFollowSubheaderFontColor = document.getElementById('facebookFollowSubheaderFontColorForm').value;

                pickrFacebookFollowSubheader = Pickr.create({
                    el: facebookFollowSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookFollowSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookFollowSubheader.setColorRepresentation('HEX');
                pickrFacebookFollowSubheader.show();

                pickrFacebookFollowSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookFollowButtonColor':
                const currentFacebookFollowButtonColor = document.getElementById('facebookFollowButtonColorForm').value;

                pickrFacebookFollowButton = Pickr.create({
                    el: facebookFollowColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookFollowButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookFollowButton.setColorRepresentation('HEX');
                pickrFacebookFollowButton.show();

                pickrFacebookFollowButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookFollowBackgroundColor':
                const currentFacebookFollowBackgroundColor = document.getElementById('facebookFollowBackgroundColorForm').value;

                pickrFacebookFollowBackground = Pickr.create({
                    el: facebookFollowColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookFollowBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookFollowBackground.setColorRepresentation('HEX');
                pickrFacebookFollowBackground.show();

                pickrFacebookFollowBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookFollowBorderColor':
                const currentFacebookFollowBorderColor = document.getElementById('facebookFollowBorderColorForm').value;

                pickrFacebookFollowBorder = Pickr.create({
                    el: facebookFollowColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookFollowBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookFollowBorder.setColorRepresentation('HEX');
                pickrFacebookFollowBorder.show();

                pickrFacebookFollowBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookCommentHeaderColor':
                const currentFacebookCommentHeaderFontColor = document.getElementById('facebookCommentHeaderFontColorForm').value;
        
                pickrFacebookCommentHeader = Pickr.create({
                    el: facebookCommentHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookCommentHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookCommentHeader.setColorRepresentation('HEX');
                pickrFacebookCommentHeader.show();
        
                pickrFacebookCommentHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        
            case 'facebookCommentSubheaderColor':
                const currentFacebookCommentSubheaderFontColor = document.getElementById('facebookCommentSubheaderFontColorForm').value;
        
                pickrFacebookCommentSubheader = Pickr.create({
                    el: facebookCommentSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookCommentSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookCommentSubheader.setColorRepresentation('HEX');
                pickrFacebookCommentSubheader.show();
        
                pickrFacebookCommentSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookCommentButtonColor':
                const currentFacebookCommentButtonColor = document.getElementById('facebookCommentButtonColorForm').value;
        
                pickrFacebookCommentButton = Pickr.create({
                    el: facebookCommentColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookCommentButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookCommentButton.setColorRepresentation('HEX');
                pickrFacebookCommentButton.show();
        
                pickrFacebookCommentButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        
            case 'facebookCommentBackgroundColor':
                const currentFacebookCommentBackgroundColor = document.getElementById('facebookCommentBackgroundColorForm').value;
        
                pickrFacebookCommentBackground = Pickr.create({
                    el: facebookCommentColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookCommentBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookCommentBackground.setColorRepresentation('HEX');
                pickrFacebookCommentBackground.show();
        
                pickrFacebookCommentBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        
            case 'facebookCommentBorderColor':
                const currentFacebookCommentBorderColor = document.getElementById('facebookCommentBorderColorForm').value;
        
                pickrFacebookCommentBorder = Pickr.create({
                    el: facebookCommentColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookCommentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookCommentBorder.setColorRepresentation('HEX');
                pickrFacebookCommentBorder.show();
        
                pickrFacebookCommentBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookLikeHeaderColor':
                const currentFacebookLikeHeaderFontColor = document.getElementById('facebookLikeHeaderFontColorForm').value;
        
                pickrFacebookLikeHeader = Pickr.create({
                    el: facebookLikeHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookLikeHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookLikeHeader.setColorRepresentation('HEX');
                pickrFacebookLikeHeader.show();
        
                pickrFacebookLikeHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        
            case 'facebookLikeSubheaderColor':
                const currentFacebookLikeSubheaderFontColor = document.getElementById('facebookLikeSubheaderFontColorForm').value;
        
                pickrFacebookLikeSubheader = Pickr.create({
                    el: facebookLikeSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookLikeSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookLikeSubheader.setColorRepresentation('HEX');
                pickrFacebookLikeSubheader.show();
        
                pickrFacebookLikeSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'facebookLikeButtonColor':
                const currentFacebookLikeButtonColor = document.getElementById('facebookLikeButtonColorForm').value;
        
                pickrFacebookLikeButton = Pickr.create({
                    el: facebookLikeColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookLikeButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookLikeButton.setColorRepresentation('HEX');
                pickrFacebookLikeButton.show();
        
                pickrFacebookLikeButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        
            case 'facebookLikeBackgroundColor':
                const currentFacebookLikeBackgroundColor = document.getElementById('facebookLikeBackgroundColorForm').value;
        
                pickrFacebookLikeBackground = Pickr.create({
                    el: facebookLikeColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookLikeBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookLikeBackground.setColorRepresentation('HEX');
                pickrFacebookLikeBackground.show();
        
                pickrFacebookLikeBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        
            case 'facebookLikeBorderColor':
                const currentFacebookLikeBorderColor = document.getElementById('facebookLikeBorderColorForm').value;
        
                pickrFacebookLikeBorder = Pickr.create({
                    el: facebookLikeColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentFacebookLikeBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrFacebookLikeBorder.setColorRepresentation('HEX');
                pickrFacebookLikeBorder.show();
        
                pickrFacebookLikeBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;

            case 'tiktokFollowHeaderColor':
                const currentTiktokFollowHeaderFontColor = document.getElementById('tiktokFollowHeaderFontColorForm').value;
            
                pickrTiktokFollowHeader = Pickr.create({
                    el: tiktokFollowHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokFollowHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokFollowHeader.setColorRepresentation('HEX');
                pickrTiktokFollowHeader.show();
            
                pickrTiktokFollowHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokFollowSubheaderColor':
                const currentTiktokFollowSubheaderFontColor = document.getElementById('tiktokFollowSubheaderFontColorForm').value;
            
                pickrTiktokFollowSubheader = Pickr.create({
                    el: tiktokFollowSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokFollowSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokFollowSubheader.setColorRepresentation('HEX');
                pickrTiktokFollowSubheader.show();
            
                pickrTiktokFollowSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokFollowButtonColor':
                const currentTiktokFollowButtonColor = document.getElementById('tiktokFollowButtonColorForm').value;
            
                pickrTiktokFollowButton = Pickr.create({
                    el: tiktokFollowColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokFollowButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokFollowButton.setColorRepresentation('HEX');
                pickrTiktokFollowButton.show();
            
                pickrTiktokFollowButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokFollowBackgroundColor':
                const currentTiktokFollowBackgroundColor = document.getElementById('tiktokFollowBackgroundColorForm').value;
            
                pickrTiktokFollowBackground = Pickr.create({
                    el: tiktokFollowColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokFollowBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokFollowBackground.setColorRepresentation('HEX');
                pickrTiktokFollowBackground.show();
            
                pickrTiktokFollowBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokFollowBorderColor':
                const currentTiktokFollowBorderColor = document.getElementById('tiktokFollowBorderColorForm').value;
            
                pickrTiktokFollowBorder = Pickr.create({
                    el: tiktokFollowColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokFollowBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokFollowBorder.setColorRepresentation('HEX');
                pickrTiktokFollowBorder.show();
            
                pickrTiktokFollowBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokCommentHeaderColor':
                const currentTiktokCommentHeaderFontColor = document.getElementById('tiktokCommentHeaderFontColorForm').value;
            
                pickrTiktokCommentHeader = Pickr.create({
                    el: tiktokCommentHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokCommentHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokCommentHeader.setColorRepresentation('HEX');
                pickrTiktokCommentHeader.show();
            
                pickrTiktokCommentHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokCommentSubheaderColor':
                const currentTiktokCommentSubheaderFontColor = document.getElementById('tiktokCommentSubheaderFontColorForm').value;
            
                pickrTiktokCommentSubheader = Pickr.create({
                    el: tiktokCommentSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokCommentSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokCommentSubheader.setColorRepresentation('HEX');
                pickrTiktokCommentSubheader.show();
            
                pickrTiktokCommentSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokCommentButtonColor':
                const currentTiktokCommentButtonColor = document.getElementById('tiktokCommentButtonColorForm').value;
            
                pickrTiktokCommentButton = Pickr.create({
                    el: tiktokCommentColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokCommentButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokCommentButton.setColorRepresentation('HEX');
                pickrTiktokCommentButton.show();
            
                pickrTiktokCommentButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokCommentBackgroundColor':
                const currentTiktokCommentBackgroundColor = document.getElementById('tiktokCommentBackgroundColorForm').value;
            
                pickrTiktokCommentBackground = Pickr.create({
                    el: tiktokCommentColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokCommentBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokCommentBackground.setColorRepresentation('HEX');
                pickrTiktokCommentBackground.show();
            
                pickrTiktokCommentBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokCommentBorderColor':
                const currentTiktokCommentBorderColor = document.getElementById('tiktokCommentBorderColorForm').value;
            
                pickrTiktokCommentBorder = Pickr.create({
                    el: tiktokCommentColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokCommentBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokCommentBorder.setColorRepresentation('HEX');
                pickrTiktokCommentBorder.show();
            
                pickrTiktokCommentBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokLikeHeaderColor':
                const currentTiktokLikeHeaderFontColor = document.getElementById('tiktokLikeHeaderFontColorForm').value;
            
                pickrTiktokLikeHeader = Pickr.create({
                    el: tiktokLikeHeaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokLikeHeaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokLikeHeader.setColorRepresentation('HEX');
                pickrTiktokLikeHeader.show();
            
                pickrTiktokLikeHeader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokLikeSubheaderColor':
                const currentTiktokLikeSubheaderFontColor = document.getElementById('tiktokLikeSubheaderFontColorForm').value;
            
                pickrTiktokLikeSubheader = Pickr.create({
                    el: tiktokLikeSubheaderColorGradient,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokLikeSubheaderFontColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokLikeSubheader.setColorRepresentation('HEX');
                pickrTiktokLikeSubheader.show();
            
                pickrTiktokLikeSubheader.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
                
            case 'tiktokLikeButtonColor':
                const currentTiktokLikeButtonColor = document.getElementById('tiktokLikeButtonColorForm').value;
            
                pickrTiktokLikeButton = Pickr.create({
                    el: tiktokLikeColorGradientButton,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokLikeButtonColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokLikeButton.setColorRepresentation('HEX');
                pickrTiktokLikeButton.show();
            
                pickrTiktokLikeButton.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokLikeBackgroundColor':
                const currentTiktokLikeBackgroundColor = document.getElementById('tiktokLikeBackgroundColorForm').value;
            
                pickrTiktokLikeBackground = Pickr.create({
                    el: tiktokLikeColorGradientBackground,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokLikeBackgroundColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokLikeBackground.setColorRepresentation('HEX');
                pickrTiktokLikeBackground.show();
            
                pickrTiktokLikeBackground.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
            
            case 'tiktokLikeBorderColor':
                const currentTiktokLikeBorderColor = document.getElementById('tiktokLikeBorderColorForm').value;
            
                pickrTiktokLikeBorder = Pickr.create({
                    el: tiktokLikeColorGradientBorder,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentTiktokLikeBorderColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrTiktokLikeBorder.setColorRepresentation('HEX');
                pickrTiktokLikeBorder.show();
            
                pickrTiktokLikeBorder.on('change', (color)=>{
                    const selectedColor = '#'.concat(...color.toHEXA());
                    this.style.backgroundColor = selectedColor;
                    
                    pickColor(selectedColor, elementType, true);
                });
                break;
        }
    }

    function enterHex(event){
        event.preventDefault();
        const colorTextForm = event.target;
        const typedColor = this.value;

        const elementType = colorTextForm.getAttribute('data-type');

        pickColor(typedColor, elementType, false);
    }

    function pickColor(color, elementType, fromPickr){
        switch(elementType){
            case 'textColor':
                if(fromPickr === false){
                    if(pickrText === undefined){
                            pickrText = Pickr.create({
                            el: colorGradientPanel,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrText.setColor(color);
                        const hexBoxClick = document.getElementById('textFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('textFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFont = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementFont.style.color = color;
                break;
                
            case 'textBackgroundColor':
                if(fromPickr === false){
                    if(pickrBackground === undefined){
                        pickrBackground = Pickr.create({
                            el: colorGradientPanelBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrBackground.setColor(color);
                        const hexBoxClick = document.getElementById('textBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('textBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const editElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-text-section');
                editElementBackground.style.backgroundColor = color;
                break;

            case 'textBorderColor':
                if(fromPickr === false){
                    if(pickrBorder === undefined){
                        pickrBorder = Pickr.create({
                            el: colorGradientPanelBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrBorder.setColor(color);
                        const hexBoxClick = document.getElementById('textBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('textBorderColorForm');
                    hexBoxText.value = color;
                }
                const editElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-text-section');
                
                const currentBorderStrokeTop = getComputedStyle(editElementBorder).borderTopWidth;
                const currentBorderStrokeLeft = getComputedStyle(editElementBorder).borderLeftWidth;
                const currentBorderStrokeBottom = getComputedStyle(editElementBorder).borderBottomWidth;
                const currentBorderStrokeRight = getComputedStyle(editElementBorder).borderRightWidth;

                editElementBorder.style.borderTop = `${currentBorderStrokeTop} solid ${color}`;
                editElementBorder.style.borderLeft = `${currentBorderStrokeLeft} solid ${color}`;
                editElementBorder.style.borderBottom = `${currentBorderStrokeBottom} solid ${color}`;
                editElementBorder.style.borderRight = `${currentBorderStrokeRight} solid ${color}`;
                break;

            case 'counterColor':
                if(fromPickr === false){
                    if(pickrCounter === undefined){
                        pickrCounter = Pickr.create({
                            el: counterColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrCounter.setColor(color);
                        const hexBoxClick = document.getElementById('counterFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('counterFontColorForm');
                    hexBoxText.value = color;
                }
                const counterEditElementFonth2 = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                const counterEditElementFontp = document.querySelector('.selected-raffleleader-section').querySelector('p');
                counterEditElementFonth2.style.color = color;
                counterEditElementFontp.style.color = color;
                break;

            case 'counterBackgroundColor':
                if(fromPickr === false){
                    if(pickerCounterBackground === undefined){
                        pickerCounterBackground = Pickr.create({
                            el: counterColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickerCounterBackground.setColor(color);
                        const hexBoxClick = document.getElementById('counterBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('counterBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const counterEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-counter-section');
                counterEditElementBackground.style.backgroundColor = color;
                break;

            case 'imageBorderColor':
                if(fromPickr === false){
                    if(pickrImageBorder === undefined){
                        pickrImageBorder = Pickr.create({
                            el: imageColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrImageBorder.setColor(color);
                        const hexBoxClick = document.getElementById('imageBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('imageBorderColorForm');
                    hexBoxText.value = color;
                }
                const imageEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-image-section');
                
                const imageCurrentBorderStrokeTop = getComputedStyle(imageEditElementBorder).borderTopWidth;
                const imageCurrentBorderStrokeLeft = getComputedStyle(imageEditElementBorder).borderLeftWidth;
                const imageCurrentBorderStrokeBottom = getComputedStyle(imageEditElementBorder).borderBottomWidth;
                const imageCurrentBorderStrokeRight = getComputedStyle(imageEditElementBorder).borderRightWidth;

                imageEditElementBorder.style.borderTop = `${imageCurrentBorderStrokeTop} solid ${color}`;
                imageEditElementBorder.style.borderLeft = `${imageCurrentBorderStrokeLeft} solid ${color}`;
                imageEditElementBorder.style.borderBottom = `${imageCurrentBorderStrokeBottom} solid ${color}`;
                imageEditElementBorder.style.borderRight = `${imageCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'counterBorderColor':
                if(fromPickr === false){
                    if(pickrCounterBorder === undefined){
                        pickrCounterBorder = Pickr.create({
                            el: counterColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrCounterBorder.setColor(color);
                        const hexBoxClick = document.getElementById('counterBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('counterBorderColorForm');
                    hexBoxText.value = color;
                }
                const counterEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-counter-section');
                
                const counterCurrentBorderStrokeTop = getComputedStyle(counterEditElementBorder).borderTopWidth;
                const counterCurrentBorderStrokeLeft = getComputedStyle(counterEditElementBorder).borderLeftWidth;
                const counterCurrentBorderStrokeBottom = getComputedStyle(counterEditElementBorder).borderBottomWidth;
                const counterCurrentBorderStrokeRight = getComputedStyle(counterEditElementBorder).borderRightWidth;

                counterEditElementBorder.style.borderTop = `${counterCurrentBorderStrokeTop} solid ${color}`;
                counterEditElementBorder.style.borderLeft = `${counterCurrentBorderStrokeLeft} solid ${color}`;
                counterEditElementBorder.style.borderBottom = `${counterCurrentBorderStrokeBottom} solid ${color}`;
                counterEditElementBorder.style.borderRight = `${counterCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'entryButtonColor':
                if(fromPickr === false){
                    if(pickrEntryBtn === undefined){
                        pickrEntryBtn = Pickr.create({
                            el: entryColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrEntryBtn.setColor(color);
                        const hexBoxClick = document.getElementById('entryButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('entryButtonColorForm');
                    hexBoxText.value = color;
                }
                const entryEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                entryEditElementButton.style.backgroundColor = color;
                break;

            case 'entryBackgroundColor':
                if(fromPickr === false){
                    if(pickrEntryBackground === undefined){
                        pickrEntryBackground = Pickr.create({
                            el: entryColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrEntryBackground.setColor(color);
                        const hexBoxClick = document.getElementById('entryBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('entryBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const entryEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-entry-section');
                entryEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'entryBorderColor':
                if(fromPickr === false){
                    if(pickrEntryBorder === undefined){
                        pickrEntryBorder = Pickr.create({
                            el: entryColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrEntryBorder.setColor(color);
                        const hexBoxClick = document.getElementById('entryBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('entryBorderColorForm');
                    hexBoxText.value = color;
                }
                const entryEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-entry-section');
                
                const entryCurrentBorderStrokeTop = getComputedStyle(entryEditElementBorder).borderTopWidth;
                const entryCurrentBorderStrokeLeft = getComputedStyle(entryEditElementBorder).borderLeftWidth;
                const entryCurrentBorderStrokeBottom = getComputedStyle(entryEditElementBorder).borderBottomWidth;
                const entryCurrentBorderStrokeRight = getComputedStyle(entryEditElementBorder).borderRightWidth;

                entryEditElementBorder.style.borderTop = `${entryCurrentBorderStrokeTop} solid ${color}`;
                entryEditElementBorder.style.borderLeft = `${entryCurrentBorderStrokeLeft} solid ${color}`;
                entryEditElementBorder.style.borderBottom = `${entryCurrentBorderStrokeBottom} solid ${color}`;
                entryEditElementBorder.style.borderRight = `${entryCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'XFollowHeaderColor':
                if(fromPickr === false){
                    if(pickrXFollowHeader === undefined){
                        pickrXFollowHeader = Pickr.create({
                            el: XFollowHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXFollowHeader.setColor(color);
                        const hexBoxClick = document.getElementById('XFollowHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XFollowHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementXFollowHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementXFollowHeader.style.color = color;
                break;

            case 'XFollowSubheaderColor':
                if(fromPickr === false){
                    if(pickrXFollowSubheader === undefined){
                        pickrXFollowSubheader = Pickr.create({
                            el: XFollowSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXFollowSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('XFollowSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XFollowSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementXFollowSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementXFollowSubheader.style.color = color;
                break;
            
            case 'XFollowButtonColor':
                if(fromPickr === false){
                    if(pickrXFollowButton === undefined){
                        pickrXFollowButton = Pickr.create({
                            el: XFollowColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXFollowButton.setColor(color);
                        const hexBoxClick = document.getElementById('XFollowButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XFollowButtonColorForm');
                    hexBoxText.value = color;
                }
                const XFollowEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                XFollowEditElementButton.style.backgroundColor = color;
                break;

            case 'XFollowBackgroundColor':
                if(fromPickr === false){
                    if(pickrXFollowBackground === undefined){
                        pickrXFollowBackground = Pickr.create({
                            el: XFollowColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXFollowBackground.setColor(color);
                        const hexBoxClick = document.getElementById('XFollowBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XFollowBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const XFollowEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                XFollowEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'XFollowBorderColor':
                if(fromPickr === false){
                    if(pickrXFollowBorder === undefined){
                        pickrXFollowBorder = Pickr.create({
                            el: XFollowColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXFollowBorder.setColor(color);
                        const hexBoxClick = document.getElementById('XFollowBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XFollowBorderColorForm');
                    hexBoxText.value = color;
                }
                const XFollowEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const XFollowCurrentBorderStrokeTop = getComputedStyle(XFollowEditElementBorder).borderTopWidth;
                const XFollowCurrentBorderStrokeLeft = getComputedStyle(XFollowEditElementBorder).borderLeftWidth;
                const XFollowCurrentBorderStrokeBottom = getComputedStyle(XFollowEditElementBorder).borderBottomWidth;
                const XFollowCurrentBorderStrokeRight = getComputedStyle(XFollowEditElementBorder).borderRightWidth;

                XFollowEditElementBorder.style.borderTop = `${XFollowCurrentBorderStrokeTop} solid ${color}`;
                XFollowEditElementBorder.style.borderLeft = `${XFollowCurrentBorderStrokeLeft} solid ${color}`;
                XFollowEditElementBorder.style.borderBottom = `${XFollowCurrentBorderStrokeBottom} solid ${color}`;
                XFollowEditElementBorder.style.borderRight = `${XFollowCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'XRepostHeaderColor':
                if(fromPickr === false){
                    if(pickrXRepostHeader === undefined){
                        pickrXRepostHeader = Pickr.create({
                            el: XRepostHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXRepostHeader.setColor(color);
                        const hexBoxClick = document.getElementById('XRepostHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XRepostHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementXRepostHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementXRepostHeader.style.color = color;
                break;

            case 'XRepostSubheaderColor':
                if(fromPickr === false){
                    if(pickrXRepostSubheader === undefined){
                        pickrXRepostSubheader = Pickr.create({
                            el: XRepostSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXRepostSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('XRepostSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XRepostSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementXRepostSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementXRepostSubheader.style.color = color;
                break;
            
            case 'XRepostButtonColor':
                if(fromPickr === false){
                    if(pickrXRepostButton === undefined){
                        pickrXRepostButton = Pickr.create({
                            el: XRepostColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXRepostButton.setColor(color);
                        const hexBoxClick = document.getElementById('XRepostButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XRepostButtonColorForm');
                    hexBoxText.value = color;
                }
                const XRepostEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                XRepostEditElementButton.style.backgroundColor = color;
                break;

            case 'XRepostBackgroundColor':
                if(fromPickr === false){
                    if(pickrXRepostBackground === undefined){
                        pickrXRepostBackground = Pickr.create({
                            el: XRepostColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXRepostBackground.setColor(color);
                        const hexBoxClick = document.getElementById('XRepostBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XRepostBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const XRepostEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                XRepostEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'XRepostBorderColor':
                if(fromPickr === false){
                    if(pickrXRepostBorder === undefined){
                        pickrXRepostBorder = Pickr.create({
                            el: XRepostColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXRepostBorder.setColor(color);
                        const hexBoxClick = document.getElementById('XRepostBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XRepostBorderColorForm');
                    hexBoxText.value = color;
                }
                const XRepostEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const XRepostCurrentBorderStrokeTop = getComputedStyle(XRepostEditElementBorder).borderTopWidth;
                const XRepostCurrentBorderStrokeLeft = getComputedStyle(XRepostEditElementBorder).borderLeftWidth;
                const XRepostCurrentBorderStrokeBottom = getComputedStyle(XRepostEditElementBorder).borderBottomWidth;
                const XRepostCurrentBorderStrokeRight = getComputedStyle(XRepostEditElementBorder).borderRightWidth;

                XRepostEditElementBorder.style.borderTop = `${XRepostCurrentBorderStrokeTop} solid ${color}`;
                XRepostEditElementBorder.style.borderLeft = `${XRepostCurrentBorderStrokeLeft} solid ${color}`;
                XRepostEditElementBorder.style.borderBottom = `${XRepostCurrentBorderStrokeBottom} solid ${color}`;
                XRepostEditElementBorder.style.borderRight = `${XRepostCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'XLikeHeaderColor':
                if(fromPickr === false){
                    if(pickrXLikeHeader === undefined){
                        pickrXLikeHeader = Pickr.create({
                            el: XLikeHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXLikeHeader.setColor(color);
                        const hexBoxClick = document.getElementById('XLikeHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XLikeHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementXLikeHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementXLikeHeader.style.color = color;
                break;

            case 'XLikeSubheaderColor':
                if(fromPickr === false){
                    if(pickrXLikeSubheader === undefined){
                        pickrXLikeSubheader = Pickr.create({
                            el: XLikeSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXLikeSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('XLikeSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XLikeSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementXLikeSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementXLikeSubheader.style.color = color;
                break;
            
            case 'XLikeButtonColor':
                if(fromPickr === false){
                    if(pickrXLikeButton === undefined){
                        pickrXLikeButton = Pickr.create({
                            el: XLikeColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXLikeButton.setColor(color);
                        const hexBoxClick = document.getElementById('XLikeButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XLikeButtonColorForm');
                    hexBoxText.value = color;
                }
                const XLikeEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                XLikeEditElementButton.style.backgroundColor = color;
                break;

            case 'XLikeBackgroundColor':
                if(fromPickr === false){
                    if(pickrXLikeBackground === undefined){
                        pickrXLikeBackground = Pickr.create({
                            el: XLikeColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXLikeBackground.setColor(color);
                        const hexBoxClick = document.getElementById('XLikeBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XLikeBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const XLikeEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                XLikeEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'XLikeBorderColor':
                if(fromPickr === false){
                    if(pickrXLikeBorder === undefined){
                        pickrXLikeBorder = Pickr.create({
                            el: XLikeColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrXLikeBorder.setColor(color);
                        const hexBoxClick = document.getElementById('XLikeBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('XLikeBorderColorForm');
                    hexBoxText.value = color;
                }
                const XLikeEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const XLikeCurrentBorderStrokeTop = getComputedStyle(XLikeEditElementBorder).borderTopWidth;
                const XLikeCurrentBorderStrokeLeft = getComputedStyle(XLikeEditElementBorder).borderLeftWidth;
                const XLikeCurrentBorderStrokeBottom = getComputedStyle(XLikeEditElementBorder).borderBottomWidth;
                const XLikeCurrentBorderStrokeRight = getComputedStyle(XLikeEditElementBorder).borderRightWidth;

                XLikeEditElementBorder.style.borderTop = `${XLikeCurrentBorderStrokeTop} solid ${color}`;
                XLikeEditElementBorder.style.borderLeft = `${XLikeCurrentBorderStrokeLeft} solid ${color}`;
                XLikeEditElementBorder.style.borderBottom = `${XLikeCurrentBorderStrokeBottom} solid ${color}`;
                XLikeEditElementBorder.style.borderRight = `${XLikeCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'instaFollowHeaderColor':
                if(fromPickr === false){
                    if(pickrInstaFollowHeader === undefined){
                        pickrInstaFollowHeader = Pickr.create({
                            el: instaFollowHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaFollowHeader.setColor(color);
                        const hexBoxClick = document.getElementById('instaFollowHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaFollowHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementInstaFollowHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementInstaFollowHeader.style.color = color;
                break;

            case 'instaFollowSubheaderColor':
                if(fromPickr === false){
                    if(pickrInstaFollowSubheader === undefined){
                        pickrInstaFollowSubheader = Pickr.create({
                            el: instaFollowSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaFollowSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('instaFollowSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaFollowSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementInstaFollowSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementInstaFollowSubheader.style.color = color;
                break;

            case 'instaFollowButtonColor':
                if(fromPickr === false){
                    if(pickrInstaFollowButton === undefined){
                        pickrInstaFollowButton = Pickr.create({
                            el: instaFollowColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaFollowButton.setColor(color);
                        const hexBoxClick = document.getElementById('instaFollowButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaFollowButtonColorForm');
                    hexBoxText.value = color;
                }
                const instaFollowEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                instaFollowEditElementButton.style.backgroundColor = color;
                break;

            case 'instaFollowBackgroundColor':
                if(fromPickr === false){
                    if(pickrInstaFollowBackground === undefined){
                        pickrInstaFollowBackground = Pickr.create({
                            el: instaFollowColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaFollowBackground.setColor(color);
                        const hexBoxClick = document.getElementById('instaFollowBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaFollowBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const instaFollowEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                instaFollowEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'instaFollowBorderColor':
                if(fromPickr === false){
                    if(pickrInstaFollowBorder === undefined){
                        pickrInstaFollowBorder = Pickr.create({
                            el: instaFollowColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaFollowBorder.setColor(color);
                        const hexBoxClick = document.getElementById('instaFollowBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaFollowBorderColorForm');
                    hexBoxText.value = color;
                }
                const instaFollowEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const instaFollowCurrentBorderStrokeTop = getComputedStyle(instaFollowEditElementBorder).borderTopWidth;
                const instaFollowCurrentBorderStrokeLeft = getComputedStyle(instaFollowEditElementBorder).borderLeftWidth;
                const instaFollowCurrentBorderStrokeBottom = getComputedStyle(instaFollowEditElementBorder).borderBottomWidth;
                const instaFollowCurrentBorderStrokeRight = getComputedStyle(instaFollowEditElementBorder).borderRightWidth;

                instaFollowEditElementBorder.style.borderTop = `${instaFollowCurrentBorderStrokeTop} solid ${color}`;
                instaFollowEditElementBorder.style.borderLeft = `${instaFollowCurrentBorderStrokeLeft} solid ${color}`;
                instaFollowEditElementBorder.style.borderBottom = `${instaFollowCurrentBorderStrokeBottom} solid ${color}`;
                instaFollowEditElementBorder.style.borderRight = `${instaFollowCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'instaCommentHeaderColor':
                if(fromPickr === false){
                    if(pickrInstaCommentHeader === undefined){
                        pickrInstaCommentHeader = Pickr.create({
                            el: instaCommentHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaCommentHeader.setColor(color);
                        const hexBoxClick = document.getElementById('instaCommentHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaCommentHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementInstaCommentHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementInstaCommentHeader.style.color = color;
                break;

            case 'instaCommentSubheaderColor':
                if(fromPickr === false){
                    if(pickrInstaCommentSubheader === undefined){
                        pickrInstaCommentSubheader = Pickr.create({
                            el: instaCommentSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaCommentSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('instaCommentSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaCommentSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementInstaCommentSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementInstaCommentSubheader.style.color = color;
                break;
            
            case 'instaCommentButtonColor':
                if(fromPickr === false){
                    if(pickrInstaCommentButton === undefined){
                        pickrInstaCommentButton = Pickr.create({
                            el: instaCommentColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaCommentButton.setColor(color);
                        const hexBoxClick = document.getElementById('instaCommentButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaCommentButtonColorForm');
                    hexBoxText.value = color;
                }
                const instaCommentEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                instaCommentEditElementButton.style.backgroundColor = color;
                break;

            case 'instaCommentBackgroundColor':
                if(fromPickr === false){
                    if(pickrInstaCommentBackground === undefined){
                        pickrInstaCommentBackground = Pickr.create({
                            el: instaCommentColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaCommentBackground.setColor(color);
                        const hexBoxClick = document.getElementById('instaCommentBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaCommentBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const instaCommentEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                instaCommentEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'instaCommentBorderColor':
                if(fromPickr === false){
                    if(pickrInstaCommentBorder === undefined){
                        pickrInstaCommentBorder = Pickr.create({
                            el: instaCommentColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaCommentBorder.setColor(color);
                        const hexBoxClick = document.getElementById('instaCommentBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaCommentBorderColorForm');
                    hexBoxText.value = color;
                }
                const instaCommentEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const instaCommentCurrentBorderStrokeTop = getComputedStyle(instaCommentEditElementBorder).borderTopWidth;
                const instaCommentCurrentBorderStrokeLeft = getComputedStyle(instaCommentEditElementBorder).borderLeftWidth;
                const instaCommentCurrentBorderStrokeBottom = getComputedStyle(instaCommentEditElementBorder).borderBottomWidth;
                const instaCommentCurrentBorderStrokeRight = getComputedStyle(instaCommentEditElementBorder).borderRightWidth;

                instaCommentEditElementBorder.style.borderTop = `${instaCommentCurrentBorderStrokeTop} solid ${color}`;
                instaCommentEditElementBorder.style.borderLeft = `${instaCommentCurrentBorderStrokeLeft} solid ${color}`;
                instaCommentEditElementBorder.style.borderBottom = `${instaCommentCurrentBorderStrokeBottom} solid ${color}`;
                instaCommentEditElementBorder.style.borderRight = `${instaCommentCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'instaLikeHeaderColor':
                if(fromPickr === false){
                    if(pickrInstaLikeHeader === undefined){
                        pickrInstaLikeHeader = Pickr.create({
                            el: instaLikeHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaLikeHeader.setColor(color);
                        const hexBoxClick = document.getElementById('instaLikeHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaLikeHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementInstaLikeHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementInstaLikeHeader.style.color = color;
                break;

            case 'instaLikeSubheaderColor':
                if(fromPickr === false){
                    if(pickrInstaLikeSubheader === undefined){
                        pickrInstaLikeSubheader = Pickr.create({
                            el: instaLikeSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaLikeSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('instaLikeSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaLikeSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementInstaLikeSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementInstaLikeSubheader.style.color = color;
                break;
            
            case 'instaLikeButtonColor':
                if(fromPickr === false){
                    if(pickrInstaLikeButton === undefined){
                        pickrInstaLikeButton = Pickr.create({
                            el: instaLikeColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaLikeButton.setColor(color);
                        const hexBoxClick = document.getElementById('instaLikeButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaLikeButtonColorForm');
                    hexBoxText.value = color;
                }
                const instaLikeEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                instaLikeEditElementButton.style.backgroundColor = color;
                break;

            case 'instaLikeBackgroundColor':
                if(fromPickr === false){
                    if(pickrInstaLikeBackground === undefined){
                        pickrInstaLikeBackground = Pickr.create({
                            el: instaLikeColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaLikeBackground.setColor(color);
                        const hexBoxClick = document.getElementById('instaLikeBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaLikeBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const instaLikeEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                instaLikeEditElementBackground.style.backgroundColor = color;
                break;
        
            case 'instaLikeBorderColor':
                if(fromPickr === false){
                    if(pickrInstaLikeBorder === undefined){
                        pickrInstaLikeBorder = Pickr.create({
                            el: instaLikeColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrInstaLikeBorder.setColor(color);
                        const hexBoxClick = document.getElementById('instaLikeBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('instaLikeBorderColorForm');
                    hexBoxText.value = color;
                }
                const instaLikeEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const instaLikeCurrentBorderStrokeTop = getComputedStyle(instaLikeEditElementBorder).borderTopWidth;
                const instaLikeCurrentBorderStrokeLeft = getComputedStyle(instaLikeEditElementBorder).borderLeftWidth;
                const instaLikeCurrentBorderStrokeBottom = getComputedStyle(instaLikeEditElementBorder).borderBottomWidth;
                const instaLikeCurrentBorderStrokeRight = getComputedStyle(instaLikeEditElementBorder).borderRightWidth;

                instaLikeEditElementBorder.style.borderTop = `${instaLikeCurrentBorderStrokeTop} solid ${color}`;
                instaLikeEditElementBorder.style.borderLeft = `${instaLikeCurrentBorderStrokeLeft} solid ${color}`;
                instaLikeEditElementBorder.style.borderBottom = `${instaLikeCurrentBorderStrokeBottom} solid ${color}`;
                instaLikeEditElementBorder.style.borderRight = `${instaLikeCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'facebookFollowHeaderColor':
                if(fromPickr === false){
                    if(pickrFacebookFollowHeader === undefined){
                        pickrFacebookFollowHeader = Pickr.create({
                            el: facebookFollowHeadeColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookFollowHeader.setColor(color);
                        const hexBoxClick = document.getElementById('facebookFollowHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookFollowHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFacebookFollowHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementFacebookFollowHeader.style.color = color;
                break;
            
            case 'facebookFollowSubheaderColor':
                if(fromPickr === false){
                    if(pickrFacebookFollowSubheader === undefined){
                        pickrFacebookFollowSubheader = Pickr.create({
                            el: facebookFollowSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookFollowSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('facebookFollowSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookFollowSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFacebookFollowSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementFacebookFollowSubheader.style.color = color;
                break;
            
            case 'facebookFollowButtonColor':
                if(fromPickr === false){
                    if(pickrFacebookFollowButton === undefined){
                        pickrFacebookFollowButton = Pickr.create({
                            el: facebookFollowColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookFollowButton.setColor(color);
                        const hexBoxClick = document.getElementById('facebookFollowButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookFollowButtonColorForm');
                    hexBoxText.value = color;
                }
                const facebookFollowEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                facebookFollowEditElementButton.style.backgroundColor = color;
                break;
            
            case 'facebookFollowBackgroundColor':
                if(fromPickr === false){
                    if(pickrFacebookFollowBackground === undefined){
                        pickrFacebookFollowBackground = Pickr.create({
                            el: facebookFollowColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookFollowBackground.setColor(color);
                        const hexBoxClick = document.getElementById('facebookFollowBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookFollowBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const facebookFollowEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                facebookFollowEditElementBackground.style.backgroundColor = color;
                break;
            
            case 'facebookFollowBorderColor':
                if(fromPickr === false){
                    if(pickrFacebookFollowBorder === undefined){
                        pickrFacebookFollowBorder = Pickr.create({
                            el: facebookFollowColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookFollowBorder.setColor(color);
                        const hexBoxClick = document.getElementById('facebookFollowBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookFollowBorderColorForm');
                    hexBoxText.value = color;
                }
                const facebookFollowEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const facebookFollowCurrentBorderStrokeTop = getComputedStyle(facebookFollowEditElementBorder).borderTopWidth;
                const facebookFollowCurrentBorderStrokeLeft = getComputedStyle(facebookFollowEditElementBorder).borderLeftWidth;
                const facebookFollowCurrentBorderStrokeBottom = getComputedStyle(facebookFollowEditElementBorder).borderBottomWidth;
                const facebookFollowCurrentBorderStrokeRight = getComputedStyle(facebookFollowEditElementBorder).borderRightWidth;
            
                facebookFollowEditElementBorder.style.borderTop = `${facebookFollowCurrentBorderStrokeTop} solid ${color}`;
                facebookFollowEditElementBorder.style.borderLeft = `${facebookFollowCurrentBorderStrokeLeft} solid ${color}`;
                facebookFollowEditElementBorder.style.borderBottom = `${facebookFollowCurrentBorderStrokeBottom} solid ${color}`;
                facebookFollowEditElementBorder.style.borderRight = `${facebookFollowCurrentBorderStrokeRight} solid ${color}`;
                break;
            
            case 'facebookCommentHeaderColor':
                if(fromPickr === false){
                    if(pickrFacebookCommentHeader === undefined){
                        pickrFacebookCommentHeader = Pickr.create({
                            el: facebookCommentHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookCommentHeader.setColor(color);
                        const hexBoxClick = document.getElementById('facebookCommentHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookCommentHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFacebookCommentHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementFacebookCommentHeader.style.color = color;
                break;
            
            case 'facebookCommentSubheaderColor':
                if(fromPickr === false){
                    if(pickrFacebookCommentSubheader === undefined){
                        pickrFacebookCommentSubheader = Pickr.create({
                            el: facebookCommentSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookCommentSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('facebookCommentSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookCommentSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFacebookCommentSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementFacebookCommentSubheader.style.color = color;
                break;
            
            case 'facebookCommentButtonColor':
                if(fromPickr === false){
                    if(pickrFacebookCommentButton === undefined){
                        pickrFacebookCommentButton = Pickr.create({
                            el: facebookCommentColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookCommentButton.setColor(color);
                        const hexBoxClick = document.getElementById('facebookCommentButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookCommentButtonColorForm');
                    hexBoxText.value = color;
                }
                const facebookCommentEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                facebookCommentEditElementButton.style.backgroundColor = color;
                break;
            
            case 'facebookCommentBackgroundColor':
                if(fromPickr === false){
                    if(pickrFacebookCommentBackground === undefined){
                        pickrFacebookCommentBackground = Pickr.create({
                            el: facebookCommentColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookCommentBackground.setColor(color);
                        const hexBoxClick = document.getElementById('facebookCommentBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookCommentBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const facebookCommentEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                facebookCommentEditElementBackground.style.backgroundColor = color;
                break;
            
            case 'facebookCommentBorderColor':
                if(fromPickr === false){
                    if(pickrFacebookCommentBorder === undefined){
                        pickrFacebookCommentBorder = Pickr.create({
                            el: facebookCommentColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookCommentBorder.setColor(color);
                        const hexBoxClick = document.getElementById('facebookCommentBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookCommentBorderColorForm');
                    hexBoxText.value = color;
                }
                const facebookCommentEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const facebookCommentCurrentBorderStrokeTop = getComputedStyle(facebookCommentEditElementBorder).borderTopWidth;
                const facebookCommentCurrentBorderStrokeLeft = getComputedStyle(facebookCommentEditElementBorder).borderLeftWidth;
                const facebookCommentCurrentBorderStrokeBottom = getComputedStyle(facebookCommentEditElementBorder).borderBottomWidth;
                const facebookCommentCurrentBorderStrokeRight = getComputedStyle(facebookCommentEditElementBorder).borderRightWidth;
            
                facebookCommentEditElementBorder.style.borderTop = `${facebookCommentCurrentBorderStrokeTop} solid ${color}`;
                facebookCommentEditElementBorder.style.borderLeft = `${facebookCommentCurrentBorderStrokeLeft} solid ${color}`;
                facebookCommentEditElementBorder.style.borderBottom = `${facebookCommentCurrentBorderStrokeBottom} solid ${color}`;
                facebookCommentEditElementBorder.style.borderRight = `${facebookCommentCurrentBorderStrokeRight} solid ${color}`;
                break;
            
            case 'facebookLikeHeaderColor':
                if(fromPickr === false){
                    if(pickrFacebookLikeHeader === undefined){
                        pickrFacebookLikeHeader = Pickr.create({
                            el: facebookLikeHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookLikeHeader.setColor(color);
                        const hexBoxClick = document.getElementById('facebookLikeHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookLikeHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFacebookLikeHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementFacebookLikeHeader.style.color = color;
                break;
            
            case 'facebookLikeSubheaderColor':
                if(fromPickr === false){
                    if(pickrFacebookLikeSubheader === undefined){
                        pickrFacebookLikeSubheader = Pickr.create({
                            el: facebookLikeSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookLikeSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('facebookLikeSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookLikeSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementFacebookLikeSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementFacebookLikeSubheader.style.color = color;
                break;
            
            case 'facebookLikeButtonColor':
                if(fromPickr === false){
                    if(pickrFacebookLikeButton === undefined){
                        pickrFacebookLikeButton = Pickr.create({
                            el: facebookLikeColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookLikeButton.setColor(color);
                        const hexBoxClick = document.getElementById('facebookLikeButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookLikeButtonColorForm');
                    hexBoxText.value = color;
                }
                const facebookLikeEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                facebookLikeEditElementButton.style.backgroundColor = color;
                break;
            
            case 'facebookLikeBackgroundColor':
                if(fromPickr === false){
                    if(pickrFacebookLikeBackground === undefined){
                        pickrFacebookLikeBackground = Pickr.create({
                            el: facebookLikeColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookLikeBackground.setColor(color);
                        const hexBoxClick = document.getElementById('facebookLikeBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookLikeBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const facebookLikeEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                facebookLikeEditElementBackground.style.backgroundColor = color;
                break;
            
            case 'facebookLikeBorderColor':
                if(fromPickr === false){
                    if(pickrFacebookLikeBorder === undefined){
                        pickrFacebookLikeBorder = Pickr.create({
                            el: facebookLikeColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrFacebookLikeBorder.setColor(color);
                        const hexBoxClick = document.getElementById('facebookLikeBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('facebookLikeBorderColorForm');
                    hexBoxText.value = color;
                }
                const facebookLikeEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const facebookLikeCurrentBorderStrokeTop = getComputedStyle(facebookLikeEditElementBorder).borderTopWidth;
                const facebookLikeCurrentBorderStrokeLeft = getComputedStyle(facebookLikeEditElementBorder).borderLeftWidth;
                const facebookLikeCurrentBorderStrokeBottom = getComputedStyle(facebookLikeEditElementBorder).borderBottomWidth;
                const facebookLikeCurrentBorderStrokeRight = getComputedStyle(facebookLikeEditElementBorder).borderRightWidth;
            
                facebookLikeEditElementBorder.style.borderTop = `${facebookLikeCurrentBorderStrokeTop} solid ${color}`;
                facebookLikeEditElementBorder.style.borderLeft = `${facebookLikeCurrentBorderStrokeLeft} solid ${color}`;
                facebookLikeEditElementBorder.style.borderBottom = `${facebookLikeCurrentBorderStrokeBottom} solid ${color}`;
                facebookLikeEditElementBorder.style.borderRight = `${facebookLikeCurrentBorderStrokeRight} solid ${color}`;
                break;

            case 'tiktokFollowHeaderColor':
                if(fromPickr === false){
                    if(pickrTiktokFollowHeader === undefined){
                        pickrTiktokFollowHeader = Pickr.create({
                            el: tiktokFollowHeadeColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokFollowHeader.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokFollowHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokFollowHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementTiktokFollowHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementTiktokFollowHeader.style.color = color;
                break;
            
            case 'tiktokFollowSubheaderColor':
                if(fromPickr === false){
                    if(pickrTiktokFollowSubheader === undefined){
                        pickrTiktokFollowSubheader = Pickr.create({
                            el: tiktokFollowSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokFollowSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokFollowSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokFollowSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementTiktokFollowSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementTiktokFollowSubheader.style.color = color;
                break;
            
            case 'tiktokFollowButtonColor':
                if(fromPickr === false){
                    if(pickrTiktokFollowButton === undefined){
                        pickrTiktokFollowButton = Pickr.create({
                            el: tiktokFollowColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokFollowButton.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokFollowButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokFollowButtonColorForm');
                    hexBoxText.value = color;
                }
                const tiktokFollowEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                tiktokFollowEditElementButton.style.backgroundColor = color;
                break;
            
            case 'tiktokFollowBackgroundColor':
                if(fromPickr === false){
                    if(pickrTiktokFollowBackground === undefined){
                        pickrTiktokFollowBackground = Pickr.create({
                            el: tiktokFollowColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokFollowBackground.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokFollowBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokFollowBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const tiktokFollowEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                tiktokFollowEditElementBackground.style.backgroundColor = color;
                break;
            
            case 'tiktokFollowBorderColor':
                if(fromPickr === false){
                    if(pickrTiktokFollowBorder === undefined){
                        pickrTiktokFollowBorder = Pickr.create({
                            el: tiktokFollowColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokFollowBorder.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokFollowBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokFollowBorderColorForm');
                    hexBoxText.value = color;
                }
                const tiktokFollowEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const tiktokFollowCurrentBorderStrokeTop = getComputedStyle(tiktokFollowEditElementBorder).borderTopWidth;
                const tiktokFollowCurrentBorderStrokeLeft = getComputedStyle(tiktokFollowEditElementBorder).borderLeftWidth;
                const tiktokFollowCurrentBorderStrokeBottom = getComputedStyle(tiktokFollowEditElementBorder).borderBottomWidth;
                const tiktokFollowCurrentBorderStrokeRight = getComputedStyle(tiktokFollowEditElementBorder).borderRightWidth;
            
                tiktokFollowEditElementBorder.style.borderTop = `${tiktokFollowCurrentBorderStrokeTop} solid ${color}`;
                tiktokFollowEditElementBorder.style.borderLeft = `${tiktokFollowCurrentBorderStrokeLeft} solid ${color}`;
                tiktokFollowEditElementBorder.style.borderBottom = `${tiktokFollowCurrentBorderStrokeBottom} solid ${color}`;
                tiktokFollowEditElementBorder.style.borderRight = `${tiktokFollowCurrentBorderStrokeRight} solid ${color}`;
                break;
            
            case 'tiktokCommentHeaderColor':
                if(fromPickr === false){
                    if(pickrTiktokCommentHeader === undefined){
                        pickrTiktokCommentHeader = Pickr.create({
                            el: tiktokCommentHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokCommentHeader.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokCommentHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokCommentHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementTiktokCommentHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementTiktokCommentHeader.style.color = color;
                break;
            
            case 'tiktokCommentSubheaderColor':
                if(fromPickr === false){
                    if(pickrTiktokCommentSubheader === undefined){
                        pickrTiktokCommentSubheader = Pickr.create({
                            el: tiktokCommentSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokCommentSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokCommentSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokCommentSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementTiktokCommentSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementTiktokCommentSubheader.style.color = color;
                break;
            
            case 'tiktokCommentButtonColor':
                if(fromPickr === false){
                    if(pickrTiktokCommentButton === undefined){
                        pickrTiktokCommentButton = Pickr.create({
                            el: tiktokCommentColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokCommentButton.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokCommentButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokCommentButtonColorForm');
                    hexBoxText.value = color;
                }
                const tiktokCommentEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                tiktokCommentEditElementButton.style.backgroundColor = color;
                break;
            
            case 'tiktokCommentBackgroundColor':
                if(fromPickr === false){
                    if(pickrTiktokCommentBackground === undefined){
                        pickrTiktokCommentBackground = Pickr.create({
                            el: tiktokCommentColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokCommentBackground.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokCommentBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokCommentBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const tiktokCommentEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                tiktokCommentEditElementBackground.style.backgroundColor = color;
                break;
            
            case 'tiktokCommentBorderColor':
                if(fromPickr === false){
                    if(pickrTiktokCommentBorder === undefined){
                        pickrTiktokCommentBorder = Pickr.create({
                            el: tiktokCommentColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokCommentBorder.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokCommentBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokCommentBorderColorForm');
                    hexBoxText.value = color;
                }
                const tiktokCommentEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const tiktokCommentCurrentBorderStrokeTop = getComputedStyle(tiktokCommentEditElementBorder).borderTopWidth;
                const tiktokCommentCurrentBorderStrokeLeft = getComputedStyle(tiktokCommentEditElementBorder).borderLeftWidth;
                const tiktokCommentCurrentBorderStrokeBottom = getComputedStyle(tiktokCommentEditElementBorder).borderBottomWidth;
                const tiktokCommentCurrentBorderStrokeRight = getComputedStyle(tiktokCommentEditElementBorder).borderRightWidth;
            
                tiktokCommentEditElementBorder.style.borderTop = `${tiktokCommentCurrentBorderStrokeTop} solid ${color}`;
                tiktokCommentEditElementBorder.style.borderLeft = `${tiktokCommentCurrentBorderStrokeLeft} solid ${color}`;
                tiktokCommentEditElementBorder.style.borderBottom = `${tiktokCommentCurrentBorderStrokeBottom} solid ${color}`;
                tiktokCommentEditElementBorder.style.borderRight = `${tiktokCommentCurrentBorderStrokeRight} solid ${color}`;
                break;
            
            case 'tiktokLikeHeaderColor':
                if(fromPickr === false){
                    if(pickrTiktokLikeHeader === undefined){
                        pickrTiktokLikeHeader = Pickr.create({
                            el: tiktokLikeHeaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokLikeHeader.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokLikeHeaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokLikeHeaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementTiktokLikeHeader = document.querySelector('.selected-raffleleader-section').querySelector('h2');
                editElementTiktokLikeHeader.style.color = color;
                break;
            
            case 'tiktokLikeSubheaderColor':
                if(fromPickr === false){
                    if(pickrTiktokLikeSubheader === undefined){
                        pickrTiktokLikeSubheader = Pickr.create({
                            el: tiktokLikeSubheaderColorGradient,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokLikeSubheader.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokLikeSubheaderFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokLikeSubheaderFontColorForm');
                    hexBoxText.value = color;
                }
                const editElementTiktokLikeSubheader = document.querySelector('.selected-raffleleader-section').querySelector('p');
                editElementTiktokLikeSubheader.style.color = color;
                break;
            
            case 'tiktokLikeButtonColor':
                if(fromPickr === false){
                    if(pickrTiktokLikeButton === undefined){
                        pickrTiktokLikeButton = Pickr.create({
                            el: tiktokLikeColorGradientButton,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokLikeButton.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokLikeButtonColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokLikeButtonColorForm');
                    hexBoxText.value = color;
                }
                const tiktokLikeEditElementButton = document.querySelector('.selected-raffleleader-section').querySelector('button');
                tiktokLikeEditElementButton.style.backgroundColor = color;
                break;
            
            case 'tiktokLikeBackgroundColor':
                if(fromPickr === false){
                    if(pickrTiktokLikeBackground === undefined){
                        pickrTiktokLikeBackground = Pickr.create({
                            el: tiktokLikeColorGradientBackground,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokLikeBackground.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokLikeBackgroundColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokLikeBackgroundColorForm');
                    hexBoxText.value = color;
                }
                const tiktokLikeEditElementBackground = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                tiktokLikeEditElementBackground.style.backgroundColor = color;
                break;
            
            case 'tiktokLikeBorderColor':
                if(fromPickr === false){
                    if(pickrTiktokLikeBorder === undefined){
                        pickrTiktokLikeBorder = Pickr.create({
                            el: tiktokLikeColorGradientBorder,
                            theme: 'classic', // or 'monolith', or 'nano'
                            default: color,
                            useAsButton: true,
                            padding: 15,
                            components: {
                                hue: true,
                            }
                        });
                    } else {
                        pickrTiktokLikeBorder.setColor(color);
                        const hexBoxClick = document.getElementById('tiktokLikeBorderColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('tiktokLikeBorderColorForm');
                    hexBoxText.value = color;
                }
                const tiktokLikeEditElementBorder = document.querySelector('.selected-raffleleader-section').querySelector('.raffleleader-additional-entry-section');
                
                const tiktokLikeCurrentBorderStrokeTop = getComputedStyle(tiktokLikeEditElementBorder).borderTopWidth;
                const tiktokLikeCurrentBorderStrokeLeft = getComputedStyle(tiktokLikeEditElementBorder).borderLeftWidth;
                const tiktokLikeCurrentBorderStrokeBottom = getComputedStyle(tiktokLikeEditElementBorder).borderBottomWidth;
                const tiktokLikeCurrentBorderStrokeRight = getComputedStyle(tiktokLikeEditElementBorder).borderRightWidth;
            
                tiktokLikeEditElementBorder.style.borderTop = `${tiktokLikeCurrentBorderStrokeTop} solid ${color}`;
                tiktokLikeEditElementBorder.style.borderLeft = `${tiktokLikeCurrentBorderStrokeLeft} solid ${color}`;
                tiktokLikeEditElementBorder.style.borderBottom = `${tiktokLikeCurrentBorderStrokeBottom} solid ${color}`;
                tiktokLikeEditElementBorder.style.borderRight = `${tiktokLikeCurrentBorderStrokeRight} solid ${color}`;
                break;
        }
    }

    function setFontSize(event){
        const inputFontSizeElement = event.target;
        const fontSize = inputFontSizeElement.value.includes('px') ? inputFontSizeElement.value.replace('px', '') : inputFontSizeElement.value;
        const elementType = inputFontSizeElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textFontSize':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontSize = `${fontSize}px`;
                break;

            case 'counterFontSize':
                const counterSelectedElement = selectedSection.querySelector('h2');
                counterSelectedElement.style.fontSize = `${fontSize}px`;
                break;
        }
    }

    function toggleBold(event){
        const inputBoldBtn = event.target;
        const elementType = inputBoldBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                const textFontWeight = window.getComputedStyle(selectedElement).getPropertyValue('font-weight').replace(/^"|"$/g, '');
                selectedElement.style.fontWeight = textFontWeight === "bold" ? 'normal'
                                                 : textFontWeight >= "500" ? 'normal'
                                                 : 'bold'; 
                if(!inputBoldBtn.classList.contains('inline-btn-style-active')){
                    inputBoldBtn.classList.add('inline-btn-style-active');
                } else {
                    inputBoldBtn.classList.remove('inline-btn-style-active');
                }
        }
    }

    function toggleItalicize(event){
        const inputItalicizeBtn = event.target;
        const elementType = inputItalicizeBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontStyle = selectedElement.style.fontStyle === "italic" ? 'normal' : 'italic';
                if(!inputItalicizeBtn.classList.contains('inline-btn-style-active')){
                    inputItalicizeBtn.classList.add('inline-btn-style-active');
                } else {
                    inputItalicizeBtn.classList.remove('inline-btn-style-active');
                }
        }
    }

    function toggleUnderline(event){
        const inputUnderlineBtn = event.target;
        const elementType = inputUnderlineBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');

                let currentStyle = selectedElement.style.textDecoration;
                if(currentStyle.includes('underline')){
                    selectedElement.style.textDecoration = currentStyle.replace('underline', '').trim();
                } else {
                    selectedElement.style.textDecoration = currentStyle + ' underline';
                }
                
                if(!inputUnderlineBtn.classList.contains('inline-btn-style-active')){
                    inputUnderlineBtn.classList.add('inline-btn-style-active');
                } else {
                    inputUnderlineBtn.classList.remove('inline-btn-style-active');
                }
        }
    }

    function toggleStrike(event){
        const inputStrikeBtn = event.target;
        const elementType = inputStrikeBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                
                let currentStyle = selectedElement.style.textDecoration;
                if(currentStyle.includes('line-through')){
                    selectedElement.style.textDecoration = currentStyle.replace('line-through', '').trim();
                } else {
                    selectedElement.style.textDecoration = currentStyle + ' line-through';
                }             

                if(!inputStrikeBtn.classList.contains('inline-btn-style-active')){
                    inputStrikeBtn.classList.add('inline-btn-style-active');
                } else {
                    inputStrikeBtn.classList.remove('inline-btn-style-active');
                }
        }
    }

    function toggleOverline(event){
        const inputOverlineBtn = event.target;
        const elementType = inputOverlineBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                
                let currentStyle = selectedElement.style.textDecoration;
                if(currentStyle.includes('overline')){
                    selectedElement.style.textDecoration = currentStyle.replace('overline', '').trim();
                } else {
                    selectedElement.style.textDecoration = currentStyle + ' overline';
                }             

                if(!inputOverlineBtn.classList.contains('inline-btn-style-active')){
                    inputOverlineBtn.classList.add('inline-btn-style-active');
                } else {
                    inputOverlineBtn.classList.remove('inline-btn-style-active');
                }
        }
    }

    function setLetterSpacing(event){
        const inputLetterSpacingElement = event.target;
        const letterSpacing = inputLetterSpacingElement.value.includes('px') ? inputLetterSpacingElement.value.replace('px', '') : inputLetterSpacingElement.value;
        const elementType = inputLetterSpacingElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textLetterSpacing':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.letterSpacing = `${letterSpacing}px`;
            case 'counterLetterSpacing':
                const counterSelectedElement = selectedSection.querySelector('h2');
                counterSelectedElement.style.letterSpacing = `${letterSpacing}px`;
        }
    } 

    function setBorderStroke(event){
        const inputBorderStrokeForm = event.target;
        const borderStroke = inputBorderStrokeForm.value.includes('px') ? inputBorderStrokeForm.value.replace('px', '') : inputBorderStrokeForm.value;
        const strokeFormID = inputBorderStrokeForm.id;
        const elementType = inputBorderStrokeForm.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textBorderStroke':
                const textSection = selectedSection.querySelector('.raffleleader-text-section');

                const currentBorderColorTop = getComputedStyle(textSection).borderTopColor;
                const currentBorderColorLeft = getComputedStyle(textSection).borderLeftColor;
                const currentBorderColorBottom = getComputedStyle(textSection).borderBottomColor;
                const currentBorderColorRight = getComputedStyle(textSection).borderRightColor;

                if(strokeFormID === 'borderTopStroke') textSection.style.borderTop = `${borderStroke}px solid ${currentBorderColorTop}`;
                if(strokeFormID === 'borderLeftStroke') textSection.style.borderLeft = `${borderStroke}px solid ${currentBorderColorLeft}`;
                if(strokeFormID === 'borderBottomStroke') textSection.style.borderBottom = `${borderStroke}px solid ${currentBorderColorBottom}`;
                if(strokeFormID === 'borderRightStroke') textSection.style.borderRight = `${borderStroke}px solid ${currentBorderColorRight}`;
                break;
            
            case 'counterBorderStroke':
                const counterSection = selectedSection.querySelector('.raffleleader-counter-section');

                const counterCurrentBorderColorTop = getComputedStyle(counterSection).borderTopColor;
                const counterCurrentBorderColorLeft = getComputedStyle(counterSection).borderLeftColor;
                const counterCurrentBorderColorBottom = getComputedStyle(counterSection).borderBottomColor;
                const counterCurrentBorderColorRight = getComputedStyle(counterSection).borderRightColor;

                if(strokeFormID === 'counterBorderTopStroke') counterSection.style.borderTop = `${borderStroke}px solid ${counterCurrentBorderColorTop}`;
                if(strokeFormID === 'counterBorderLeftStroke') counterSection.style.borderLeft = `${borderStroke}px solid ${counterCurrentBorderColorLeft}`;
                if(strokeFormID === 'counterBorderBottomStroke') counterSection.style.borderBottom = `${borderStroke}px solid ${counterCurrentBorderColorBottom}`;
                if(strokeFormID === 'counterBorderRightStroke') counterSection.style.borderRight = `${borderStroke}px solid ${counterCurrentBorderColorRight}`;
                break;

            case 'imageBorderStroke':
                const imageSection = selectedSection.querySelector('.raffleleader-image-section');

                const imageCurrentBorderColorTop = getComputedStyle(imageSection).borderTopColor;
                const imageCurrentBorderColorLeft = getComputedStyle(imageSection).borderLeftColor;
                const imageCurrentBorderColorBottom = getComputedStyle(imageSection).borderBottomColor;
                const imageCurrentBorderColorRight = getComputedStyle(imageSection).borderRightColor;

                if(strokeFormID === 'imageBorderTopStroke') imageSection.style.borderTop = `${borderStroke}px solid ${imageCurrentBorderColorTop}`;
                if(strokeFormID === 'imageBorderLeftStroke') imageSection.style.borderLeft = `${borderStroke}px solid ${imageCurrentBorderColorLeft}`;
                if(strokeFormID === 'imageBorderBottomStroke') imageSection.style.borderBottom = `${borderStroke}px solid ${imageCurrentBorderColorBottom}`;
                if(strokeFormID === 'imageBorderRightStroke') imageSection.style.borderRight = `${borderStroke}px solid ${imageCurrentBorderColorRight}`;
                break;

            case 'entryBorderStroke':
                const entrySection = selectedSection.querySelector('.raffleleader-entry-section');

                const entryCurrentBorderColorTop = getComputedStyle(entrySection).borderTopColor;
                const entryCurrentBorderColorLeft = getComputedStyle(entrySection).borderLeftColor;
                const entryCurrentBorderColorBottom = getComputedStyle(entrySection).borderBottomColor;
                const entryCurrentBorderColorRight = getComputedStyle(entrySection).borderRightColor;

                if(strokeFormID === 'entryBorderTopStroke') entrySection.style.borderTop = `${borderStroke}px solid ${entryCurrentBorderColorTop}`;
                if(strokeFormID === 'entryBorderLeftStroke') entrySection.style.borderLeft = `${borderStroke}px solid ${entryCurrentBorderColorLeft}`;
                if(strokeFormID === 'entryBorderBottomStroke') entrySection.style.borderBottom = `${borderStroke}px solid ${entryCurrentBorderColorBottom}`;
                if(strokeFormID === 'entryBorderRightStroke') entrySection.style.borderRight = `${borderStroke}px solid ${entryCurrentBorderColorRight}`;
                break;

            case 'XFollowBorderStroke':
                const XFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                const XFollowCurrentBorderColorTop = getComputedStyle(XFollowSection).borderTopColor;
                const XFollowCurrentBorderColorLeft = getComputedStyle(XFollowSection).borderLeftColor;
                const XFollowCurrentBorderColorBottom = getComputedStyle(XFollowSection).borderBottomColor;
                const XFollowCurrentBorderColorRight = getComputedStyle(XFollowSection).borderRightColor;

                if(strokeFormID === 'XFollowBorderTopStroke') XFollowSection.style.borderTop = `${borderStroke}px solid ${XFollowCurrentBorderColorTop}`;
                if(strokeFormID === 'XFollowBorderLeftStroke') XFollowSection.style.borderLeft = `${borderStroke}px solid ${XFollowCurrentBorderColorLeft}`;
                if(strokeFormID === 'XFollowBorderBottomStroke') XFollowSection.style.borderBottom = `${borderStroke}px solid ${XFollowCurrentBorderColorBottom}`;
                if(strokeFormID === 'XFollowBorderRightStroke') XFollowSection.style.borderRight = `${borderStroke}px solid ${XFollowCurrentBorderColorRight}`;
                break;
            
            case 'XRepostBorderStroke':
                const XRepostSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                const XRepostCurrentBorderColorTop = getComputedStyle(XRepostSection).borderTopColor;
                const XRepostCurrentBorderColorLeft = getComputedStyle(XRepostSection).borderLeftColor;
                const XRepostCurrentBorderColorBottom = getComputedStyle(XRepostSection).borderBottomColor;
                const XRepostCurrentBorderColorRight = getComputedStyle(XRepostSection).borderRightColor;

                if(strokeFormID === 'XRepostBorderTopStroke') XRepostSection.style.borderTop = `${borderStroke}px solid ${XRepostCurrentBorderColorTop}`;
                if(strokeFormID === 'XRepostBorderLeftStroke') XRepostSection.style.borderLeft = `${borderStroke}px solid ${XRepostCurrentBorderColorLeft}`;
                if(strokeFormID === 'XRepostBorderBottomStroke') XRepostSection.style.borderBottom = `${borderStroke}px solid ${XRepostCurrentBorderColorBottom}`;
                if(strokeFormID === 'XRepostBorderRightStroke') XRepostSection.style.borderRight = `${borderStroke}px solid ${XRepostCurrentBorderColorRight}`;
                break;

            case 'XLikeBorderStroke':
                const XLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                const XLikeCurrentBorderColorTop = getComputedStyle(XLikeSection).borderTopColor;
                const XLikeCurrentBorderColorLeft = getComputedStyle(XLikeSection).borderLeftColor;
                const XLikeCurrentBorderColorBottom = getComputedStyle(XLikeSection).borderBottomColor;
                const XLikeCurrentBorderColorRight = getComputedStyle(XLikeSection).borderRightColor;

                if(strokeFormID === 'XLikeBorderTopStroke') XLikeSection.style.borderTop = `${borderStroke}px solid ${XLikeCurrentBorderColorTop}`;
                if(strokeFormID === 'XLikeBorderLeftStroke') XLikeSection.style.borderLeft = `${borderStroke}px solid ${XLikeCurrentBorderColorLeft}`;
                if(strokeFormID === 'XLikeBorderBottomStroke') XLikeSection.style.borderBottom = `${borderStroke}px solid ${XLikeCurrentBorderColorBottom}`;
                if(strokeFormID === 'XLikeBorderRightStroke') XLikeSection.style.borderRight = `${borderStroke}px solid ${XLikeCurrentBorderColorRight}`;
                break;
            
            case 'instaFollowBorderStroke':
                const instaFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                const instaFollowCurrentBorderColorTop = getComputedStyle(instaFollowSection).borderTopColor;
                const instaFollowCurrentBorderColorLeft = getComputedStyle(instaFollowSection).borderLeftColor;
                const instaFollowCurrentBorderColorBottom = getComputedStyle(instaFollowSection).borderBottomColor;
                const instaFollowCurrentBorderColorRight = getComputedStyle(instaFollowSection).borderRightColor;

                if(strokeFormID === 'instaFollowBorderTopStroke') instaFollowSection.style.borderTop = `${borderStroke}px solid ${instaFollowCurrentBorderColorTop}`;
                if(strokeFormID === 'instaFollowBorderLeftStroke') instaFollowSection.style.borderLeft = `${borderStroke}px solid ${instaFollowCurrentBorderColorLeft}`;
                if(strokeFormID === 'instaFollowBorderBottomStroke') instaFollowSection.style.borderBottom = `${borderStroke}px solid ${instaFollowCurrentBorderColorBottom}`;
                if(strokeFormID === 'instaFollowBorderRightStroke') instaFollowSection.style.borderRight = `${borderStroke}px solid ${instaFollowCurrentBorderColorRight}`;
                break;
            
            case 'instaCommentBorderStroke':
                const instaCommentSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                const instaCommentCurrentBorderColorTop = getComputedStyle(instaCommentSection).borderTopColor;
                const instaCommentCurrentBorderColorLeft = getComputedStyle(instaCommentSection).borderLeftColor;
                const instaCommentCurrentBorderColorBottom = getComputedStyle(instaCommentSection).borderBottomColor;
                const instaCommentCurrentBorderColorRight = getComputedStyle(instaCommentSection).borderRightColor;

                if(strokeFormID === 'instaCommentBorderTopStroke') instaCommentSection.style.borderTop = `${borderStroke}px solid ${instaCommentCurrentBorderColorTop}`;
                if(strokeFormID === 'instaCommentBorderLeftStroke') instaCommentSection.style.borderLeft = `${borderStroke}px solid ${instaCommentCurrentBorderColorLeft}`;
                if(strokeFormID === 'instaCommentBorderBottomStroke') instaCommentSection.style.borderBottom = `${borderStroke}px solid ${instaCommentCurrentBorderColorBottom}`;
                if(strokeFormID === 'instaCommentBorderRightStroke') instaCommentSection.style.borderRight = `${borderStroke}px solid ${instaCommentCurrentBorderColorRight}`;
                break;

            case 'instaLikeBorderStroke':
                const instaLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                const instaLikeCurrentBorderColorTop = getComputedStyle(instaLikeSection).borderTopColor;
                const instaLikeCurrentBorderColorLeft = getComputedStyle(instaLikeSection).borderLeftColor;
                const instaLikeCurrentBorderColorBottom = getComputedStyle(instaLikeSection).borderBottomColor;
                const instaLikeCurrentBorderColorRight = getComputedStyle(instaLikeSection).borderRightColor;

                if(strokeFormID === 'instaLikeBorderTopStroke') instaLikeSection.style.borderTop = `${borderStroke}px solid ${instaLikeCurrentBorderColorTop}`;
                if(strokeFormID === 'instaLikeBorderLeftStroke') instaLikeSection.style.borderLeft = `${borderStroke}px solid ${instaLikeCurrentBorderColorLeft}`;
                if(strokeFormID === 'instaLikeBorderBottomStroke') instaLikeSection.style.borderBottom = `${borderStroke}px solid ${instaLikeCurrentBorderColorBottom}`;
                if(strokeFormID === 'instaLikeBorderRightStroke') instaLikeSection.style.borderRight = `${borderStroke}px solid ${instaLikeCurrentBorderColorRight}`;
                break;

            case 'facebookFollowBorderStroke':
                const facebookFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                const facebookFollowCurrentBorderColorTop = getComputedStyle(facebookFollowSection).borderTopColor;
                const facebookFollowCurrentBorderColorLeft = getComputedStyle(facebookFollowSection).borderLeftColor;
                const facebookFollowCurrentBorderColorBottom = getComputedStyle(facebookFollowSection).borderBottomColor;
                const facebookFollowCurrentBorderColorRight = getComputedStyle(facebookFollowSection).borderRightColor;
            
                if(strokeFormID === 'facebookFollowBorderTopStroke') facebookFollowSection.style.borderTop = `${borderStroke}px solid ${facebookFollowCurrentBorderColorTop}`;
                if(strokeFormID === 'facebookFollowBorderLeftStroke') facebookFollowSection.style.borderLeft = `${borderStroke}px solid ${facebookFollowCurrentBorderColorLeft}`;
                if(strokeFormID === 'facebookFollowBorderBottomStroke') facebookFollowSection.style.borderBottom = `${borderStroke}px solid ${facebookFollowCurrentBorderColorBottom}`;
                if(strokeFormID === 'facebookFollowBorderRightStroke') facebookFollowSection.style.borderRight = `${borderStroke}px solid ${facebookFollowCurrentBorderColorRight}`;
                break;
            
            case 'facebookCommentBorderStroke':
                const facebookCommentSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                const facebookCommentCurrentBorderColorTop = getComputedStyle(facebookCommentSection).borderTopColor;
                const facebookCommentCurrentBorderColorLeft = getComputedStyle(facebookCommentSection).borderLeftColor;
                const facebookCommentCurrentBorderColorBottom = getComputedStyle(facebookCommentSection).borderBottomColor;
                const facebookCommentCurrentBorderColorRight = getComputedStyle(facebookCommentSection).borderRightColor;
            
                if(strokeFormID === 'facebookCommentBorderTopStroke') facebookCommentSection.style.borderTop = `${borderStroke}px solid ${facebookCommentCurrentBorderColorTop}`;
                if(strokeFormID === 'facebookCommentBorderLeftStroke') facebookCommentSection.style.borderLeft = `${borderStroke}px solid ${facebookCommentCurrentBorderColorLeft}`;
                if(strokeFormID === 'facebookCommentBorderBottomStroke') facebookCommentSection.style.borderBottom = `${borderStroke}px solid ${facebookCommentCurrentBorderColorBottom}`;
                if(strokeFormID === 'facebookCommentBorderRightStroke') facebookCommentSection.style.borderRight = `${borderStroke}px solid ${facebookCommentCurrentBorderColorRight}`;
                break;
            
            case 'facebookLikeBorderStroke':
                const facebookLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                const facebookLikeCurrentBorderColorTop = getComputedStyle(facebookLikeSection).borderTopColor;
                const facebookLikeCurrentBorderColorLeft = getComputedStyle(facebookLikeSection).borderLeftColor;
                const facebookLikeCurrentBorderColorBottom = getComputedStyle(facebookLikeSection).borderBottomColor;
                const facebookLikeCurrentBorderColorRight = getComputedStyle(facebookLikeSection).borderRightColor;
            
                if(strokeFormID === 'facebookLikeBorderTopStroke') facebookLikeSection.style.borderTop = `${borderStroke}px solid ${facebookLikeCurrentBorderColorTop}`;
                if(strokeFormID === 'facebookLikeBorderLeftStroke') facebookLikeSection.style.borderLeft = `${borderStroke}px solid ${facebookLikeCurrentBorderColorLeft}`;
                if(strokeFormID === 'facebookLikeBorderBottomStroke') facebookLikeSection.style.borderBottom = `${borderStroke}px solid ${facebookLikeCurrentBorderColorBottom}`;
                if(strokeFormID === 'facebookLikeBorderRightStroke') facebookLikeSection.style.borderRight = `${borderStroke}px solid ${facebookLikeCurrentBorderColorRight}`;
                break;

            case 'tiktokFollowBorderStroke':
                const tiktokFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                const tiktokFollowCurrentBorderColorTop = getComputedStyle(tiktokFollowSection).borderTopColor;
                const tiktokFollowCurrentBorderColorLeft = getComputedStyle(tiktokFollowSection).borderLeftColor;
                const tiktokFollowCurrentBorderColorBottom = getComputedStyle(tiktokFollowSection).borderBottomColor;
                const tiktokFollowCurrentBorderColorRight = getComputedStyle(tiktokFollowSection).borderRightColor;
            
                if(strokeFormID === 'tiktokFollowBorderTopStroke') tiktokFollowSection.style.borderTop = `${borderStroke}px solid ${tiktokFollowCurrentBorderColorTop}`;
                if(strokeFormID === 'tiktokFollowBorderLeftStroke') tiktokFollowSection.style.borderLeft = `${borderStroke}px solid ${tiktokFollowCurrentBorderColorLeft}`;
                if(strokeFormID === 'tiktokFollowBorderBottomStroke') tiktokFollowSection.style.borderBottom = `${borderStroke}px solid ${tiktokFollowCurrentBorderColorBottom}`;
                if(strokeFormID === 'tiktokFollowBorderRightStroke') tiktokFollowSection.style.borderRight = `${borderStroke}px solid ${tiktokFollowCurrentBorderColorRight}`;
                break;
            
            case 'tiktokCommentBorderStroke':
                const tiktokCommentSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                const tiktokCommentCurrentBorderColorTop = getComputedStyle(tiktokCommentSection).borderTopColor;
                const tiktokCommentCurrentBorderColorLeft = getComputedStyle(tiktokCommentSection).borderLeftColor;
                const tiktokCommentCurrentBorderColorBottom = getComputedStyle(tiktokCommentSection).borderBottomColor;
                const tiktokCommentCurrentBorderColorRight = getComputedStyle(tiktokCommentSection).borderRightColor;
            
                if(strokeFormID === 'tiktokCommentBorderTopStroke') tiktokCommentSection.style.borderTop = `${borderStroke}px solid ${tiktokCommentCurrentBorderColorTop}`;
                if(strokeFormID === 'tiktokCommentBorderLeftStroke') tiktokCommentSection.style.borderLeft = `${borderStroke}px solid ${tiktokCommentCurrentBorderColorLeft}`;
                if(strokeFormID === 'tiktokCommentBorderBottomStroke') tiktokCommentSection.style.borderBottom = `${borderStroke}px solid ${tiktokCommentCurrentBorderColorBottom}`;
                if(strokeFormID === 'tiktokCommentBorderRightStroke') tiktokCommentSection.style.borderRight = `${borderStroke}px solid ${tiktokCommentCurrentBorderColorRight}`;
                break;
            
            case 'tiktokLikeBorderStroke':
                const tiktokLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                const tiktokLikeCurrentBorderColorTop = getComputedStyle(tiktokLikeSection).borderTopColor;
                const tiktokLikeCurrentBorderColorLeft = getComputedStyle(tiktokLikeSection).borderLeftColor;
                const tiktokLikeCurrentBorderColorBottom = getComputedStyle(tiktokLikeSection).borderBottomColor;
                const tiktokLikeCurrentBorderColorRight = getComputedStyle(tiktokLikeSection).borderRightColor;
            
                if(strokeFormID === 'tiktokLikeBorderTopStroke') tiktokLikeSection.style.borderTop = `${borderStroke}px solid ${tiktokLikeCurrentBorderColorTop}`;
                if(strokeFormID === 'tiktokLikeBorderLeftStroke') tiktokLikeSection.style.borderLeft = `${borderStroke}px solid ${tiktokLikeCurrentBorderColorLeft}`;
                if(strokeFormID === 'tiktokLikeBorderBottomStroke') tiktokLikeSection.style.borderBottom = `${borderStroke}px solid ${tiktokLikeCurrentBorderColorBottom}`;
                if(strokeFormID === 'tiktokLikeBorderRightStroke') tiktokLikeSection.style.borderRight = `${borderStroke}px solid ${tiktokLikeCurrentBorderColorRight}`;
                break;
            }
    }

    function setBorderRadius(event){
        const inputBorderRadiusForm = event.target;
        const borderRadius = inputBorderRadiusForm.value.includes('px') ? inputBorderRadiusForm.value.replace('px', '') : inputBorderRadiusForm.value;
        const radiusFormID = inputBorderRadiusForm.id;
        const elementType = inputBorderRadiusForm.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textBorderRadius':
                const textSection = selectedSection.querySelector('.raffleleader-text-section');

                if(radiusFormID === 'borderTopLeftRadius') textSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'borderTopRightRadius') textSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'borderBottomLeftRadius') textSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'borderBottomRightRadius') textSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'counterBorderRadius':
                const counterSection = selectedSection.querySelector('.raffleleader-counter-section');

                if(radiusFormID === 'counterBorderTopLeftRadius') counterSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'counterBorderTopRightRadius') counterSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'counterBorderBottomLeftRadius') counterSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'counterBorderBottomRightRadius') counterSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'imageBorderRadius':
                const imageSection = selectedSection.querySelector('.raffleleader-image-section');
                const imageElement = selectedSection.querySelector('img') ? selectedSection.querySelector('img') : undefined;
                
                if(imageElement){
                    if(radiusFormID === 'imageBorderTopLeftRadius'){
                        imageSection.style.borderTopLeftRadius = `${borderRadius}px`;
                        imageElement.style.borderTopLeftRadius = `${borderRadius}px`;
                    } 
                    if(radiusFormID === 'imageBorderTopRightRadius'){
                        imageSection.style.borderTopRightRadius = `${borderRadius}px`;
                        imageElement.style.borderTopRightRadius = `${borderRadius}px`;
                    }
                    if(radiusFormID === 'imageBorderBottomLeftRadius'){
                        imageSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                        imageElement.style.borderBottomLeftRadius = `${borderRadius}px`;
                    } 
                    if(radiusFormID === 'imageBorderBottomRightRadius'){
                        imageSection.style.borderBottomRightRadius = `${borderRadius}px`;
                        imageElement.style.borderBottomRightRadius = `${borderRadius}px`;
                    } 
                } else {
                    if(radiusFormID === 'imageBorderTopLeftRadius') imageSection.style.borderTopLeftRadius = `${borderRadius}px`;
                    if(radiusFormID === 'imageBorderTopRightRadius') imageSection.style.borderTopRightRadius = `${borderRadius}px`;
                    if(radiusFormID === 'imageBorderBottomLeftRadius') imageSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                    if(radiusFormID === 'imageBorderBottomRightRadius') imageSection.style.borderBottomRightRadius = `${borderRadius}px`;
                }
                break;

            case 'entryBorderRadius':
                const entrySection = selectedSection.querySelector('.raffleleader-entry-section');

                if(radiusFormID === 'entryBorderTopLeftRadius') entrySection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'entryBorderTopRightRadius') entrySection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'entryBorderBottomLeftRadius') entrySection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'entryBorderBottomRightRadius') entrySection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'XFollowBorderRadius':
                const XFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                if(radiusFormID === 'XFollowBorderTopLeftRadius') XFollowSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'XFollowBorderTopRightRadius') XFollowSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'XFollowBorderBottomLeftRadius') XFollowSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'XFollowBorderBottomRightRadius') XFollowSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'XRepostBorderRadius':
                const XRepostSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                if(radiusFormID === 'XRepostBorderTopLeftRadius') XRepostSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'XRepostBorderTopRightRadius') XRepostSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'XRepostBorderBottomLeftRadius') XRepostSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'XRepostBorderBottomRightRadius') XRepostSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
            
            case 'XLikeBorderRadius':
                const XLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                if(radiusFormID === 'XLikeBorderTopLeftRadius') XLikeSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'XLikeBorderTopRightRadius') XLikeSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'XLikeBorderBottomLeftRadius') XLikeSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'XLikeBorderBottomRightRadius') XLikeSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'instaFollowBorderRadius':
                const instaFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                if(radiusFormID === 'instaFollowBorderTopLeftRadius') instaFollowSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaFollowBorderTopRightRadius') XinstaollowSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaFollowBorderBottomLeftRadius') instaFollowSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaFollowBorderBottomRightRadius') instaFollowSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'instaCommentBorderRadius':
                const instaCommentSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                if(radiusFormID === 'instaCommentBorderTopLeftRadius') instaCommentSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaCommentBorderTopRightRadius') instaCommentSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaCommentBorderBottomLeftRadius') instaCommentSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaCommentBorderBottomRightRadius') instaCommentSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
            
            case 'instaLikeBorderRadius':
                const instaLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');

                if(radiusFormID === 'instaLikeBorderTopLeftRadius') instaLikeSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaLikeBorderTopRightRadius') instaLikeSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaLikeBorderBottomLeftRadius') instaLikeSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'instaLikeBorderBottomRightRadius') instaLikeSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'facebookFollowBorderRadius':
                const facebookFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                if(radiusFormID === 'facebookFollowBorderTopLeftRadius') facebookFollowSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookFollowBorderTopRightRadius') XfacebookollowSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookFollowBorderBottomLeftRadius') facebookFollowSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookFollowBorderBottomRightRadius') facebookFollowSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
            
            case 'facebookCommentBorderRadius':
                const facebookCommentSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                if(radiusFormID === 'facebookCommentBorderTopLeftRadius') facebookCommentSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookCommentBorderTopRightRadius') facebookCommentSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookCommentBorderBottomLeftRadius') facebookCommentSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookCommentBorderBottomRightRadius') facebookCommentSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
            
            case 'facebookLikeBorderRadius':
                const facebookLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                if(radiusFormID === 'facebookLikeBorderTopLeftRadius') facebookLikeSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookLikeBorderTopRightRadius') facebookLikeSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookLikeBorderBottomLeftRadius') facebookLikeSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'facebookLikeBorderBottomRightRadius') facebookLikeSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'tiktokFollowBorderRadius':
                const tiktokFollowSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                if(radiusFormID === 'tiktokFollowBorderTopLeftRadius') tiktokFollowSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokFollowBorderTopRightRadius') XtiktokollowSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokFollowBorderBottomLeftRadius') tiktokFollowSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokFollowBorderBottomRightRadius') tiktokFollowSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
            
            case 'tiktokCommentBorderRadius':
                const tiktokCommentSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                if(radiusFormID === 'tiktokCommentBorderTopLeftRadius') tiktokCommentSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokCommentBorderTopRightRadius') tiktokCommentSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokCommentBorderBottomLeftRadius') tiktokCommentSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokCommentBorderBottomRightRadius') tiktokCommentSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
            
            case 'tiktokLikeBorderRadius':
                const tiktokLikeSection = selectedSection.querySelector('.raffleleader-additional-entry-section');
            
                if(radiusFormID === 'tiktokLikeBorderTopLeftRadius') tiktokLikeSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokLikeBorderTopRightRadius') tiktokLikeSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokLikeBorderBottomLeftRadius') tiktokLikeSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'tiktokLikeBorderBottomRightRadius') tiktokLikeSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
        }
    }

    function selectCounter(event){
        const selectedBtn = event.target;
        const selectedSection = document.querySelector('.selected-raffleleader-section');
        const counterSection = selectedSection.querySelector('.raffleleader-counter-section');
        const currentBtn = document.querySelector('.active-counter') ? document.querySelector('.active-counter') : undefined;

        const counterType = selectedBtn.getAttribute('data-type');

        if(currentBtn){
            if(currentBtn === selectedBtn){
                currentBtn.classList.remove('active-counter');
                Array.from(counterSection.classList).forEach((className)=>{
                    if(className != 'raffleleader-counter-section'){
                        counterSection.classList.remove(className);
                    }
                })
                stopWatch(counterSection, counterType);
            } else {
                currentBtn.classList.remove('active-counter');
                selectedBtn.classList.add('active-counter');
                Array.from(counterSection.classList).forEach((className)=>{
                    if(className != 'raffleleader-counter-section'){
                        counterSection.classList.remove(className);
                    }
                })
                switch(counterType){
                    case 'counterTimeLeft':
                        counterSection.classList.add('show-time-left');
                        watchTimeLeft(counterSection);
                        break;
                    case 'counterTimeStart':
                        counterSection.classList.add('show-time-start');
                        watchTimeStart(counterSection);
                        break;
                    case 'counterUserEntries':
                        counterSection.classList.add('show-user-entries');
                        // watchUserEntries(counterSection);
                        break;
                    case 'counterTotalEntries':
                        counterSection.classList.add('show-total-entries');
                        // watchTotalEntries(counterSection);
                        break;
                }
            }
        } else {
            selectedBtn.classList.add('active-counter');
            switch(counterType){
                case 'counterTimeLeft':
                    counterSection.classList.add('show-time-left');
                    watchTimeLeft(counterSection);
                    break;
                case 'counterTimeStart':
                    counterSection.classList.add('show-time-start');
                    watchTimeStart(counterSection);
                    break;
                case 'counterUserEntries':
                    counterSection.classList.add('show-user-entries');
                    // watchUserEntries(counterSection);
                    break;
                case 'counterTotalEntries':
                    counterSection.classList.add('show-total-entries');
                    // watchTotalEntries(counterSection);
                    break;
            }
        }
    }

    function watchTimeLeft(element){
        const counterHeader = element.querySelector('h2');
        const counterText = element.querySelector('p');

        const endDateInput = document.getElementById('endDate').value;
        const endTimeInput = document.getElementById('endTime').value;
        const timezone = document.getElementById('timeZoneDropDownTitle').textContent;

        const endDate = endDateInput + ' ' + endTimeInput;
        const adjustedEndDate = moment.tz(endDate, timezone);

        const nowTime = moment()

        const difference = adjustedEndDate.diff(nowTime)
        const duration = moment.duration(difference);

        if(duration.days() > 0){
            counterHeader.innerText = `${duration.days()}`;
            counterText.innerText = 'DAYS';
        } else if(duration.hours() > 0) {
            counterHeader.innerText = `${duration.hours()}`;
            counterText.innerText = 'HOURS';
        } else if(duration.minutes() > 0){
            counterHeader.innerText = `${duration.minutes()}`;
            counterText.innerText = 'MINUTES';
        } else if(duration.seconds() > 0){
            counterHeader.innerText = `${duration.seconds()}`;
            counterText.innerText = 'SECONDS';
        } else {
            counterHeader.innerText = `00`;
            counterText.innerText = 'ENDED';
        }
    }

    function watchTimeStart(element){
        const counterHeader = element.querySelector('h2');
        const counterText = element.querySelector('p');

        const startDateInput = document.getElementById('startDate').value;
        const startTimeInput = document.getElementById('startTime').value;
        const timezone = document.getElementById('timeZoneDropDownTitle').textContent;

        const startDate = startDateInput + ' ' + startTimeInput;
        const adjustedStartDate = moment.tz(startDate, timezone);

        const nowTime = moment()

        const difference = adjustedStartDate.diff(nowTime)
        const duration = moment.duration(difference);

        if(duration.days() > 0){
            counterHeader.innerText = `${duration.days()}`;
            counterText.innerText = 'DAYS';
        } else if(duration.hours() > 0) {
            counterHeader.innerText = `${duration.hours()}`;
            counterText.innerText = 'HOURS';
        } else if(duration.minutes() > 0){
            counterHeader.innerText = `${duration.minutes()}`;
            counterText.innerText = 'MINUTES';
        } else if(duration.seconds() > 0){
            counterHeader.innerText = `${duration.seconds()}`;
            counterText.innerText = 'SECONDS';
        } else {
            counterHeader.innerText = `00`;
            counterText.innerText = 'STARTED';
        }
    }

    function stopWatch(element, counterType){
        const counterHeader = element.querySelector('h2');
        const counterText = element.querySelector('p');

        counterHeader.innerText = `00`;
        counterText.innerText = '';

        switch(counterType){
            case 'counterTimeLeft':
                element.classList.remove('show-time-left');
                break;
            case 'counterTimeStart':
                element.classList.remove('show-time-start');
                break;
            case 'counterTUserEntries':
                element.classList.remove('show-user-entries');
                break;
            case 'counterTotalEntries':
                element.classList.remove('show-total-entries');
                break;
        }
    }

    function insertImage(event){
        event.preventDefault();
        const preview = document.getElementById('preview');
        const dropzone = document.getElementById('dropzone');
        const dropzoneHeight = parseInt(dropzone.style.height);
        const previewWidth = parseInt(preview.style.width);
        const selectedSection = document.querySelector('.selected-raffleleader-section');
        const imgContainer = selectedSection.querySelector('.raffleleader-image-section');
        const imgSection = imgContainer.parentNode;
        const imgElement = document.createElement('img');
        const imgFormURL = document.getElementById('imgURL');

        const file_frame = wp.media.frames.file_frame = wp.media({
            title: 'Select Image',
            button: {
                text: 'Use This Image',
            },
            multiple: false
        });

        file_frame.on('select', ()=>{
            const attachment = file_frame.state().get('selection').first().toJSON();
            const aspectRatio = attachment.width / attachment.height;

            imgElement.src = attachment.url;

            imgElement.alt = attachment.alt || 'Raffle Image';
            imgElement.title = attachment.title || '';

            imgContainer.innerHTML = '';
            imgContainer.appendChild(imgElement);

            if(attachment.height > dropzoneHeight){
                imgSection.style.height = `${dropzoneHeight/2}px`;
                imgSection.style.width = `${aspectRatio * parseInt(imgSection.style.height)}px`;
            } else if(attachment.width > previewWidth){
                imgSection.style.width = `${previewWidth}px`;
                imgSection.style.height = `${1/aspectRatio * parseInt(imgSection.style.width)}px`;
            } else {
                imgSection.style.width = `${attachment.width}px`;
                imgSection.style.height = `${(1 / aspectRatio) * parseInt(imgSection.style.width)}px`;
            }
            
            const filename = new URL(attachment.url).pathname.split('/').pop();

            console.log(previewWidth);
            console.log(attachment.width);
            console.log(imgSection.style.width);

            imgFormURL.href = imgElement.src;
            imgFormURL.innerText = filename;
        });

        file_frame.open();
    }

    function deleteImage(event){
        event.preventDefault();

        const selectedSection = document.querySelector('.selected-raffleleader-section');
        const imgContainer = selectedSection.querySelector('.raffleleader-image-section');
        const imgFormURL = document.getElementById('imgURL');

        imgFormURL.innerText = '';
        imgFormURL.href = '';

        const defaultText = document.createElement('p');
        defaultText.textContent = 'Insert An Image Here';

        imgContainer.innerHTML = '';
        imgContainer.appendChild(defaultText);
    }


    function deleteSection(event){
        event.preventDefault();
        const deleteBtn = event.target.tagName === 'DIV' ? event.target : event.target.parentNode;
        const elementType = deleteBtn.getAttribute('data-type');

        switch(elementType){
            case 'textDelete':
                const confirmBtn = document.getElementById('textConfirmDelete');
                const cancelDelete = document.getElementById('textCancelDelete');
                deleteBtn.style.display = "none";
                confirmBtn.style.display = "flex";
                cancelDelete.style.display = "block";
                break;
            
            case 'counterDelete':
                const counterConfirmBtn = document.getElementById('counterConfirmDelete');
                const counterCancelDelete = document.getElementById('counterCancelDelete');
                deleteBtn.style.display = "none";
                counterConfirmBtn.style.display = "flex";
                counterCancelDelete.style.display = "block";
                break;

            case 'imageDelete':
                const imageConfirmBtn = document.getElementById('imageConfirmDelete');
                const imageCancelDelete = document.getElementById('imageCancelDelete');
                deleteBtn.style.display = "none";
                imageConfirmBtn.style.display = "flex";
                imageCancelDelete.style.display = "block";
                break;
            
            case 'entryDelete':
                const entryConfirmBtn = document.getElementById('entryConfirmDelete');
                const entryCancelDelete = document.getElementById('entryCancelDelete');
                deleteBtn.style.display = "none";
                entryConfirmBtn.style.display = "flex";
                entryCancelDelete.style.display = "block";
                break;

            case 'XFollowDelete':
                const XFollowConfirmBtn = document.getElementById('XFollowConfirmDelete');
                const XFollowCancelDelete = document.getElementById('XFollowCancelDelete');
                deleteBtn.style.display = "none";
                XFollowConfirmBtn.style.display = "flex";
                XFollowCancelDelete.style.display = "block";
                break;

            case 'XRepostDelete':
                const XRepostConfirmBtn = document.getElementById('XRepostConfirmDelete');
                const XRepostCancelDelete = document.getElementById('XRepostCancelDelete');
                deleteBtn.style.display = "none";
                XRepostConfirmBtn.style.display = "flex";
                XRepostCancelDelete.style.display = "block";
                break;

            case 'XLikeDelete':
                const XLikeConfirmBtn = document.getElementById('XLikeConfirmDelete');
                const XLikeCancelDelete = document.getElementById('XLikeCancelDelete');
                deleteBtn.style.display = "none";
                XLikeConfirmBtn.style.display = "flex";
                XLikeCancelDelete.style.display = "block";
                break;

            case 'instaFollowDelete':
                const instaFollowConfirmBtn = document.getElementById('instaFollowConfirmDelete');
                const instaFollowCancelDelete = document.getElementById('instaFollowCancelDelete');
                deleteBtn.style.display = "none";
                instaFollowConfirmBtn.style.display = "flex";
                instaFollowCancelDelete.style.display = "block";
                break;

            case 'instaCommentDelete':
                const instaCommentConfirmBtn = document.getElementById('instaCommentConfirmDelete');
                const instaCommentCancelDelete = document.getElementById('instaCommentCancelDelete');
                deleteBtn.style.display = "none";
                instaCommentConfirmBtn.style.display = "flex";
                instaCommentCancelDelete.style.display = "block";
                break;

            case 'instaLikeDelete':
                const instaLikeConfirmBtn = document.getElementById('instaLikeConfirmDelete');
                const instaLikeCancelDelete = document.getElementById('instaLikeCancelDelete');
                deleteBtn.style.display = "none";
                instaLikeConfirmBtn.style.display = "flex";
                instaLikeCancelDelete.style.display = "block";
                break;

            case 'facebookFollowDelete':
                const facebookFollowConfirmBtn = document.getElementById('facebookFollowConfirmDelete');
                const facebookFollowCancelDelete = document.getElementById('facebookFollowCancelDelete');
                deleteBtn.style.display = "none";
                facebookFollowConfirmBtn.style.display = "flex";
                facebookFollowCancelDelete.style.display = "block";
                break;
            
            case 'facebookCommentDelete':
                const facebookCommentConfirmBtn = document.getElementById('facebookCommentConfirmDelete');
                const facebookCommentCancelDelete = document.getElementById('facebookCommentCancelDelete');
                deleteBtn.style.display = "none";
                facebookCommentConfirmBtn.style.display = "flex";
                facebookCommentCancelDelete.style.display = "block";
                break;
            
            case 'facebookLikeDelete':
                const facebookLikeConfirmBtn = document.getElementById('facebookLikeConfirmDelete');
                const facebookLikeCancelDelete = document.getElementById('facebookLikeCancelDelete');
                deleteBtn.style.display = "none";
                facebookLikeConfirmBtn.style.display = "flex";
                facebookLikeCancelDelete.style.display = "block";
                break;

            case 'tiktokFollowDelete':
                const tiktokFollowConfirmBtn = document.getElementById('tiktokFollowConfirmDelete');
                const tiktokFollowCancelDelete = document.getElementById('tiktokFollowCancelDelete');
                deleteBtn.style.display = "none";
                tiktokFollowConfirmBtn.style.display = "flex";
                tiktokFollowCancelDelete.style.display = "block";
                break;
            
            case 'tiktokCommentDelete':
                const tiktokCommentConfirmBtn = document.getElementById('tiktokCommentConfirmDelete');
                const tiktokCommentCancelDelete = document.getElementById('tiktokCommentCancelDelete');
                deleteBtn.style.display = "none";
                tiktokCommentConfirmBtn.style.display = "flex";
                tiktokCommentCancelDelete.style.display = "block";
                break;
            
            case 'tiktokLikeDelete':
                const tiktokLikeConfirmBtn = document.getElementById('tiktokLikeConfirmDelete');
                const tiktokLikeCancelDelete = document.getElementById('tiktokLikeCancelDelete');
                deleteBtn.style.display = "none";
                tiktokLikeConfirmBtn.style.display = "flex";
                tiktokLikeCancelDelete.style.display = "block";
                break;
        }   
    }

    function confirmDelete(event){
        event.preventDefault();
        const confirmDelete = event.target.tagName === 'DIV' ? event.target : event.target.parentNode;
        const elementType = confirmDelete.getAttribute('data-type');
        const customizeBox = document.getElementById('settingsWrapper');

        const selectedSection = document.querySelector('.selected-raffleleader-section');

        switch(elementType){
            case 'textDelete':
                selectedSection.remove();

                const deleteBtn = document.getElementById('textDelete');
                const cancelDelete = document.getElementById('textCancelDelete');
                deleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                cancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
            
            case 'counterDelete':
                selectedSection.remove();

                const counterDeleteBtn = document.getElementById('counterDelete');
                const counterCancelDelete = document.getElementById('counterCancelDelete');
                counterDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                counterCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'imageDelete':
                selectedSection.remove();

                const imageDeleteBtn = document.getElementById('imageDelete');
                const imageCancelDelete = document.getElementById('imageCancelDelete');
                imageDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                imageCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'entryDelete':
                const entriesID = selectedSection.id;
                const additionalEntries = document.querySelectorAll(`[data-entry='${entriesID}']`);

                additionalEntries.forEach((additionalEntry)=>{
                    additionalEntry.remove();
                });

                selectedSection.remove();

                const entryDeleteBtn = document.getElementById('entryDelete');
                const entryCancelDelete = document.getElementById('entryCancelDelete');
                entryDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                entryCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
            
            case 'XFollowDelete':
                selectedSection.remove();

                const XFollowDeleteBtn = document.getElementById('XFollowDelete');
                const XFollowCancelDelete = document.getElementById('XFollowCancelDelete');
                XFollowDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                XFollowCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'XRepostDelete':
                selectedSection.remove();

                const XRepostDeleteBtn = document.getElementById('XRepostDelete');
                const XRepostCancelDelete = document.getElementById('XRepostCancelDelete');
                XRepostDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                XRepostCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'XLikeDelete':
                selectedSection.remove();

                const XLikeDeleteBtn = document.getElementById('XLikeDelete');
                const XLikeCancelDelete = document.getElementById('XLikeCancelDelete');
                XLikeDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                XLikeCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'instaFollowDelete':
                selectedSection.remove();

                const instaFollowDeleteBtn = document.getElementById('instaFollowDelete');
                const instaFollowCancelDelete = document.getElementById('instaFollowCancelDelete');
                instaFollowDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                instaFollowCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'instaCommentDelete':
                selectedSection.remove();

                const instaCommentDeleteBtn = document.getElementById('instaCommentDelete');
                const instaCommentCancelDelete = document.getElementById('instaCommentCancelDelete');
                instaCommentDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                instaCommentCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'instaLikeDelete':
                selectedSection.remove();

                const instaLikeDeleteBtn = document.getElementById('instaLikeDelete');
                const instaLikeCancelDelete = document.getElementById('instaLikeCancelDelete');
                instaLikeDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                instaLikeCancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'facebookFollowDelete':
                selectedSection.remove();
            
                const facebookFollowDeleteBtn = document.getElementById('facebookFollowDelete');
                const facebookFollowCancelDelete = document.getElementById('facebookFollowCancelDelete');
                facebookFollowDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                facebookFollowCancelDelete.style.display = "none";
            
                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
            
            case 'facebookCommentDelete':
                selectedSection.remove();
            
                const facebookCommentDeleteBtn = document.getElementById('facebookCommentDelete');
                const facebookCommentCancelDelete = document.getElementById('facebookCommentCancelDelete');
                facebookCommentDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                facebookCommentCancelDelete.style.display = "none";
            
                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
            
            case 'facebookLikeDelete':
                selectedSection.remove();
            
                const facebookLikeDeleteBtn = document.getElementById('facebookLikeDelete');
                const facebookLikeCancelDelete = document.getElementById('facebookLikeCancelDelete');
                facebookLikeDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                facebookLikeCancelDelete.style.display = "none";
            
                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;

            case 'tiktokFollowDelete':
                selectedSection.remove();
            
                const tiktokFollowDeleteBtn = document.getElementById('tiktokFollowDelete');
                const tiktokFollowCancelDelete = document.getElementById('tiktokFollowCancelDelete');
                tiktokFollowDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                tiktokFollowCancelDelete.style.display = "none";
            
                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
            
            case 'tiktokCommentDelete':
                selectedSection.remove();
            
                const tiktokCommentDeleteBtn = document.getElementById('tiktokCommentDelete');
                const tiktokCommentCancelDelete = document.getElementById('tiktokCommentCancelDelete');
                tiktokCommentDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                tiktokCommentCancelDelete.style.display = "none";
            
                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
            
            case 'tiktokLikeDelete':
                selectedSection.remove();
            
                const tiktokLikeDeleteBtn = document.getElementById('tiktokLikeDelete');
                const tiktokLikeCancelDelete = document.getElementById('tiktokLikeCancelDelete');
                tiktokLikeDeleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                tiktokLikeCancelDelete.style.display = "none";
            
                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
                break;
        }
    }

    function cancelDelete(event){
        event.preventDefault();
        const cancelBtn = event.target;
        const elementType = cancelBtn.getAttribute('data-type');

        switch(elementType){
            case 'textDelete':
                const deleteBtn = document.getElementById('textDelete');
                const confirmBtn = document.getElementById('textConfirmDelete');
                deleteBtn.style.display = "flex";
                confirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'counterDelete':
                const counterDeleteBtn = document.getElementById('counterDelete');
                const counterConfirmBtn = document.getElementById('counterConfirmDelete');
                counterDeleteBtn.style.display = "flex";
                counterConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'imageDelete':
                const imageDeleteBtn = document.getElementById('imageDelete');
                const imageConfirmBtn = document.getElementById('imageConfirmDelete');
                imageDeleteBtn.style.display = "flex";
                imageConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;
            
            case 'entryDelete':
                const entryDeleteBtn = document.getElementById('entryDelete');
                const entryConfirmBtn = document.getElementById('entryConfirmDelete');
                entryDeleteBtn.style.display = "flex";
                entryConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'XFollowDelete':
                const XFollowDeleteBtn = document.getElementById('XFollowDelete');
                const XFollowConfirmBtn = document.getElementById('XFollowConfirmDelete');
                XFollowDeleteBtn.style.display = "flex";
                XFollowConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'XRepostDelete':
                const XRepostDeleteBtn = document.getElementById('XRepostDelete');
                const XRepostConfirmBtn = document.getElementById('XRepostConfirmDelete');
                XRepostDeleteBtn.style.display = "flex";
                XRepostConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'XLikeDelete':
                const XLikeDeleteBtn = document.getElementById('XLikeDelete');
                const XLikeConfirmBtn = document.getElementById('XLikeConfirmDelete');
                XLikeDeleteBtn.style.display = "flex";
                XLikeConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'instaFollowDelete':
                const instaFollowDeleteBtn = document.getElementById('instaFollowDelete');
                const instaFollowConfirmBtn = document.getElementById('instaFollowConfirmDelete');
                instaFollowDeleteBtn.style.display = "flex";
                instaFollowConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'instaCommentDelete':
                const instaCommentDeleteBtn = document.getElementById('instaCommentDelete');
                const instaCommentConfirmBtn = document.getElementById('instaCommentConfirmDelete');
                instaCommentDeleteBtn.style.display = "flex";
                instaCommentConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'instaLikeDelete':
                const instaLikeDeleteBtn = document.getElementById('instaLikeDelete');
                const instaLikeConfirmBtn = document.getElementById('instaLikeConfirmDelete');
                instaLikeDeleteBtn.style.display = "flex";
                instaLikeConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'facebookFollowDelete':
                const facebookFollowDeleteBtn = document.getElementById('facebookFollowDelete');
                const facebookFollowConfirmBtn = document.getElementById('facebookFollowConfirmDelete');
                facebookFollowDeleteBtn.style.display = "flex";
                facebookFollowConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;
            
            case 'facebookCommentDelete':
                const facebookCommentDeleteBtn = document.getElementById('facebookCommentDelete');
                const facebookCommentConfirmBtn = document.getElementById('facebookCommentConfirmDelete');
                facebookCommentDeleteBtn.style.display = "flex";
                facebookCommentConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;
            
            case 'facebookLikeDelete':
                const facebookLikeDeleteBtn = document.getElementById('facebookLikeDelete');
                const facebookLikeConfirmBtn = document.getElementById('facebookLikeConfirmDelete');
                facebookLikeDeleteBtn.style.display = "flex";
                facebookLikeConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;

            case 'tiktokFollowDelete':
                const tiktokFollowDeleteBtn = document.getElementById('tiktokFollowDelete');
                const tiktokFollowConfirmBtn = document.getElementById('tiktokFollowConfirmDelete');
                tiktokFollowDeleteBtn.style.display = "flex";
                tiktokFollowConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;
            
            case 'tiktokCommentDelete':
                const tiktokCommentDeleteBtn = document.getElementById('tiktokCommentDelete');
                const tiktokCommentConfirmBtn = document.getElementById('tiktokCommentConfirmDelete');
                tiktokCommentDeleteBtn.style.display = "flex";
                tiktokCommentConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;
            
            case 'tiktokLikeDelete':
                const tiktokLikeDeleteBtn = document.getElementById('tiktokLikeDelete');
                const tiktokLikeConfirmBtn = document.getElementById('tiktokLikeConfirmDelete');
                tiktokLikeDeleteBtn.style.display = "flex";
                tiktokLikeConfirmBtn.style.display = "none";
                cancelBtn.style.display = "none";
                break;
        }
    }

    function handleAdditionalEntry(event){
        const additionalEntryInput = event.target;
        let inputValue = additionalEntryInput.value;
        const elementType = additionalEntryInput.getAttribute('data-type');
        const selectedElement = document.querySelector('.selected-raffleleader-section');
        const additionalEntryBtn = selectedElement.querySelector('button');
        
        if(inputValue.includes('@')){
            inputValue = inputValue.replace('@', '');
        }

        switch(elementType){
            case 'XFollow':
                inputValue = inputValue.includes('@') ? inputValue.replace('@', '') : inputValue;
                additionalEntryBtn.setAttribute('data-link', `https://twitter.com/intent/user?screen_name=${inputValue}`);
                break;

            case 'XRepost':
                const XRepostMatch = inputValue.match(/\d+/g);
                const XRepostTweetID = XRepostMatch[XRepostMatch.length - 1];
                additionalEntryBtn.setAttribute('data-link', `https://twitter.com/intent/retweet?tweet_id=${XRepostTweetID}`);
                break;

            case 'XLike':
                const XLikeMatch = inputValue.match(/\d+/g);
                const XLikeTweetID = XLikeMatch[XLikeMatch.length - 1];
                additionalEntryBtn.setAttribute('data-link', `https://twitter.com/intent/like?tweet_id=${XLikeTweetID}`);
                break;

            case 'instaFollow':
                inputValue = inputValue.includes('@') ? inputValue.replace('@', '') : inputValue;
                additionalEntryBtn.setAttribute('data-link', `https://instagram.com/${inputValue}/`);
                break;

            case 'instaComment':
                const instaCommentMatch = inputValue.match(/\/p\/([^\/]+)\//);
                const instaCommentID = instaCommentMatch ? instaCommentMatch[1] : null;
                additionalEntryBtn.setAttribute('data-link', `https://instagram.com/p/${instaCommentID}`);
                break;

            case 'instaLike':
                const instaLikeMatch = inputValue.match(/\/p\/([^\/]+)\//);
                const instaLikeID = instaLikeMatch ? instaLikeMatch[1] : null;
                additionalEntryBtn.setAttribute('data-link', `https://instagram.com/p/${instaLikeID}`);
                break;
        }
    }
})

// Util

function rgbToHex(rgb) {
    // Find the numbers in the rgb string and split them into an array
    var rgbValues = rgb.match(/\d+/g).map(function(value) {
        return parseInt(value, 10);
    });

    // Convert each number to a hexadecimal string and ensure it's two characters
    var hex = rgbValues.map(function(value) {
        var hexString = value.toString(16);
        return hexString.length === 1 ? '0' + hexString : hexString;
    });

    // Combine the hex values and prepend with a hash
    return '#' + hex.join('');
}