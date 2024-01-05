window.addEventListener("load", () => {

    // Store tabs variable
    const tabs = document.querySelectorAll("ul.rl-nav-tabs > li");
    
    for (i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", switchTab);
    }

    function switchTab(event){
        event.preventDefault();
        
        document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
        document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

        let clickedTab = event.currentTarget
        let anchor = event.target;
        let activePaneID = anchor.getAttribute("href");

        clickedTab.classList.add("active-tab");
        document.querySelector(activePaneID).classList.add("active-tab");

    }

});