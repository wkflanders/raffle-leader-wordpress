window.addEventListener("load", ()=>{

    const customizePanels = document.querySelectorAll(".customize-box-link");
    
    for(i=0; i < customizePanels.length; i++){
        customizePanels[i].addEventListener("click", selectCustomizeBox);
    }

    function selectCustomizeBox(event){
        const activeBox = document.querySelector(".active-box");
        const activeBoxContent = document.querySelector(".active-box-content");        

        let anchor = event.target;
        let clickedBox = anchor.parentNode;
        let boxID = anchor.getAttribute("href");

        activeBox.classList.remove("active-box");
        activeBoxContent.classList.remove("active-box-content"); 
        activeBoxContent.classList.add("hidden-box-content");

        clickedBox.classList.add("active-box");
        document.querySelector(boxID).classList.remove("hidden-box-content");
        document.querySelector(boxID).classList.add("active-box-content");
    }

})

