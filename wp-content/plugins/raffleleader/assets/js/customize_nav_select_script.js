window.addEventListener("load", ()=>{

    const customizePanels = document.querySelectorAll(".customize-box-link");
    
    for(i=0; i < customizePanels.length; i++){
        customizePanels[i].addEventListener("click", selectCustomizeBox);
    }

    function selectCustomizeBox(event){
        event.preventDefault();

        document.querySelector(".active-box").classList.remove("active-box");
        document.querySelector(".active-box-content").classList.remove("active-box-content");        

        let anchor = event.target;
        let clickedBox = anchor.parentNode;
        let boxID = anchor.getAttribute("href");

        clickedBox.classList.add("active-box");
        document.querySelector(boxID).classList.add("active-box-content");
    }

})

