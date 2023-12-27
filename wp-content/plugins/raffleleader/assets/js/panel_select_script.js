window.addEventListener("load", ()=>{

    const panels = document.querySelectorAll("div.rl-box");

    const selectBtns = document.querySelectorAll(".select-template");
    
    for (i=0; i < panels.length; i++){
        panels[i].addEventListener("mouseover", hoverPanel);
        panels[i].addEventListener("mouseout", stopHoverPanel);
    }

    for (i=0; i< selectBtns.length; i++){
        selectBtns[i].addEventListener("mouseover", hoverBtn);
        selectBtns[i].addEventListener("mouseout", stopHoverBtn);
    }

    function hoverPanel(event){
        let panelTarget = event.currentTarget;
        let panelActionTarget = panelTarget.querySelector("div.rl-box-action");

        panelActionTarget.style.display = "";
    }

    function stopHoverPanel(event){
        let panelTarget = event.currentTarget;
        let panelActionTarget = panelTarget.querySelector("div.rl-box-action");

        panelActionTarget.style.display = "none";
    }

    function hoverBtn(event){
        let btnTarget = event.currentTarget;
        
        btnTarget.classList.add("active-select-btn");
    }

    function stopHoverBtn(event){
        let btnTarget = event.currentTarget;

        btnTarget.classList.remove("active-select-btn");
    }
})