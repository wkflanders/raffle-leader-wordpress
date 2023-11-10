window.addEventListener("load", ()=>{

    const panels = document.querySelectorAll("div.panel");

    for (i=0; i < panels.length; i++){
        panels[i].addEventListener("mouseover", hoverPanel);
        panels[i].addEventListener("mouseout", stopHoverPanel);
    }

    function hoverPanel(event){
        let panelTarget = event.currentTarget;
        let panelActionTarget = panelTarget.querySelector("div.panel-action");

        panelActionTarget.style.display = "";
    }

    function stopHoverPanel(event){
        let panelTarget = event.currentTarget;
        let panelActionTarget = panelTarget.querySelector("div.panel-action");

        panelActionTarget.style.display = "none";
    }
})