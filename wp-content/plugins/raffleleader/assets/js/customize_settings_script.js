document.addEventListener('previewLoaded', ()=>{
    const dropDownBtns = document.querySelectorAll('.dropdown-btn');
    const textForms = document.querySelectorAll('.text-input');
    const leftAlignBtns = document.querySelectorAll('.align-left');
    const rightAlignBtns = document.querySelectorAll('.align-right');
    const centerAlignBtns = document.querySelectorAll('.align-center');
    const fonts = document.querySelectorAll('.font-title');
    const colorBtns = document.querySelectorAll('.dropdown-color-click');
    const colorGradientPanel = document.getElementById('colorGradient');
    const colorForms = document.querySelectorAll('.color-input');
    const fontSizeForms = document.querySelectorAll('.font-size-input');
    const boldBtns = document.querySelectorAll('.bold-btn');
    const italicizeBtns = document.querySelectorAll('.italicize-btn');
    const underlineBtns = document.querySelectorAll('.underline-btn');
    const strikeBtns = document.querySelectorAll('.strike-btn');
    const overlineBtns = document.querySelectorAll('.overline-btn');
    const letterSpacingForms = document.querySelectorAll('.letter-spacing-input')
    
    const deleteBtns = document.querySelectorAll('.delete-display');
    const confirmDeleteBtns = document.querySelectorAll('.confirm-delete');
    const cancelDeleteBtns = document.querySelectorAll('.cancel-delete');

    let pickrText = undefined;

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

    fonts.forEach((font)=>{
        font.addEventListener('click', selectFont);
    })

    colorBtns.forEach((colorBtn)=>{
        colorBtn.addEventListener('click', showColorGradient);
    })

    colorForms.forEach((colorForm)=>{
        colorForm.addEventListener('input', enterHex);
    })

    fontSizeForms.forEach((fontSizeForm)=>{
        fontSizeForm.addEventListener('input', setFontSize);
    })

    deleteBtns.forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', deleteSection);
    })

    confirmDeleteBtns.forEach((confirmDeleteBtn)=>{
        confirmDeleteBtn.addEventListener('click', confirmDelete);
    })

    cancelDeleteBtns.forEach((cancelDeleteBtn)=>{
        cancelDeleteBtn.addEventListener('click', cancelDelete);
    })

    boldBtns.forEach((boldBtn)=>{
        boldBtn.addEventListener('click', toggleBold);
    })

    italicizeBtns.forEach((italicizeBtn)=>{
        italicizeBtn.addEventListener('click', toggleItalicize);
    })

    underlineBtns.forEach((underlineBtn)=>{
        underlineBtn.addEventListener('click', toggleUnderline);
    })

    strikeBtns.forEach((strikeBtn)=>{
        strikeBtn.addEventListener('click', toggleStrike);
    })

    overlineBtns.forEach((overlineBtn)=>{
        overlineBtn.addEventListener('click', toggleOverline);
    })

    letterSpacingForms.forEach((letterSpacingForm)=>{
        letterSpacingForm.addEventListener('input', setLetterSpacing);
    })

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
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'editText':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.textContent = this.value;
        }
    }

    function alignTextLeft(event){
        const inputLeftBtn = event.target;
        const elementType = inputLeftBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textAlign':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.justifyContent = 'left';
        }
    }

    function alignTextRight(event){
        const inputRightBtn = event.target;
        const elementType = inputRightBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textAlign':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.justifyContent = 'right';
        }
    }

    function alignTextCenter(event){
        const inputCenterBtn = event.target;
        const elementType = inputCenterBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textAlign':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.justifyContent = 'center';
        }
    }

    function selectFont(event){
        const inputFontElement = event.target;
        const fontName = inputFontElement.innerText;
        const dropDownDisplay = document.getElementById('textDropDownTitle');
        const elementType = inputFontElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textFont':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontFamily = `${fontName}`;
        }

        const currentFont = document.querySelector('.selected-font');
        inputFontElement.classList.add('selected-font');
        currentFont.classList.remove('selected-font');

        dropDownDisplay.innerText = fontName;
    }


    function showColorGradient(event){
        const inputColorElement = event.target;
        const elementType = inputColorElement.getAttribute('data-type');
        const currentTextFontColor = document.getElementById('textFontColorForm').value;

        switch(elementType){
            case 'textColor':
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
                })
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
                const editElement = document.querySelector('.selected-section').querySelector('h2');
                editElement.style.color = color;
        }
    }

    function setFontSize(event){
        const inputFontSizeElement = event.target;
        const fontSize = inputFontSizeElement.value;
        const elementType = inputFontSizeElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textFontSize':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontSize = `${fontSize}px`;
        }
    }

    function toggleBold(event){
        const inputBoldBtn = event.target;
        const elementType = inputBoldBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                const textFontWeight = window.getComputedStyle(selectedElement).getPropertyValue('font-weight').replace(/^"|"$/g, '');
                selectedElement.style.fontWeight = textFontWeight === "bold" ? 'normal'
                                                 : textFontWeight >= "500" ? 'normal'
                                                 : 'bold'; 
                if(!inputBoldBtn.classList.contains('font-style-active')){
                    inputBoldBtn.classList.add('font-style-active');
                } else {
                    inputBoldBtn.classList.remove('font-style-active');
                }
        }
    }

    function toggleItalicize(event){
        const inputItalicizeBtn = event.target;
        const elementType = inputItalicizeBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontStyle = selectedElement.style.fontStyle === "italic" ? 'normal' : 'italic';
                if(!inputItalicizeBtn.classList.contains('font-style-active')){
                    inputItalicizeBtn.classList.add('font-style-active');
                } else {
                    inputItalicizeBtn.classList.remove('font-style-active');
                }
        }
    }

    function toggleUnderline(event){
        const inputUnderlineBtn = event.target;
        const elementType = inputUnderlineBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');

                let currentStyle = selectedElement.style.textDecoration;
                if(currentStyle.includes('underline')){
                    selectedElement.style.textDecoration = currentStyle.replace('underline', '').trim();
                } else {
                    selectedElement.style.textDecoration = currentStyle + ' underline';
                }
                
                if(!inputUnderlineBtn.classList.contains('font-style-active')){
                    inputUnderlineBtn.classList.add('font-style-active');
                } else {
                    inputUnderlineBtn.classList.remove('font-style-active');
                }
        }
    }

    function toggleStrike(event){
        const inputStrikeBtn = event.target;
        const elementType = inputStrikeBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                
                let currentStyle = selectedElement.style.textDecoration;
                if(currentStyle.includes('line-through')){
                    selectedElement.style.textDecoration = currentStyle.replace('line-through', '').trim();
                } else {
                    selectedElement.style.textDecoration = currentStyle + ' line-through';
                }             

                if(!inputStrikeBtn.classList.contains('font-style-active')){
                    inputStrikeBtn.classList.add('font-style-active');
                } else {
                    inputStrikeBtn.classList.remove('font-style-active');
                }
        }
    }

    function toggleOverline(event){
        const inputOverlineBtn = event.target;
        const elementType = inputOverlineBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textfStyle':
                selectedElement = selectedSection.querySelector('h2');
                
                let currentStyle = selectedElement.style.textDecoration;
                if(currentStyle.includes('overline')){
                    selectedElement.style.textDecoration = currentStyle.replace('overline', '').trim();
                } else {
                    selectedElement.style.textDecoration = currentStyle + ' overline';
                }             

                if(!inputOverlineBtn.classList.contains('font-style-active')){
                    inputOverlineBtn.classList.add('font-style-active');
                } else {
                    inputOverlineBtn.classList.remove('font-style-active');
                }
        }
    }

    function setLetterSpacing(event){
        const inputLetterSpacingElement = event.target;
        const letterSpacing = inputLetterSpacingElement.value;
        const elementType = inputLetterSpacingElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textLetterSpacing':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.letterSpacing = `${letterSpacing}px`;
        }
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
        }
    }

    function confirmDelete(event){
        event.preventDefault();
        const confirmDelete = event.target.tagName === 'DIV' ? event.target : event.target.parentNode;
        const elementType = confirmDelete.getAttribute('data-type');
        const customizeBox = document.getElementById('settingsWrapper');

        switch(elementType){
            case 'textDelete':
                const selectedSection = document.querySelector('.selected-section');
                selectedSection.remove();

                const deleteBtn = document.getElementById('textDelete');
                const cancelDelete = document.getElementById('textCancelDelete');
                deleteBtn.style.display = "flex";
                confirmDelete.style.display = "none";
                cancelDelete.style.display = "none";

                customizeBox.scrollTop = 0;
                customizeBox.classList.toggle('slide-right-to-left');
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