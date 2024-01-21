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
    let pickrHeader = undefined;

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
            case 'headerText':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.textContent = this.value;
        }
    }

    function alignTextLeft(){
        const selectedSection = document.querySelector('.selected-section').firstChild;
        selectedSection.style.justifyContent = 'left';
    }

    function alignTextRight(){
        const selectedSection = document.querySelector('.selected-section').firstChild;
        selectedSection.style.justifyContent = 'right';
    }

    function alignTextCenter(){
        const selectedSection = document.querySelector('.selected-section').firstChild;
        selectedSection.style.justifyContent = 'center';
    }

    function selectFont(event){
        const inputFontElement = event.target;
        const fontName = inputFontElement.innerText;
        const dropDownDisplay = document.getElementById('headerDropDownTitle');
        const elementType = inputFontElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'headerText':
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
        const currentHeaderTextColor = document.getElementById('headerFontColorForm').value;

        switch(elementType){
            case 'headerColor':
                    pickrHeader = Pickr.create({
                    el: colorGradientPanel,
                    theme: 'classic', // or 'monolith', or 'nano'
                    default: currentHeaderTextColor,
                    useAsButton: true,
                    padding: 15,
                    components: {
                        hue: true,
                    }
                });
                pickrHeader.setColorRepresentation('HEX');
                pickrHeader.show();

                pickrHeader.on('change', (color)=>{
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
            case 'headerColor':
                if(fromPickr === false){
                    if(pickrHeader === undefined){
                            pickrHeader = Pickr.create({
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
                        pickrHeader.setColor(color);
                        const hexBoxClick = document.getElementById('headerFontColorClick');
                        hexBoxClick.style.backgroundColor = color;
                    }
                } else {
                    const hexBoxText = document.getElementById('headerFontColorForm');
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
            case 'headerFontSize':
                console.log(fontSize);
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontSize = `${fontSize}px`;
        }
    }
})

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