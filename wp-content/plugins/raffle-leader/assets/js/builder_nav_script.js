document.addEventListener("DOMContentLoaded", () => {
    
    const templateModal = document.getElementById("templateModal");
    const templateModalContent = templateModal.querySelector(".template-modal-content");

    const emailModal = document.getElementById("emailModal");
    const emailModalContent = emailModal.querySelector(".email-modal-content");

    let hasEmailSection = false;

    const helpBtn = document.querySelector('.rl-builder-help');
    helpBtn.addEventListener('click', handleHelpBtn);

    let previewLoaded = false;
    document.addEventListener('previewLoaded', ()=>{
        previewLoaded = true;
    });

    const tabs = document.querySelectorAll("ul.rl-nav-tabs > li");
    tabs.forEach((tab)=>{
        tab.addEventListener("click", switchTab);
    });

    function switchTab(event){
        event.preventDefault();        

        let clickedTab = event.currentTarget;
        let anchor = event.target;
        let activePaneID = anchor.getAttribute("href");

        if((activePaneID === '#setup') || (activePaneID === '#publish')){
            if(previewLoaded){
                if(activePaneID === '#publish'){
                    const dropzone = document.getElementById('dropzone');
                    const entrySection = dropzone.querySelector('.raffleleader-entry-section');

                    if(entrySection){
                        document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
                        document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

                        clickedTab.classList.add("active-tab");
                        document.querySelector(activePaneID).classList.add("active-tab");
                    } else {
                        emailModalContent.style.display = "block";
                        emailModal.style.animation = "slideDown 1s forwards";
                        document.body.classList.add('shake-animation');
        
                        setTimeout(() => {
                            emailModal.style.animation = "slideUp 1.5s forwards";
                            document.body.classList.remove('shake-animation');
        
                            setTimeout(() => {
                                emailModalContent.style.display = "none";
                            }, 500);
                        }, 7000);
                    }
                } else {
                    document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
                    document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

                    clickedTab.classList.add("active-tab");
                    document.querySelector(activePaneID).classList.add("active-tab");
                }
            } else {
                templateModalContent.style.display = "block";
                templateModal.style.animation = "slideDown 1s forwards";
                document.body.classList.add('shake-animation');

                setTimeout(() => {
                    templateModal.style.animation = "slideUp 1.5s forwards";
                    document.body.classList.remove('shake-animation');

                    setTimeout(() => {
                        templateModalContent.style.display = "none";
                    }, 500);
                  }, 7000);
            } 
        } else {
            document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
            document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

            clickedTab.classList.add("active-tab");
            document.querySelector(activePaneID).classList.add("active-tab");
        }
    }

    function handleHelpBtn(){
        localStorage.setItem('tutorialDisabled', 'false');
    }
});