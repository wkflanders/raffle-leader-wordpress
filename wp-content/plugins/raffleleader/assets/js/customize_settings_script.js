window.addEventListener('load', ()=>{
    const dropDownBtns = document.querySelectorAll('.dropdown-btn');
    const textForms = document.querySelectorAll('.text-input');
    const leftAlignBtns = document.querySelectorAll('.align-left');
    const rightAlignBtns = document.querySelectorAll('.align-right');
    const centerAlignBtns = document.querySelectorAll('.align-center');

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

    function openDropDown(event){
        const dropDownBtn = event.target;
        const parentDropDown = dropDownBtn.parentNode.parentNode;
        const currentDropDown = parentDropDown.querySelector('.dropdown-content');

        currentDropDown.classList.toggle('show-dropdown');
    }

    function editPreviewText(event){
        const inputTextForm = event.target;
        const elementType = inputTextForm.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section').firstChild;

        switch(elementType){
            case 'headerText':
                const selectedElement = selectedSection.querySelector('h2');
                selectedElement.textContent = this.value;
        }
    }

    function alignTextLeft(event){
        const leftTextBtn = event.target;
        const elementType = leftTextBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section').firstChild;
        selectedSection.style.justifyContent = 'left';
    }

    function alignTextRight(event){
        const rightTxtBtn = event.target;
        const elementType = rightTxtBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section').firstChild;
        selectedSection.style.justifyContent = 'right';
    }

    function alignTextCenter(event){
        const centerTxtBtn = event.target;
        const elementType = centerTxtBtn.getAttribute('data-type');
        const selectedSection = document.querySelector('.selected-section').firstChild;
        selectedSection.style.justifyContent = 'center';
    }
})