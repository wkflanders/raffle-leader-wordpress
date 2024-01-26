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
        }
    }

    function loadTextSettings(element){
        // Load text settings
        const textForm = document.getElementById('textForm');
        const textElement = element.querySelector('h2');
        const textColorForm = document.getElementById('textFontColorForm');
        const textFontSizeForm = document.getElementById('textFontSizeForm');
        const textLetterSpacingForm = document.getElementById('textLetterSpacingForm');

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