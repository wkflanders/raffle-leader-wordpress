document.addEventListener("previewLoaded", ()=>{
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
    const customizeBox = document.getElementById('settingsWrapper');

    preview.addEventListener('mousedown', (event)=>{

        if(event.button === 0){

            let selectedSection = event.target;
            const currentSection = document.querySelector('.selected-raffleleader-section');

            if(selectedSection.classList.contains('raffleleader-footer') || selectedSection.classList.contains('raffleleader-footer-wrapper') || selectedSection.classList.contains('raffleleader-footer-content') || selectedSection.id === 'raffleleader-dropzone'){
                return;
            }

            while(selectedSection != dropzone){
                if(selectedSection.classList.contains('raffleleader-section')){
                    try{
                        currentSection.classList.remove('selected-raffleleader-section');
                        currentSection.querySelector('.raffleleader-resize-handle').style.display = 'none';
                    } catch {}
                    selectedSection.classList.add('selected-raffleleader-section');
                    selectedSection.querySelector('.raffleleader-resize-handle').style.display = 'block';
                    break;
                }
                selectedSection = selectedSection.parentElement;
            }
            if(selectedSection != dropzone){
                const selectedElement = selectedSection.firstChild;
                const elementType = selectedElement.getAttribute('data-type');

                loadCustomizeSettings(selectedElement, elementType);

                openEditingBox(elementType);
            }
        }
    })

    function openEditingBox(elementType){
        const editingElement = document.getElementById(elementType);

        if(!customizeBox.classList.contains('slide-right-to-left')){
            customizeBox.classList.toggle('slide-right-to-left');
        }
        
        const currentEditingElement = document.querySelector('.visible-customize')
        
        if(currentEditingElement && currentEditingElement != editingElement){
            currentEditingElement.classList.remove('visible-customize');
            editingElement.classList.add('visible-customize');
        } else {
            editingElement.classList.add('visible-customize');
        }
    }

    function loadCustomizeSettings(element, elementType){
        switch(elementType){
            case 'textDetails':
                loadTextSettings(element);
                break;
                
            case 'entryDetails':
                loadEntrySettings(element);
                break;

            case 'counterDetails':
                loadCounterSettings(element);
                break;

            case 'imageDetails':
                loadImageSettings(element);
                break;

            case 'XFollowDetails':
                loadXFollowDetails(element);
                break;

            case 'XRepostDetails':
                loadXRepostDetails(element);
                break;

            case 'XLikeDetails':
                loadXLikeDetails(element);
                break;
        }
    }

    function loadTextSettings(element){
        // Load text settings
        const textForm = document.getElementById('textForm');
        const textElement = element.querySelector('h2');
        const textColorForm = document.getElementById('textFontColorForm');
        const textBackgroundColorForm = document.getElementById('textBackgroundColorForm');
        const textFontSizeForm = document.getElementById('textFontSizeForm');
        const textLetterSpacingForm = document.getElementById('textLetterSpacingForm');
        const textBorderColorForm = document.getElementById('textBorderColorForm');

        const textBorderFormTopStroke = document.getElementById('borderTopStroke');
        const textBorderFormLeftStroke = document.getElementById('borderLeftStroke');
        const textBorderFormBottomStroke = document.getElementById('borderBottomStroke');
        const textBorderFormRightStroke = document.getElementById('borderRightStroke');

        const textBorderFormTopLeftRadius = document.getElementById('borderTopLeftRadius');
        const textBorderFormTopRightRadius = document.getElementById('borderTopRightRadius');
        const textBorderFormBottomLeftRadius = document.getElementById('borderBottomLeftRadius');
        const textBorderFormBottomRightRadius = document.getElementById('borderBottomRightRadius');

        // text
        const text = textElement.textContent;
        textForm.value = text;
        
        // text align
        const textHorizontalAlign = document.querySelector('.text-horizontal-align');
        const textVerticalAlign = document.querySelector('.text-vertical-align');
        const textOrientation = document.querySelector('.text-orientation');

        const textJustifyContent = window.getComputedStyle(element).getPropertyValue('justify-content').replace(/^"|"$/g, '');
        const textAlignItems = window.getComputedStyle(element).getPropertyValue('align-items').replace(/^"|"$/g, '');
        const textWritingMode = window.getComputedStyle(element).getPropertyValue('writing-mode').replace(/^"|"$/g, '');

        try{
            textHorizontalAlign.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');
            textVerticalAlign.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');
            textOrientation.querySelector('.inline-btn-orient-active').classList.remove('inline-btn-orient-active');
        } catch {}

        if(textJustifyContent === 'left'){
            textHorizontalAlign.querySelector('.align-left').classList.add('inline-btn-halign-active');
        } else if(textJustifyContent === 'center'){
            textHorizontalAlign.querySelector('.align-center').classList.add('inline-btn-halign-active');
        } else if(textJustifyContent === 'right'){
            textHorizontalAlign.querySelector('.align-right').classList.add('inline-btn-halign-active');
        } else {
            textHorizontalAlign.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');
        }

        if(textAlignItems === 'start'){
            textVerticalAlign.querySelector('.align-top').classList.add('inline-btn-valign-active');
        } else if(textAlignItems === 'center'){
            textVerticalAlign.querySelector('.align-middle').classList.add('inline-btn-valign-active');
        } else if(textAlignItems === 'end'){
            textVerticalAlign.querySelector('.align-bottom').classList.add('inline-btn-valign-active');
        } else {
            textVerticalAlign.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');
        }

        if(textWritingMode === 'horizontal-tb'){
            textOrientation.querySelector('.horizontal-orient').classList.add('inline-btn-orient-active');
        } else if(textWritingMode === 'vertical-rl'){
            textOrientation.querySelector('.vertical-orient').classList.add('inline-btn-orient-active');
        } else {
            textOrientation.querySelector('.inline-btn-orient-active').classList.remove('inline-btn-orient-active');
        }

        // text font 
        const textFontList = document.getElementById('textFontList');
        const textFontDisplay = document.getElementById('textDropDownTitle');
        const font = window.getComputedStyle(textElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        textFontDisplay.innerText = font;
        
        Array.from(textFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === font){
                child.classList.add('selected-font');
            }
        })

        // text color
        const textHexBox = document.getElementById('textFontColorClick');
        const textColorRGB = window.getComputedStyle(textElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const textColorHex = rgbToHex(textColorRGB);
        textColorForm.value = textColorHex;
        textHexBox.style.backgroundColor = textColorHex;

        // background color
        const textBackgroundHexBox = document.getElementById('textBackgroundColorClick');
        const textBackgroundColorRGB = window.getComputedStyle(element).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const textBackgroundColorHex = rgbToHex(textBackgroundColorRGB);
        textBackgroundColorForm.value = textBackgroundColorHex;
        textBackgroundHexBox.style.backgroundColor = textBackgroundColorHex;

        // font size
        const textFontSize = window.getComputedStyle(textElement).getPropertyValue('font-size').replace(/^"|"$/g, '');
        textFontSizeForm.value = textFontSize;

        // text styles
        const textFontWeight = window.getComputedStyle(textElement).getPropertyValue('font-weight').replace(/^"|"$/g, '');
        const textFontStyle = textElement.style.fontStyle;
        const textFontDecoration = textElement.style.textDecoration;

        const textBoldBtn = document.getElementById('textBoldBtn');
        const textItalicizeBtn = document.getElementById('textItalicizeBtn');
        const textUnderlineBtn = document.getElementById('textUnderlineBtn');
        const textStrikeBtn = document.getElementById('textStrikeBtn');
        const textOverlineBtn = document.getElementById('textOverlineBtn');

        if(textFontWeight === 'bold' || textFontWeight >= 500){
            textBoldBtn.classList.add('inline-btn-style-active');
        } else {
            try{
                textBoldBtn.classList.remove('inline-btn-style-active')
            } catch {}
        }

        if(textFontStyle.includes('italic')){
            textItalicizeBtn.classList.add('inline-btn-style-active');
        } else {
            try{
                textItalicizeBtn.classList.remove('inline-btn-style-active')
            } catch {}
        }

        if(textFontDecoration.includes('underline')){
            textUnderlineBtn.classList.add('inline-btn-style-active');
        } else {
            try{
                textUnderlineBtn.classList.remove('inline-btn-style-active')
            } catch {}
        }

        if(textFontDecoration.includes('line-through')){
            textStrikeBtn.classList.add('inline-btn-style-active');
        } else {
            try{
                textStrikeBtn.classList.remove('inline-btn-style-active')
            } catch {}
        }

        if(textFontDecoration.includes('overline')){
            textOverlineBtn.classList.add('inline-btn-style-active');
        } else {
            try{
                textOverlineBtn.classList.remove('inline-btn-style-active')
            } catch {}
        }

        // text letter spacing
        const textLetterSpacing = window.getComputedStyle(textElement).getPropertyValue('letter-spacing').replace(/^"|"$/g, '');
        textLetterSpacingForm.value = textLetterSpacing;

        //text border stroke
        const borderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const borderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const borderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const borderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        textBorderFormTopStroke.value = borderStrokeTop;
        textBorderFormLeftStroke.value = borderStrokeLeft;
        textBorderFormBottomStroke.value = borderStrokeBottom;
        textBorderFormRightStroke.value = borderStrokeRight;

        //text border radius
        const borderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const borderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const borderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const borderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        textBorderFormTopLeftRadius.value = borderRadiusTopLeft;
        textBorderFormTopRightRadius.value = borderRadiusTopRight;
        textBorderFormBottomLeftRadius.value = borderRadiusBottomLeft;
        textBorderFormBottomRightRadius.value = borderRadiusBottomRight;

        //text border color
        const textBorderHexBox = document.getElementById('textBorderColorClick');
        const textBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const textBorderColorHex = rgbToHex(textBorderColorRGB);
        textBorderColorForm.value = textBorderColorHex;
        textBorderHexBox.style.backgroundColor = textBorderColorHex;
    }

    function loadEntrySettings(element){
        const entryButtonElement = element.querySelector('button');
        const entryButtonColorForm = document.getElementById('entryButtonColorForm');
        
        // entry button color
        const entryButtonHexBox = document.getElementById('entryButtonColorClick');
        const entryButtonColorRGB = window.getComputedStyle(entryButtonElement).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const entryButtonColorHex = rgbToHex(entryButtonColorRGB);
        entryButtonColorForm.value = entryButtonColorHex;
        entryButtonHexBox.style.backgroundColor = entryButtonColorHex;

        // entry background color
        const entryBackgroundColorForm = document.getElementById('entryBackgroundColorForm');
        const entryBackgroundHexBox = document.getElementById('entryBackgroundColorClick');
        const entryBackgroundColorRGB = window.getComputedStyle(element).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const entryBackgroundColorHex = rgbToHex(entryBackgroundColorRGB);
        entryBackgroundColorForm.value = entryBackgroundColorHex;
        entryBackgroundHexBox.style.backgroundColor = entryBackgroundColorHex;

        // entry border stroke
        const entryBorderFormTopStroke = document.getElementById('entryBorderTopStroke');
        const entryBorderFormLeftStroke = document.getElementById('entryBorderLeftStroke');
        const entryBorderFormBottomStroke = document.getElementById('entryBorderBottomStroke');
        const entryBorderFormRightStroke = document.getElementById('entryBorderRightStroke');

        const entryBorderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const entryBorderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const entryBorderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const entryBorderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        entryBorderFormTopStroke.value = entryBorderStrokeTop;
        entryBorderFormLeftStroke.value = entryBorderStrokeLeft;
        entryBorderFormBottomStroke.value = entryBorderStrokeBottom;
        entryBorderFormRightStroke.value = entryBorderStrokeRight;

        // entry border radius
        const entryBorderFormTopLeftRadius = document.getElementById('entryBorderTopLeftRadius');
        const entryBorderFormTopRightRadius = document.getElementById('entryBorderTopRightRadius');
        const entryBorderFormBottomLeftRadius = document.getElementById('entryBorderBottomLeftRadius');
        const entryBorderFormBottomRightRadius = document.getElementById('entryBorderBottomRightRadius');

        const entryBorderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const entryBorderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const entryBorderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const entryBorderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        entryBorderFormTopLeftRadius.value = entryBorderRadiusTopLeft;
        entryBorderFormTopRightRadius.value = entryBorderRadiusTopRight;
        entryBorderFormBottomLeftRadius.value = entryBorderRadiusBottomLeft;
        entryBorderFormBottomRightRadius.value = entryBorderRadiusBottomRight;

        // entry border color
        const entryBorderColorForm = document.getElementById('entryBorderColorForm');
        const entryBorderHexBox = document.getElementById('entryBorderColorClick');
        const entryBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const entryBorderColorHex = rgbToHex(entryBorderColorRGB);
        entryBorderColorForm.value = entryBorderColorHex;
        entryBorderHexBox.style.backgroundColor = entryBorderColorRGB;
    }
    
    function loadCounterSettings(element){
        const counterTextElement = element.querySelector('h2');

        // counter font
        const counterFontList = document.getElementById('counterFontList');
        const counterFontDisplay = document.getElementById('counterDropDownTitle');
        const font = window.getComputedStyle(counterTextElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        counterFontDisplay.innerText = font;
        
        Array.from(counterFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === font){
                child.classList.add('selected-font');
            }
        })

        // counter text color
        const counterColorForm = document.getElementById('counterFontColorForm');
        const counterHexBox = document.getElementById('counterFontColorClick');
        const counterColorRGB = window.getComputedStyle(counterTextElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const counterColorHex = rgbToHex(counterColorRGB);
        counterColorForm.value = counterColorHex;
        counterHexBox.style.backgroundColor = counterColorHex;

        // counter font size
        const counterFontSizeForm = document.getElementById('counterFontSizeForm');
        const counterFontSize = window.getComputedStyle(counterTextElement).getPropertyValue('font-size').replace(/^"|"$/g, '');
        counterFontSizeForm.value = counterFontSize;

        // counter letter spacing
        const counterLetterSpacingForm = document.getElementById('counterLetterSpacingForm');
        const counterLetterSpacing = window.getComputedStyle(counterTextElement).getPropertyValue('letter-spacing').replace(/^"|"$/g, '');
        counterLetterSpacingForm.value = counterLetterSpacing;

        // counter background color
        const counterBackgroundColorForm = document.getElementById('counterBackgroundColorForm');
        const counterBackgroundHexBox = document.getElementById('counterBackgroundColorClick');
        const counterBackgroundColorRGB = window.getComputedStyle(element).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const counterBackgroundColorHex = rgbToHex(counterBackgroundColorRGB);
        counterBackgroundColorForm.value = counterBackgroundColorHex;
        counterBackgroundHexBox.style.backgroundColor = counterBackgroundColorHex;

        // counter border stroke
        const counterBorderFormTopStroke = document.getElementById('counterBorderTopStroke');
        const counterBorderFormLeftStroke = document.getElementById('counterBorderLeftStroke');
        const counterBorderFormBottomStroke = document.getElementById('counterBorderBottomStroke');
        const counterBorderFormRightStroke = document.getElementById('counterBorderRightStroke');

        const counterBorderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const counterBorderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const counterBorderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const counterBorderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        counterBorderFormTopStroke.value = counterBorderStrokeTop;
        counterBorderFormLeftStroke.value = counterBorderStrokeLeft;
        counterBorderFormBottomStroke.value = counterBorderStrokeBottom;
        counterBorderFormRightStroke.value = counterBorderStrokeRight;

        // counter border radius
        const counterBorderFormTopLeftRadius = document.getElementById('counterBorderTopLeftRadius');
        const counterBorderFormTopRightRadius = document.getElementById('counterBorderTopRightRadius');
        const counterBorderFormBottomLeftRadius = document.getElementById('counterBorderBottomLeftRadius');
        const counterBorderFormBottomRightRadius = document.getElementById('counterBorderBottomRightRadius');

        const counterBorderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const counterBorderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const counterBorderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const counterBorderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        counterBorderFormTopLeftRadius.value = counterBorderRadiusTopLeft;
        counterBorderFormTopRightRadius.value = counterBorderRadiusTopRight;
        counterBorderFormBottomLeftRadius.value = counterBorderRadiusBottomLeft;
        counterBorderFormBottomRightRadius.value = counterBorderRadiusBottomRight;

        // counter border color
        const counterBorderColorForm = document.getElementById('counterBorderColorForm');
        const counterBorderHexBox = document.getElementById('counterBorderColorClick');
        const counterBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const counterBorderColorHex = rgbToHex(counterBorderColorRGB);
        counterBorderColorForm.value = counterBorderColorHex;
        counterBorderHexBox.style.backgroundColor = counterBorderColorRGB;

        // counter value
        const counterTimeLeftBtn = document.getElementById('counterTimeLeft');
        const counterTimeStartBtn = document.getElementById('counterTimeStart');
        const counterUserEntriesBtn = document.getElementById('counterUserEntries');
        const counterTotalEntriesBtn = document.getElementById('counterTotalEntries');

        const counterBtns = document.querySelectorAll('.dropdown-counter-btn');

        counterBtns.forEach((counterBtn) => {
            Array.from(counterBtn.classList).forEach((className)=>{
                if(className != 'dropdown-counter-btn'){
                    counterBtn.classList.remove(className);
                }
            })
        })

        if(element.classList.contains('show-time-left')){
            counterTimeLeftBtn.classList.add('active-counter');
        } else if(element.classList.contains('show-time-start')){
            counterTimeStartBtn.classList.add('active-counter');
        } else if(element.classList.contains('show-user-entries')){
            counterUserEntriesBtn.classList.add('active-counter');
        } else if(element.classList.contains('show-total-entries')){
            counterTotalEntriesBtn.classList.add('active-counter');
        } 
    }

    function loadImageSettings(element){
        // image
        const imageFormURL = document.getElementById('imgURL');
        const imageElement = element.querySelector('img');
        if(imageElement){
            const imageSRC = imageElement.src ? imageElement.src : '';
            const imageURL = new URL(imageSRC);
            const filename = imageURL.pathname.split('/').pop();

            imageFormURL.href = imageSRC;
            imageFormURL.innerText = filename;
        } else {
            imageFormURL.href = '';
            imageFormURL.innerText = '';
        }
        
        // image border stroke
        const imageBorderFormTopStroke = document.getElementById('imageBorderTopStroke');
        const imageBorderFormLeftStroke = document.getElementById('imageBorderLeftStroke');
        const imageBorderFormBottomStroke = document.getElementById('imageBorderBottomStroke');
        const imageBorderFormRightStroke = document.getElementById('imageBorderRightStroke');

        const imageBorderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const imageBorderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const imageBorderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const imageBorderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        imageBorderFormTopStroke.value = imageBorderStrokeTop;
        imageBorderFormLeftStroke.value = imageBorderStrokeLeft;
        imageBorderFormBottomStroke.value = imageBorderStrokeBottom;
        imageBorderFormRightStroke.value = imageBorderStrokeRight;

        // image border radius
        const imageBorderFormTopLeftRadius = document.getElementById('imageBorderTopLeftRadius');
        const imageBorderFormTopRightRadius = document.getElementById('imageBorderTopRightRadius');
        const imageBorderFormBottomLeftRadius = document.getElementById('imageBorderBottomLeftRadius');
        const imageBorderFormBottomRightRadius = document.getElementById('imageBorderBottomRightRadius');

        const imageBorderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const imageBorderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const imageBorderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const imageBorderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        imageBorderFormTopLeftRadius.value = imageBorderRadiusTopLeft;
        imageBorderFormTopRightRadius.value = imageBorderRadiusTopRight;
        imageBorderFormBottomLeftRadius.value = imageBorderRadiusBottomLeft;
        imageBorderFormBottomRightRadius.value = imageBorderRadiusBottomRight;

        // image border color
        const imageBorderColorForm = document.getElementById('imageBorderColorForm');
        const imageBorderHexBox = document.getElementById('imageBorderColorClick');
        const imageBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const imageBorderColorHex = rgbToHex(imageBorderColorRGB);
        imageBorderColorForm.value = imageBorderColorHex;
        imageBorderHexBox.style.backgroundColor = imageBorderColorHex
    }

    function loadXFollowDetails(element){
        // Load XFollow settings
        const headerForm = document.getElementById('XFollowHeaderForm');
        const subheaderForm = document.getElementById('XFollowSubheaderForm');
        const textElement = element.querySelector('.raffleleader-additional-entry-text-column');
        const headerElement = textElement.querySelector('h2');
        const subheaderElement = textElement.querySelector('p');

        // XFollow text
        const headerText = headerElement.textContent;
        const subheaderText = subheaderElement.textContent;
        headerForm.value = headerText;
        subheaderForm.value = subheaderText;

        // XFollow font 
        const headerFontList = document.getElementById('XFollowHeaderList');
        const headerFontDisplay = document.getElementById('XFollowHeaderDropDownTitle');
        const subheaderFontList = document.getElementById('XFollowSubheaderList');
        const subheaderFontDisplay = document.getElementById('XFollowSubheaderDropDownTitle');
        const headerFont = window.getComputedStyle(headerElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        const subheaderFont = window.getComputedStyle(subheaderElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        headerFontDisplay.innerText = headerFont;
        subheaderFontDisplay.innerText = subheaderFont;
        
        Array.from(headerFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === headerFont){
                child.classList.add('selected-font');
            }
        });

        Array.from(subheaderFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === subheaderFont){
                child.classList.add('selected-font');
            }
        });

        // header color
        const XFollowHeaderHexBox = document.getElementById('XFollowHeaderFontColorClick');
        const XFollowHeaderForm = document.getElementById('XFollowHeaderFontColorForm');
        const XFollowHeaderColorRGB = window.getComputedStyle(headerElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const XFollowHeaderColorHex = rgbToHex(XFollowHeaderColorRGB);
        XFollowHeaderForm.value = XFollowHeaderColorHex;
        XFollowHeaderHexBox.style.backgroundColor = XFollowHeaderColorHex;

        // subheader color
        const XFollowSubheaderHexBox = document.getElementById('XFollowSubheaderFontColorClick');
        const XFollowSubheaderForm = document.getElementById('XFollowSubheaderFontColorForm');
        const XFollowSubheaderColorRGB = window.getComputedStyle(subheaderElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const XFollowSubheaderColorHex = rgbToHex(XFollowSubheaderColorRGB);
        XFollowSubheaderForm.value = XFollowSubheaderColorHex;
        XFollowSubheaderHexBox.style.backgroundColor = XFollowSubheaderColorHex;
        
        // XFollow button color
        const XFollowButtonElement = element.querySelector('button');
        const XFollowButtonColorForm = document.getElementById('XFollowButtonColorForm');

        const XFollowButtonHexBox = document.getElementById('XFollowButtonColorClick');
        const XFollowButtonColorRGB = window.getComputedStyle(XFollowButtonElement).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const XFollowButtonColorHex = rgbToHex(XFollowButtonColorRGB);
        XFollowButtonColorForm.value = XFollowButtonColorHex;
        XFollowButtonHexBox.style.backgroundColor = XFollowButtonColorHex;

        // XFollow background color
        const XFollowBackgroundColorForm = document.getElementById('XFollowBackgroundColorForm');
        const XFollowBackgroundHexBox = document.getElementById('XFollowBackgroundColorClick');
        const XFollowBackgroundColorRGB = window.getComputedStyle(element).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const XFollowBackgroundColorHex = rgbToHex(XFollowBackgroundColorRGB);
        XFollowBackgroundColorForm.value = XFollowBackgroundColorHex;
        XFollowBackgroundHexBox.style.backgroundColor = XFollowBackgroundColorHex;

        // XFollow border color
        const XFollowBorderColorForm = document.getElementById('XFollowBorderColorForm');
        const XFollowBorderHexBox = document.getElementById('XFollowBorderColorClick');
        const XFollowBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const XFollowBorderColorHex = rgbToHex(XFollowBorderColorRGB);
        XFollowBorderColorForm.value = XFollowBorderColorHex;
        XFollowBorderHexBox.style.backgroundColor = XFollowBorderColorRGB;

        // XFollow border stroke
        const XFollowBorderFormTopStroke = document.getElementById('XFollowBorderTopStroke');
        const XFollowBorderFormLeftStroke = document.getElementById('XFollowBorderLeftStroke');
        const XFollowBorderFormBottomStroke = document.getElementById('XFollowBorderBottomStroke');
        const XFollowBorderFormRightStroke = document.getElementById('XFollowBorderRightStroke');

        const XFollowBorderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const XFollowBorderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const XFollowBorderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const XFollowBorderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        XFollowBorderFormTopStroke.value = XFollowBorderStrokeTop;
        XFollowBorderFormLeftStroke.value = XFollowBorderStrokeLeft;
        XFollowBorderFormBottomStroke.value = XFollowBorderStrokeBottom;
        XFollowBorderFormRightStroke.value = XFollowBorderStrokeRight;

        // XFolllow border radius
        const XFollowBorderFormTopLeftRadius = document.getElementById('XFollowBorderTopLeftRadius');
        const XFollowBorderFormTopRightRadius = document.getElementById('XFollowBorderTopRightRadius');
        const XFollowBorderFormBottomLeftRadius = document.getElementById('XFollowBorderBottomLeftRadius');
        const XFollowBorderFormBottomRightRadius = document.getElementById('XFollowBorderBottomRightRadius');

        const XFollowBorderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const XFollowBorderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const XFollowBorderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const XFollowBorderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        XFollowBorderFormTopLeftRadius.value = XFollowBorderRadiusTopLeft;
        XFollowBorderFormTopRightRadius.value = XFollowBorderRadiusTopRight;
        XFollowBorderFormBottomLeftRadius.value = XFollowBorderRadiusBottomLeft;
        XFollowBorderFormBottomRightRadius.value = XFollowBorderRadiusBottomRight;
    }

    function loadXRepostDetails(element){
        // Load XRepost settings
        const headerForm = document.getElementById('XRepostHeaderForm');
        const subheaderForm = document.getElementById('XRepostSubheaderForm');
        const textElement = element.querySelector('.raffleleader-additional-entry-text-column');
        const headerElement = textElement.querySelector('h2');
        const subheaderElement = textElement.querySelector('p');

        // XRepost text
        const headerText = headerElement.textContent;
        const subheaderText = subheaderElement.textContent;
        headerForm.value = headerText;
        subheaderForm.value = subheaderText;

        // XRepost font 
        const headerFontList = document.getElementById('XRepostHeaderList');
        const headerFontDisplay = document.getElementById('XRepostHeaderDropDownTitle');
        const subheaderFontList = document.getElementById('XRepostSubheaderList');
        const subheaderFontDisplay = document.getElementById('XRepostSubheaderDropDownTitle');
        const headerFont = window.getComputedStyle(headerElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        const subheaderFont = window.getComputedStyle(subheaderElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        headerFontDisplay.innerText = headerFont;
        subheaderFontDisplay.innerText = subheaderFont;
        
        Array.from(headerFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === headerFont){
                child.classList.add('selected-font');
            }
        });

        Array.from(subheaderFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === subheaderFont){
                child.classList.add('selected-font');
            }
        });

        // header color
        const XRepostHeaderHexBox = document.getElementById('XRepostHeaderFontColorClick');
        const XRepostHeaderForm = document.getElementById('XRepostHeaderFontColorForm');
        const XRepostHeaderColorRGB = window.getComputedStyle(headerElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const XRepostHeaderColorHex = rgbToHex(XRepostHeaderColorRGB);
        XRepostHeaderForm.value = XRepostHeaderColorHex;
        XRepostHeaderHexBox.style.backgroundColor = XRepostHeaderColorHex;

        // subheader color
        const XRepostSubheaderHexBox = document.getElementById('XRepostSubheaderFontColorClick');
        const XRepostSubheaderForm = document.getElementById('XRepostSubheaderFontColorForm');
        const XRepostSubheaderColorRGB = window.getComputedStyle(subheaderElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const XRepostSubheaderColorHex = rgbToHex(XRepostSubheaderColorRGB);
        XRepostSubheaderForm.value = XRepostSubheaderColorHex;
        XRepostSubheaderHexBox.style.backgroundColor = XRepostSubheaderColorHex;
        
        // XRepost button color
        const XRepostButtonElement = element.querySelector('button');
        const XRepostButtonColorForm = document.getElementById('XRepostButtonColorForm');

        const XRepostButtonHexBox = document.getElementById('XRepostButtonColorClick');
        const XRepostButtonColorRGB = window.getComputedStyle(XRepostButtonElement).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const XRepostButtonColorHex = rgbToHex(XRepostButtonColorRGB);
        XRepostButtonColorForm.value = XRepostButtonColorHex;
        XRepostButtonHexBox.style.backgroundColor = XRepostButtonColorHex;

        // XRepost background color
        const XRepostBackgroundColorForm = document.getElementById('XRepostBackgroundColorForm');
        const XRepostBackgroundHexBox = document.getElementById('XRepostBackgroundColorClick');
        const XRepostBackgroundColorRGB = window.getComputedStyle(element).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const XRepostBackgroundColorHex = rgbToHex(XRepostBackgroundColorRGB);
        XRepostBackgroundColorForm.value = XRepostBackgroundColorHex;
        XRepostBackgroundHexBox.style.backgroundColor = XRepostBackgroundColorHex;

        // XRepost border color
        const XRepostBorderColorForm = document.getElementById('XRepostBorderColorForm');
        const XRepostBorderHexBox = document.getElementById('XRepostBorderColorClick');
        const XRepostBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const XRepostBorderColorHex = rgbToHex(XRepostBorderColorRGB);
        XRepostBorderColorForm.value = XRepostBorderColorHex;
        XRepostBorderHexBox.style.backgroundColor = XRepostBorderColorRGB;

        // XRepost border stroke
        const XRepostBorderFormTopStroke = document.getElementById('XRepostBorderTopStroke');
        const XRepostBorderFormLeftStroke = document.getElementById('XRepostBorderLeftStroke');
        const XRepostBorderFormBottomStroke = document.getElementById('XRepostBorderBottomStroke');
        const XRepostBorderFormRightStroke = document.getElementById('XRepostBorderRightStroke');

        const XRepostBorderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const XRepostBorderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const XRepostBorderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const XRepostBorderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        XRepostBorderFormTopStroke.value = XRepostBorderStrokeTop;
        XRepostBorderFormLeftStroke.value = XRepostBorderStrokeLeft;
        XRepostBorderFormBottomStroke.value = XRepostBorderStrokeBottom;
        XRepostBorderFormRightStroke.value = XRepostBorderStrokeRight;

        // XFolllow border radius
        const XRepostBorderFormTopLeftRadius = document.getElementById('XRepostBorderTopLeftRadius');
        const XRepostBorderFormTopRightRadius = document.getElementById('XRepostBorderTopRightRadius');
        const XRepostBorderFormBottomLeftRadius = document.getElementById('XRepostBorderBottomLeftRadius');
        const XRepostBorderFormBottomRightRadius = document.getElementById('XRepostBorderBottomRightRadius');

        const XRepostBorderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const XRepostBorderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const XRepostBorderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const XRepostBorderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        XRepostBorderFormTopLeftRadius.value = XRepostBorderRadiusTopLeft;
        XRepostBorderFormTopRightRadius.value = XRepostBorderRadiusTopRight;
        XRepostBorderFormBottomLeftRadius.value = XRepostBorderRadiusBottomLeft;
        XRepostBorderFormBottomRightRadius.value = XRepostBorderRadiusBottomRight;
    }

    function loadXLikeDetails(element){
        // Load XLike settings
        const headerForm = document.getElementById('XLikeHeaderForm');
        const subheaderForm = document.getElementById('XLikeSubheaderForm');
        const textElement = element.querySelector('.raffleleader-additional-entry-text-column');
        const headerElement = textElement.querySelector('h2');
        const subheaderElement = textElement.querySelector('p');

        // XLike text
        const headerText = headerElement.textContent;
        const subheaderText = subheaderElement.textContent;
        headerForm.value = headerText;
        subheaderForm.value = subheaderText;

        // XLike font 
        const headerFontList = document.getElementById('XLikeHeaderList');
        const headerFontDisplay = document.getElementById('XLikeHeaderDropDownTitle');
        const subheaderFontList = document.getElementById('XLikeSubheaderList');
        const subheaderFontDisplay = document.getElementById('XLikeSubheaderDropDownTitle');
        const headerFont = window.getComputedStyle(headerElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        const subheaderFont = window.getComputedStyle(subheaderElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        headerFontDisplay.innerText = headerFont;
        subheaderFontDisplay.innerText = subheaderFont;
        
        Array.from(headerFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === headerFont){
                child.classList.add('selected-font');
            }
        });

        Array.from(subheaderFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === subheaderFont){
                child.classList.add('selected-font');
            }
        });

        // header color
        const XLikeHeaderHexBox = document.getElementById('XLikeHeaderFontColorClick');
        const XLikeHeaderForm = document.getElementById('XLikeHeaderFontColorForm');
        const XLikeHeaderColorRGB = window.getComputedStyle(headerElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const XLikeHeaderColorHex = rgbToHex(XLikeHeaderColorRGB);
        XLikeHeaderForm.value = XLikeHeaderColorHex;
        XLikeHeaderHexBox.style.backgroundColor = XLikeHeaderColorHex;

        // subheader color
        const XLikeSubheaderHexBox = document.getElementById('XLikeSubheaderFontColorClick');
        const XLikeSubheaderForm = document.getElementById('XLikeSubheaderFontColorForm');
        const XLikeSubheaderColorRGB = window.getComputedStyle(subheaderElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const XLikeSubheaderColorHex = rgbToHex(XLikeSubheaderColorRGB);
        XLikeSubheaderForm.value = XLikeSubheaderColorHex;
        XLikeSubheaderHexBox.style.backgroundColor = XLikeSubheaderColorHex;
        
        // XLike button color
        const XLikeButtonElement = element.querySelector('button');
        const XLikeButtonColorForm = document.getElementById('XLikeButtonColorForm');

        const XLikeButtonHexBox = document.getElementById('XLikeButtonColorClick');
        const XLikeButtonColorRGB = window.getComputedStyle(XLikeButtonElement).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const XLikeButtonColorHex = rgbToHex(XLikeButtonColorRGB);
        XLikeButtonColorForm.value = XLikeButtonColorHex;
        XLikeButtonHexBox.style.backgroundColor = XLikeButtonColorHex;

        // XLike background color
        const XLikeBackgroundColorForm = document.getElementById('XLikeBackgroundColorForm');
        const XLikeBackgroundHexBox = document.getElementById('XLikeBackgroundColorClick');
        const XLikeBackgroundColorRGB = window.getComputedStyle(element).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const XLikeBackgroundColorHex = rgbToHex(XLikeBackgroundColorRGB);
        XLikeBackgroundColorForm.value = XLikeBackgroundColorHex;
        XLikeBackgroundHexBox.style.backgroundColor = XLikeBackgroundColorHex;

        // XLike border color
        const XLikeBorderColorForm = document.getElementById('XLikeBorderColorForm');
        const XLikeBorderHexBox = document.getElementById('XLikeBorderColorClick');
        const XLikeBorderColorRGB = window.getComputedStyle(element).getPropertyValue('border-color').replace(/^"|"$/g, '');
        const XLikeBorderColorHex = rgbToHex(XLikeBorderColorRGB);
        XLikeBorderColorForm.value = XLikeBorderColorHex;
        XLikeBorderHexBox.style.backgroundColor = XLikeBorderColorRGB;

        // XLike border stroke
        const XLikeBorderFormTopStroke = document.getElementById('XLikeBorderTopStroke');
        const XLikeBorderFormLeftStroke = document.getElementById('XLikeBorderLeftStroke');
        const XLikeBorderFormBottomStroke = document.getElementById('XLikeBorderBottomStroke');
        const XLikeBorderFormRightStroke = document.getElementById('XLikeBorderRightStroke');

        const XLikeBorderStrokeTop = window.getComputedStyle(element).getPropertyValue('border-top-width').replace(/^"|"$/g, '');
        const XLikeBorderStrokeLeft = window.getComputedStyle(element).getPropertyValue('border-left-width').replace(/^"|"$/g, '');
        const XLikeBorderStrokeBottom = window.getComputedStyle(element).getPropertyValue('border-bottom-width').replace(/^"|"$/g, '');
        const XLikeBorderStrokeRight = window.getComputedStyle(element).getPropertyValue('border-right-width').replace(/^"|"$/g, '');

        XLikeBorderFormTopStroke.value = XLikeBorderStrokeTop;
        XLikeBorderFormLeftStroke.value = XLikeBorderStrokeLeft;
        XLikeBorderFormBottomStroke.value = XLikeBorderStrokeBottom;
        XLikeBorderFormRightStroke.value = XLikeBorderStrokeRight;

        // XFolllow border radius
        const XLikeBorderFormTopLeftRadius = document.getElementById('XLikeBorderTopLeftRadius');
        const XLikeBorderFormTopRightRadius = document.getElementById('XLikeBorderTopRightRadius');
        const XLikeBorderFormBottomLeftRadius = document.getElementById('XLikeBorderBottomLeftRadius');
        const XLikeBorderFormBottomRightRadius = document.getElementById('XLikeBorderBottomRightRadius');

        const XLikeBorderRadiusTopLeft = window.getComputedStyle(element).getPropertyValue('border-top-left-radius').replace(/^"|"$/g, '');
        const XLikeBorderRadiusTopRight = window.getComputedStyle(element).getPropertyValue('border-top-right-radius').replace(/^"|"$/g, '');
        const XLikeBorderRadiusBottomLeft = window.getComputedStyle(element).getPropertyValue('border-bottom-left-radius').replace(/^"|"$/g, '');
        const XLikeBorderRadiusBottomRight = window.getComputedStyle(element).getPropertyValue('border-bottom-right-radius').replace(/^"|"$/g, '');

        XLikeBorderFormTopLeftRadius.value = XLikeBorderRadiusTopLeft;
        XLikeBorderFormTopRightRadius.value = XLikeBorderRadiusTopRight;
        XLikeBorderFormBottomLeftRadius.value = XLikeBorderRadiusBottomLeft;
        XLikeBorderFormBottomRightRadius.value = XLikeBorderRadiusBottomRight;
    }

    document.addEventListener("keydown", ({key}) => {
        const currentElement = document.querySelector('.selected-raffleleader-section');

        if(key === "Escape"){
            try{
                currentElement.classList.remove('selected-raffleleader-section');
                currentElement.querySelector('.raffleleader-resize-handle').style.display = 'none';
                if(customizeBox.classList.contains('slide-right-to-left')){
                    customizeBox.classList.toggle('slide-right-to-left');
                }
            } catch {}
        }
    })
});

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