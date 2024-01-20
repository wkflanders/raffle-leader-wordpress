window.addEventListener('load', ()=>{
    const dropDownBtns = document.querySelectorAll('.dropdown-btn');
    const textForms = document.querySelectorAll('.text-input');
    const leftAlignBtns = document.querySelectorAll('.align-left');
    const rightAlignBtns = document.querySelectorAll('.align-right');
    const centerAlignBtns = document.querySelectorAll('.align-center');
    const fonts = document.querySelectorAll('.font-title');

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

    function openDropDown(event){
        const dropDownBtn = event.target;
        const parentDropDown = dropDownBtn.parentNode.parentNode;
        const currentDropDown = parentDropDown.querySelector('.dropdown-content');

        currentDropDown.classList.toggle('show-dropdown');
    }

    function editPreviewText(event){
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
    }
})