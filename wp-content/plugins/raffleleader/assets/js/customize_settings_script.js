document.addEventListener('previewLoaded', ()=>{
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
    const colorGradientPanel = document.getElementById('colorGradient');
    const colorForms = document.querySelectorAll('.color-input');
    const fontSizeForms = document.querySelectorAll('.font-size-input');
    const boldBtns = document.querySelectorAll('.bold-btn');
    const italicizeBtns = document.querySelectorAll('.italicize-btn');
    const underlineBtns = document.querySelectorAll('.underline-btn');
    const strikeBtns = document.querySelectorAll('.strike-btn');
    const overlineBtns = document.querySelectorAll('.overline-btn');
    const letterSpacingForms = document.querySelectorAll('.letter-spacing-input')
    
    const borderStrokeForms = document.querySelectorAll('.border-stroke-input');
    const borderRadiusForms = document.querySelectorAll('.border-radius-input');
    const colorGradientPanelBorder = document.getElementById('colorGradientBorder');
    const colorGradientPanelBackground = document.getElementById('colorGradientBackground');
    const deleteBtns = document.querySelectorAll('.delete-display');
    const confirmDeleteBtns = document.querySelectorAll('.confirm-delete');
    const cancelDeleteBtns = document.querySelectorAll('.cancel-delete');

    const imageBtn = document.getElementById('insertImageBtn');
    const imageDeleteBtn = document.getElementById('imgDelete');

    let pickrText = undefined;
    let pickrBackground = undefined;
    let pickrBorder = undefined;
    let pickrCounter = undefined;
    let pickerCounterBackground = undefined;
    let pickrCounterBorder = undefined;
    let pickrImageBorder = undefined;

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

    imageBtn.addEventListener('click', insertImage);

    imageDeleteBtn.addEventListener('click', deleteImage);


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

                document.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');;
                inputLeftBtn.classList.add('inline-btn-halign-active');
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

                document.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');;
                inputRightBtn.classList.add('inline-btn-halign-active');
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

                document.querySelector('.inline-btn-halign-active').classList.remove('inline-btn-halign-active');;
                inputCenterBtn.classList.add('inline-btn-halign-active');
        }
    }

    function alignTextTop(event){
        const inputerTopBtn = event.target;
        const elementType = inputerTopBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textVert':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.alignItems = 'start';

                document.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');;
                inputerTopBtn.classList.add('inline-btn-valign-active');
        }
    }

    function alignTextMiddle(event){
        const inputMiddleBtn = event.target;
        const elementType = inputMiddleBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textVert':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.alignItems = 'center';

                document.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');;
                inputMiddleBtn.classList.add('inline-btn-valign-active');
        }
    }

    function alignTextBottom(event){
        const inputBottomBtn = event.target;
        const elementType = inputBottomBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textVert':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.alignItems = 'end';

                document.querySelector('.inline-btn-valign-active').classList.remove('inline-btn-valign-active');;
                inputBottomBtn.classList.add('inline-btn-valign-active');
        }
    }

    function orientTextHorizontal(event){
        const inputHBtn = event.target;
        const elementType = inputHBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textOrient':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.writingMode = 'horizontal-tb';
                selectedElement.style.textOrientation = 'upright';

                document.querySelector('.inline-btn-orient-active').classList.remove('inline-btn-orient-active');;
                inputHBtn.classList.add('inline-btn-orient-active');
        }
    }

    function orientTextVertical(event){
        const inputVBtn = event.target;
        const elementType = inputVBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textOrient':
                selectedElement = selectedSection.querySelector('.text-section');
                selectedElement.style.writingMode = 'vertical-rl';
                selectedElement.style.textOrientation = 'upright';

                document.querySelector('.inline-btn-orient-active').classList.remove('inline-btn-orient-active');;
                inputVBtn.classList.add('inline-btn-orient-active');
        }
    }

    function selectFont(event){
        const inputFontElement = event.target;
        const fontName = inputFontElement.innerText;
        const elementType = inputFontElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textFont':
                const selectedElement = selectedSection.querySelector('h2');
                const textDropDownDisplay = document.getElementById('textDropDownTitle');
                selectedElement.style.fontFamily = `${fontName}`;
                textDropDownDisplay.innerText = fontName;
                break;
            
            case 'counterFont':
                const counterSelectedElement = selectedSection.querySelector('h2');
                const counterDropDownDisplay = document.getElementById('counterDropDownTitle');
                counterSelectedElement.style.fontFamily = `${fontName}`;
                counterDropDownDisplay.innerText = fontName;
                break;
        }

        const currentFont = document.querySelector('.selected-font');
        inputFontElement.classList.add('selected-font');
        currentFont.classList.remove('selected-font');
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
                })
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
                })
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
                })
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
                })
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
                })
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
                })
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
                })
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
                const editElementFont = document.querySelector('.selected-section').querySelector('h2');
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
                const editElementBackground = document.querySelector('.selected-section').querySelector('.text-section');
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
                const editElementBorder = document.querySelector('.selected-section').querySelector('.text-section');
                
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
                const counterEditElementFont = document.querySelector('.selected-section').querySelector('h2');
                counterEditElementFont.style.color = color;
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
                const counterEditElementBackground = document.querySelector('.selected-section').querySelector('.counter-section');
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
                const imageEditElementBorder = document.querySelector('.selected-section').querySelector('.image-section');
                
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
                const counterEditElementBorder = document.querySelector('.selected-section').querySelector('.counter-section');
                
                const counterCurrentBorderStrokeTop = getComputedStyle(counterEditElementBorder).borderTopWidth;
                const counterCurrentBorderStrokeLeft = getComputedStyle(counterEditElementBorder).borderLeftWidth;
                const counterCurrentBorderStrokeBottom = getComputedStyle(counterEditElementBorder).borderBottomWidth;
                const counterCurrentBorderStrokeRight = getComputedStyle(counterEditElementBorder).borderRightWidth;

                counterEditElementBorder.style.borderTop = `${counterCurrentBorderStrokeTop} solid ${color}`;
                counterEditElementBorder.style.borderLeft = `${counterCurrentBorderStrokeLeft} solid ${color}`;
                counterEditElementBorder.style.borderBottom = `${counterCurrentBorderStrokeBottom} solid ${color}`;
                counterEditElementBorder.style.borderRight = `${counterCurrentBorderStrokeRight} solid ${color}`;
                break;
        }
    }

    function setFontSize(event){
        const inputFontSizeElement = event.target;
        const fontSize = inputFontSizeElement.value.includes('px') ? inputFontSizeElement.value.replace('px', '') : inputFontSizeElement.value;
        const elementType = inputFontSizeElement.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textFontSize':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.style.fontSize = `${fontSize}px`;
                break;

            case 'counterFontSize':
                const counterSelectedElement = selectedSection.querySelector('h2');
                counterSelectedElement.style.fontSize = `${fontSize}px`;
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
        const selectedSection = document.querySelector('.selected-section');

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
        const selectedSection = document.querySelector('.selected-section');

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
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textBorderStroke':
                const textSection = selectedSection.querySelector('.text-section');

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
                const counterSection = selectedSection.querySelector('.counter-section');

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
                const imageSection = selectedSection.querySelector('.image-section');

                const imageCurrentBorderColorTop = getComputedStyle(imageSection).borderTopColor;
                const imageCurrentBorderColorLeft = getComputedStyle(imageSection).borderLeftColor;
                const imageCurrentBorderColorBottom = getComputedStyle(imageSection).borderBottomColor;
                const imageCurrentBorderColorRight = getComputedStyle(imageSection).borderRightColor;

                if(strokeFormID === 'imageBorderTopStroke') imageSection.style.borderTop = `${borderStroke}px solid ${imageCurrentBorderColorTop}`;
                if(strokeFormID === 'imageBorderLeftStroke') imageSection.style.borderLeft = `${borderStroke}px solid ${imageCurrentBorderColorLeft}`;
                if(strokeFormID === 'imageBorderBottomStroke') imageSection.style.borderBottom = `${borderStroke}px solid ${imageCurrentBorderColorBottom}`;
                if(strokeFormID === 'imageBorderRightStroke') imageSection.style.borderRight = `${borderStroke}px solid ${imageCurrentBorderColorRight}`;
                break;
            }
    }

    function setBorderRadius(event){
        const inputBorderRadiusForm = event.target;
        const borderRadius = inputBorderRadiusForm.value.includes('px') ? inputBorderRadiusForm.value.replace('px', '') : inputBorderRadiusForm.value;
        const radiusFormID = inputBorderRadiusForm.id;
        const elementType = inputBorderRadiusForm.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section');

        switch(elementType){
            case 'textBorderRadius':
                const textSection = selectedSection.querySelector('.text-section');

                if(radiusFormID === 'borderTopLeftRadius') textSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'borderTopRightRadius') textSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'borderBottomLeftRadius') textSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'borderBottomRightRadius') textSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'counterBorderRadius':
                const counterSection = selectedSection.querySelector('.counter-section');

                if(radiusFormID === 'counterBorderTopLeftRadius') counterSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'counterBorderTopRightRadius') counterSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'counterBorderBottomLeftRadius') counterSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'counterBorderBottomRightRadius') counterSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;

            case 'imageBorderRadius':
                const imageSection = selectedSection.querySelector('.image-section');

                if(radiusFormID === 'imageBorderTopLeftRadius') imageSection.style.borderTopLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'imageBorderTopRightRadius') imageSection.style.borderTopRightRadius = `${borderRadius}px`;
                if(radiusFormID === 'imageBorderBottomLeftRadius') imageSection.style.borderBottomLeftRadius = `${borderRadius}px`;
                if(radiusFormID === 'imageBorderBottomRightRadius') imageSection.style.borderBottomRightRadius = `${borderRadius}px`;
                break;
        }
    }

    function insertImage(event){
        event.preventDefault();
        const selectedSection = document.querySelector('.selected-section');
        const imgContainer = selectedSection.querySelector('.image-section');
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

        const selectedSection = document.querySelector('.selected-section');
        const imgContainer = selectedSection.querySelector('.image-section');
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
        }   
    }

    function confirmDelete(event){
        event.preventDefault();
        const confirmDelete = event.target.tagName === 'DIV' ? event.target : event.target.parentNode;
        const elementType = confirmDelete.getAttribute('data-type');
        const customizeBox = document.getElementById('settingsWrapper');

        const selectedSection = document.querySelector('.selected-section');

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