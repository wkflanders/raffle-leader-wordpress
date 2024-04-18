document.addEventListener("DOMContentLoaded", () => {
    
    const templateModal = document.getElementById("templateModal");
    const templateModalContent = templateModal.querySelector(".template-modal-content");

    const helpBtn = document.querySelector('.help');
    helpBtn.addEventListener('click', handleHelpBtn);

    const tutorialPageTwo = new CustomEvent('tutorialPageTwo');

    let previewLoaded = false;
    document.addEventListener('previewLoaded', ()=>{
        previewLoaded = true;
    });

    let tutorialPageOne = false;
    document.addEventListener('tutorialPageOne', ()=>{
        tutorialPageOne = true;
        console.log('page one fired');
    })

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
                document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
                document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

                clickedTab.classList.add("active-tab");
                document.querySelector(activePaneID).classList.add("active-tab");

                if((tutorialPageOne) && (activePaneID === '#setup') && (localStorage.getItem('tutorialDisabled') != 'true')){
                    const intro = introJs();
                    intro.setOptions({
                        steps:[
                            {
                                element: document.querySelector('.raffle-layout'),
                                intro: 'Drag and drop sections to add them to your raffle.',
                                position: 'right',
                            },
                            {
                                element: document.querySelector('.raffleleader-dropzone'),
                                intro: 'Click on sections within the preview to reposition and edit them.',
                                position: 'right',
                            },
                        ],
                        showBullets: false,
                        exitOnOverlayClick: false,
                        disableInteraction: false,
                        scrollToElement: false,
                    });
        
                    intro.start();
                    tutorialPageOne = false;
                    document.dispatchEvent(tutorialPageTwo);
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
                  }, 5000);
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