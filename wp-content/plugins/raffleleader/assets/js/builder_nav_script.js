document.addEventListener("DOMContentLoaded", () => {

    let previewLoaded = false;
    document.addEventListener('previewLoaded', ()=>{
        previewLoaded = true;
    });

    const tabs = document.querySelectorAll("ul.rl-nav-tabs > li");
    tabs.forEach((tab)=>{
        tab.addEventListener("click", switchTab);
        console.log('test');
    });

    function switchTab(event){
        event.preventDefault();        

        let clickedTab = event.currentTarget;
        let anchor = event.target;
        let activePaneID = anchor.getAttribute("href");

        if((activePaneID === '#setup') || (activePaneID === '#publish')){
            if(previewLoaded){
                document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
                document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

                clickedTab.classList.add("active-tab");
                document.querySelector(activePaneID).classList.add("active-tab");
            } else {
                console.log('choose a template');
            } 
        } else {
            document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
            document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

            clickedTab.classList.add("active-tab");
            document.querySelector(activePaneID).classList.add("active-tab");
        }
    }
});