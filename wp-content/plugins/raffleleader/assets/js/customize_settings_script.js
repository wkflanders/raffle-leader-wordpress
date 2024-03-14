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
                    el: XFollowHeadeColorGradient,
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
                            el: XFollowHeadeColorGradient,
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
                            el: XRepostHeadeColorGradient,
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
        const selectedSection = document.querySelector('.selected-raffleleader-section');
        const imgContainer = selectedSection.querySelector('.raffleleader-image-section');
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

            imgElement.src = attachment.url;

            imgElement.alt = attachment.alt || 'Raffle Image';
            imgElement.title = attachment.title || '';

            imgContainer.innerHTML = '';
            imgContainer.appendChild(imgElement);

            const filename = new URL(attachment.url).pathname.split('/').pop();

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