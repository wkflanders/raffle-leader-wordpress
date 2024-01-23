document.addEventListener("previewLoaded", ()=>{
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
    const customizeBox = document.getElementById('settingsWrapper')

    preview.addEventListener('mousedown', (event)=>{

        if(event.button === 0){

            let selectedSection = event.target;
            const currentSection = document.querySelector('.selected-section');

            if(selectedSection.classList.contains('footer') || selectedSection.classList.contains('footer-wrapper') || selectedSection.classList.contains('footer-content')){
                return;
            }

            while(selectedSection != dropzone){
                if(selectedSection.classList.contains('section')){
                    try{
                        currentSection.classList.remove('selected-section');
                    } catch {}
                    selectedSection.classList.add('selected-section');
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
            case 'headerDetails':
                loadHeaderSettings(element);
        }
    }

    function loadHeaderSettings(element){
        // Load header settings
        const headerTextForm = document.getElementById('headerTextForm');
        const headerTextElement = element.querySelector('h2');
        const headerColorForm = document.getElementById('headerFontColorForm');
        const headerFontSizeForm = document.getElementById('headerFontSizeForm');

        // header text
        const headerText = headerTextElement.textContent;
        headerTextForm.value = headerText;
        
        // header font 
        const headerFontList = document.getElementById('headerFontList');
        const headerFontDisplay = document.getElementById('headerDropDownTitle');
        const font = window.getComputedStyle(headerTextElement).getPropertyValue('font-family').replace(/^"|"$/g, '');
        headerFontDisplay.innerText = font;
        
        Array.from(headerFontList.children).forEach((child)=>{
            const childFont = child.innerText;
            if(child.classList.contains('selected-font')){
                child.classList.remove('selected-font');
            }
            if(childFont === font){
                child.classList.add('selected-font');
            }
        })

        // header text color
        const headerHexBox = document.getElementById('headerFontColorClick');
        const headerTextColorRGB = window.getComputedStyle(headerTextElement).getPropertyValue('color').replace(/^"|"$/g, '');
        const headerTextColorHex = rgbToHex(headerTextColorRGB);
        headerColorForm.value = headerTextColorHex;
        headerHexBox.style.backgroundColor = headerTextColorHex;

        // header font size
        const headerFontSize = window.getComputedStyle(headerTextElement).getPropertyValue('font-size').replace(/^"|"$/g, '');
        headerFontSizeForm.value = headerFontSize;

        // header styles
        const headerFontWeight = window.getComputedStyle(headerTextElement).getPropertyValue('font-weight').replace(/^"|"$/g, '');
        console.log(headerFontWeight);
        const headerFontStyle = headerTextElement.style.fontStyle;
        const headerFontDecoration = headerTextElement.style.textDecoration;

        const headerBoldBtn = document.getElementById('headerBoldBtn');
        const headerItalicizeBtn = document.getElementById('headerItalicizeBtn');
        const headerUnderlineBtn = document.getElementById('headerUnderlineBtn');
        const headerStrikeBtn = document.getElementById('headerStrikeBtn');
        const headerOverlineBtn = document.getElementById('headerOverlineBtn');

        if(headerFontWeight === 'bold' || headerFontWeight >= 500){
            headerBoldBtn.classList.add('font-style-active');
        }

        if(headerFontStyle.includes('italicize')){
            headerItalicizeBtn.classList.add('font-style-active');
        }

        if(headerFontDecoration.includes('underline')){
            headerUnderlineBtn.classList.add('font-style-active');
        }

        if(headerFontDecoration.includes('line-through')){
            headerStrikeBtn.classList.add('font-style-active');
        }

        if(headerFontDecoration.includes('overline')){
            headerOverlineBtn.classList.add('font-style-active');
        }
    }
    

    document.addEventListener("keydown", ({key}) => {
        const currentElement = document.querySelector('.selected-section');

        if(key === "Escape"){
            try{
                currentElement.classList.remove('selected-section');
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