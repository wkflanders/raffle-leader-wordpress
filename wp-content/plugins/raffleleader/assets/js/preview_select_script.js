document.addEventListener("previewLoaded", ()=>{
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
    const customizeBox = document.getElementById('settingsWrapper');

    preview.addEventListener('mousedown', (event)=>{

        if(event.button === 0){

            let selectedSection = event.target;
            const currentSection = document.querySelector('.selected-section');

            if(selectedSection.classList.contains('footer') || selectedSection.classList.contains('footer-wrapper') || selectedSection.classList.contains('footer-content') || selectedSection.id === 'dropzone'){
                return;
            }

            while(selectedSection != dropzone){
                if(selectedSection.classList.contains('section')){
                    try{
                        currentSection.classList.remove('selected-section');
                        currentSection.querySelector('.resize-handle').style.display = 'none';
                    } catch {}
                    selectedSection.classList.add('selected-section');
                    selectedSection.querySelector('.resize-handle').style.display = 'block';
                    break;
                }
                selectedSection = selectedSection.parentElement;
            }

            const selectedElement = selectedSection.firstChild;
            const elementType = selectedElement.getAttribute('data-type');

            loadCustomizeSettings(selectedElement, elementType);

            openEditingBox(elementType);
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
            case 'counterDetails':
                loadCounterSettings(element);
                break;
            case 'imageDetails':
                loadImageSettings(element);
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

    document.addEventListener("keydown", ({key}) => {
        const currentElement = document.querySelector('.selected-section');

        if(key === "Escape"){
            try{
                currentElement.classList.remove('selected-section');
                currentElement.querySelector('.resize-handle').style.display = 'none';
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