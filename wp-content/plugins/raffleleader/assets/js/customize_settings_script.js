window.addEventListener('load', ()=>{
    const dropDownBtns = document.querySelectorAll('.dropdown-btn');

    dropDownBtns.forEach((dropDownBtn)=>{
        dropDownBtn.addEventListener('click', openDropDown);
    });

    function openDropDown(event){
        const dropDownBtn = event.target;
        const parentDropDown = dropDownBtn.parentNode.parentNode;
        const currentDropDown = parentDropDown.querySelector('.dropdown-content');

        currentDropDown.classList.toggle('show-dropdown');
    }
})