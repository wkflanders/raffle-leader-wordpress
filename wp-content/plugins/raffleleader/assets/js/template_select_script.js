document.addEventListener("generalSettingsLoaded", ()=>{

    const tutorialPageTwo = new CustomEvent('tutorialPageTwo');

    const urlParams = new URLSearchParams(window.location.search);
    const raffleID = urlParams.get('raffle_id');

    const layoutHeightForm = document.getElementById('layoutHeightForm');
    const layoutWidthForm = document.getElementById('layoutWidthForm');

    const raffleBackgroundHexBox = document.getElementById('raffleBackgroundColorClick');
    const raffleBackgroundForm = document.getElementById('raffleBackgroundColorForm');

    const footerColorHexBox = document.getElementById('footerFontColorClick');
    const footerColorForm = document.getElementById('footerFontColorForm');

    const footerBackgroundHexBox = document.getElementById('footerBackgroundColorClick');
    const footerBackgroundForm = document.getElementById('footerBackgroundColorForm');

    const customizeBox = document.getElementById('settingsWrapper');

    const loadPreviewEvent = new CustomEvent('previewLoaded');

    const templates = document.querySelectorAll(".rl-box");

    const slideBtn = document.querySelectorAll('.scroll-grid-btn');

    let tutorialPageOne = false;
    document.addEventListener('tutorialPageOne', ()=>{
        tutorialPageOne = true;
    });

    slideBtn.forEach((slideBtn)=>{
        slideBtn.addEventListener('click', slideTemplateCarousel);
    });

    templates.forEach((template)=>{
        template.addEventListener('mouseover', templateHover);
        template.addEventListener('mouseout', stopTemplateHover);
        template.addEventListener('click', selectTemplate);
    })

    function templateHover(event){
        const template = event.currentTarget;
        let selectText = 'Select';

        switch(template.id){
            case 'blankTemplate':
                selectText = 'Select Blank Template';
                break;
            
            case 'twitterTemplate':
                selectText = 'Select Twitter Template';
                break;
        
            case 'instagramTemplate':
                selectText = 'Select Instagram Template';
                break;
            
            case 'tiktokTemplate':
                selectText = 'Select TikTok Template';
                break;
        
            case 'plaunchTemplate':
                selectText = 'Select Pre-Launch Template';
                break;

            case 'referTemplate':
                selectText = 'Select Refer-A-Friend Template';
                break;

            case 'pdTemplateOne':
                selectText = 'Select User Generated Template';
                break;
        
            case 'pdTemplateTwo':
                selectText = 'Select User Generated Template';
                break;
            
            case 'pdTemplateThree':
                selectText = 'Select User Generated Template';
                break;
        
            case 'pdTemplateFour':
                selectText = 'Select User Generated Template';
                break;

            case 'pdTemplateFive':
                selectText = 'Select User Generated Template';
                break;
        } 
        template.style.setProperty('--select-text', `'${selectText}'`);
    }

    function stopTemplateHover(event){
        const template = event.target;

        template.style.setProperty('--select-text', 'Select');
    }

    function slideTemplateCarousel(event){
        const scrollAmount = 380;

        const selectedBtn = event.currentTarget;
        const carousel = selectedBtn.parentNode.querySelector('.rl-template-carousel');

        if(selectedBtn.classList.contains('scroll-grid-btn-left')){
            carousel.scrollLeft -= scrollAmount;
        } else {
            carousel.scrollLeft += scrollAmount;

        }
    }

    function selectTemplate(event){
        const template = event.currentTarget;
        const templateType = template.id;
        const currentTemplate = document.querySelector('.chosen-template');
        const setupTab = document.querySelector('.setup-tab');

        fetch(raffleleader_template_select_object.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'action': 'saveTemplate',
                'raffle_id': raffleID,
                'template_id': templateType,
                'security': raffleleader_template_select_object.security,
            })
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
        
        injectTemplateHTML(templateType);

        if(currentTemplate){
            currentTemplate.classList.remove('chosen-template');
            template.classList.add('chosen-template');

            document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
            document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

            setupTab.classList.add("active-tab");
            document.querySelector('#setup').classList.add("active-tab");

            if(customizeBox.classList.contains('slide-right-to-left')){
                customizeBox.classList.toggle('slide-right-to-left');
            }
            
        } else {
            template.classList.add('chosen-template');
            document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
            document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

            setupTab.classList.add("active-tab");
            document.querySelector('#setup').classList.add("active-tab");

            if((tutorialPageOne) && (localStorage.getItem('tutorialDisabled') != 'true')){
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
        }
    }

    function injectTemplateHTML(templateType){
        const preview = document.getElementById('preview');

        switch(templateType) {
            case 'pdTemplateOne':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px; background-color: rgb(0, 0, 0);">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="width: 500px; height: 309px; position: absolute; left: 0px; top: 0px; z-index: 10;" data-section-id="section-3dyy"><div data-type="imageDetails" class="raffleleader-image-section"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/alo.png" alt="Raffle Image" title="alo"></div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 30px; top: 340px; z-index: 11; width: 233px; height: 96px;" data-section-id="section-i063"><div style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-weight: normal; font-family: Urbanist; color: rgb(255, 255, 255); font-size: 70px; line-height: 30px;">Win an</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 30px; top: 417px; z-index: 10; width: 139px; height: 86px;" data-section-id="section-mkf4"><div style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-weight: bold; font-family: Urbanist; color: rgb(255, 255, 255); font-size: 70px; line-height: 30px;">alo</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 160px; top: 417px; z-index: 10; width: 292px; height: 86px;" data-section-id="section-e9nd"><div style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-weight: normal; font-family: Urbanist; color: rgb(255, 255, 255); font-size: 70px; line-height: 30px;">Giftcard!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 37px; top: 494px; z-index: 10; width: 426px; height: 105px;" data-section-id="section-103t"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0); justify-content: left; align-items: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; color: rgb(255, 255, 255); font-weight: normal; justify-content: left; font-size: 14px; line-height: 20px; letter-spacing: 0px;">If you’ve ever thought to yourself “dang, I wish I had $50 to shop at Alo with”, here’s your chance. All you need to do is enter your email and refer a friend. </h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 100px; position: absolute; left: 0px; top: 599px; z-index: 10;" data-section-id="section-0gag"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 0px; border-style: solid; border-color: rgb(255, 255, 255);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="background-color: rgba(255, 255, 255, 0); color: rgb(255, 255, 255); border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255); border-top-left-radius: 0px; border-bottom-left-radius: 0px; font-size: 20px; font-family: Urbanist;">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(254, 1, 138); border-radius: 0px;">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 90px; position: absolute; left: 0px; top: 710px; z-index: 10;" data-section-id="section-dd7y"><div data-type="referDetails" class="raffleleader-additional-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 1px 0px 0px; border-style: solid; border-color: rgb(255, 255, 255);">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2 style="color: rgb(255, 255, 255); font-family: Urbanist; font-size: 23px; font-weight: normal;">Refer-a-friend</h2>
                                <p style="font-weight: bold;"></p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column raffleleader-additional-entry-button-column-refer">
                                <button style="background-color: rgb(254, 1, 138);">Copy Link</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="border-top-color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms" style="color: rgb(255, 255, 255);">Raffle Rules and Terms</a>
                                                <p style="color: rgb(255, 255, 255);">|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com" style="color: rgb(255, 255, 255);">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'pdTemplateTwo':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 850px; background-color: rgb(104, 174, 37);">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 419px; z-index: 1; width: 500px; height: 67px;"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-family: Orbitron; color: rgb(255, 255, 255); font-size: 52px;">TO</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 347px; position: absolute; left: 0px; top: 0px; z-index: 10;" data-section-id="ioc5"><div data-type="imageDetails" class="raffleleader-image-section"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/bonaroo.png" alt="Raffle Image" title="bonaroo"></div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 347px; z-index: 10; width: 500px; height: 110px;" data-section-id="n7au"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-family: Orbitron; color: rgb(255, 255, 255); font-size: 52px;">WIN A TICKET</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 451px; z-index: 1; width: 500px; height: 114px;" data-section-id="7d2o"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-family: Orbitron; color: rgb(255, 255, 255); font-size: 52px;">BONNAROOO!!!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 26px; top: 537px; z-index: 10; width: 447px; height: 73px;" data-section-id="qsf6"><div style="height: 100%; width: 100%; justify-content: left; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 16px; letter-spacing: 0px; font-family: &quot;Open Sans&quot;; line-height: 14px; font-weight: normal;">It's time to hear your favorites LIVE! Enter your email for a chance to win a free ticket to Bonnaroo.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 93px; position: absolute; left: 0px; top: 598.328px; z-index: 10;" data-section-id="5kyn"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 0px; border-style: solid; border-color: rgb(0, 0, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="background-color: rgba(44, 51, 56, 0); color: rgb(0, 0, 0); border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); font-size: 20px; font-family: Orbitron;">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="color: rgb(255, 255, 255); background-color: rgb(0, 0, 0); border-width: 0px; border-style: solid; border-color: rgb(0, 0, 0);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 703px; z-index: 10;" data-section-id="jrcv"><div data-type="instaFollowDetails" class="raffleleader-additional-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 1px 0px 0px; border-style: solid; border-color: rgb(0, 0, 0);">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2 style="color: rgb(255, 255, 255); font-family: Orbitron; font-size: 16px;">Follow us on Instagram</h2>
                                <p style="color: rgb(0, 0, 0); font-family: Orbitron;">for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://instagram.com/" style="background-color: rgb(0, 0, 0);">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 778px; z-index: 10;" data-section-id="fo1u"><div data-type="tiktokFollowDetails" class="raffleleader-additional-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 1px 0px 0px; border-style: solid; border-color: rgb(0, 0, 0);">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2 style="font-family: Orbitron; font-size: 16px; color: rgb(255, 255, 255);">Follow us on TikTok</h2>
                                <p style="font-family: Orbitron; color: rgb(0, 0, 0);">for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://tiktok.com/" style="background-color: rgb(0, 0, 0);">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="background-color: rgb(104, 174, 37); border-top-color: rgb(0, 0, 0);">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms" style="color: rgb(0, 0, 0);">Raffle Rules and Terms</a>
                                                <p style="color: rgb(0, 0, 0);">|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com" style="color: rgb(0, 0, 0);">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'pdTemplateThree':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px; background-color: rgb(0, 0, 0);">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 36px; top: 23px; z-index: 10; width: 423px; height: 117px;" data-section-id="hszn"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 40px; line-height: 40px; font-weight: normal; font-family: Jura; color: rgb(255, 255, 255);">Win a piece from the new collection</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 489px; height: 396px; position: absolute; left: 5px; top: 170px; z-index: 10;" data-section-id="dapc"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top: 0px solid rgb(60, 67, 74); border-left: 0px solid rgb(60, 67, 74); border-radius: 80px;"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/collection.png" alt="Raffle Image" title="collection" style="border-radius: 80px;"></div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 31px; top: 597px; z-index: 10; width: 428px; height: 78px;" data-section-id="ae9l"><div style="height: 100%; width: 100%; justify-content: left; background-color: rgba(255, 255, 255, 0); border-width: 0px; border-style: solid; border-color: rgb(255, 255, 255);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; font-weight: normal; font-size: 16px; line-height: 20px; justify-content: left; letter-spacing: 0px; color: rgb(255, 255, 255);">Enter your email for the chance to win any piece from our new collection, including this beautiful ring!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89px; position: absolute; left: 0px; top: 688px; z-index: 10;" data-section-id="3g4d"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255); font-size: 20px;">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(0, 0, 0); border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="border-top-color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms" style="color: rgb(255, 255, 255);">Raffle Rules and Terms</a>
                                                <p style="color: rgb(255, 255, 255);">|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com" style="color: rgb(255, 255, 255);">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'pdTemplateFour':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px; background-color: rgb(7, 7, 45);">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 44px; top: 0px; z-index: 10; width: 417px; height: 272px;" data-section-id="tx0a"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0); justify-content: left;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; font-size: 52px; line-height: 60px; color: rgb(255, 255, 255); justify-content: left;">Win a ticket to the NFL game of your choice!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 44px; top: 235px; z-index: 10; width: 405px; height: 81px;" data-section-id="3wjt"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0); justify-content: left;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; font-weight: normal; font-size: 14px; line-height: 16px; letter-spacing: 0px; color: rgb(255, 255, 255); justify-content: left;">One lucky winner will win a ticket to the NFL game of their choosing. All you need to do is enter your email.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 98px; position: absolute; left: 0px; top: 316px; z-index: 10;" data-section-id="mi1h"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="background-color: rgba(44, 51, 56, 0); color: rgb(255, 255, 255); border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255); font-size: 20px;">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(198, 42, 42); color: rgb(23, 23, 76);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 370px; position: absolute; left: 0px; top: 430px; z-index: 10;" data-section-id="dqi0"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top-left-radius: 800px;"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/nfl.png" alt="Raffle Image" title="nfl" style="border-top-left-radius: 800px;"></div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="background-color: rgb(7, 7, 45); border-top-color: rgb(255, 255, 255);">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms" style="color: rgb(255, 255, 255);">Raffle Rules and Terms</a>
                                                <p style="color: rgb(255, 255, 255);">|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com" style="color: rgb(255, 255, 255);">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'pdTemplateFive':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 598px; z-index: 15; width: 500px; height: 202px;" data-section-id="u9ae"><div style="height: 100%; width: 100%; border-top-left-radius: 50px; border-top-right-radius: 50px; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;"></h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 94px; position: absolute; left: 0px; top: 698px; z-index: 16;" data-section-id="fxly"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="border-radius: 100px; font-size: 20px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0);">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(9, 154, 217); border-radius: 100px;">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 47px; top: 624px; z-index: 17; width: 409px; height: 67px;" data-section-id="974o"><div style="height: 100%; width: 100%; justify-content: center; border-top: 0px solid rgb(60, 67, 74); border-top-left-radius: 0px; border-top-right-radius: 0px; text-align: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; font-weight: normal; justify-content: left; font-size: 14px; letter-spacing: 0px; line-height: 18px;">Life is full of beautiful moments. Enter to win this giveaway and never miss one again. Type in your email below to enter.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 661px; position: absolute; left: 0px; top: 0px; z-index: 1;" data-section-id="93yp"><div data-type="imageDetails" class="raffleleader-image-section"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/gopro.png" alt="Raffle Image" title="gopro"></div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 18px; top: 15px; z-index: 10; width: 462px; height: 80px;" data-section-id="csqc"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0); border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); border-radius: 100px;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-family: Roboto; font-size: 32px;">WIN A NEW GOPRO!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'blankTemplate':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 600px">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">&times;</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        </div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'twitterTemplate':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; z-index: 10; width: 500px; height: 95px;" data-section-id="ezec"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;">Header</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 95px; z-index: 10; width: 500px; height: 75px;" data-section-id="4bsl"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 22px;">Subheader</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 294px; position: absolute; left: 0px; top: 170px; z-index: 10;" data-section-id="ckeo"><div data-type="imageDetails" class="raffleleader-image-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 464px; z-index: 10; width: 500px; height: 81px;" data-section-id="2kz0"><div style="height: 100%; width: 100%; justify-content: left; text-align: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 14px; letter-spacing: 0px; line-height: 20px; font-weight: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero sagittis, pretium ipsum ut, rhoncus nisi. Sed mollis arcuousi.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 87px; position: absolute; left: 0px; top: 545px; z-index: 10;" data-section-id="pc7y"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89px; position: absolute; left: 0px; top: 632px; z-index: 10;" data-section-id="ba47"><div data-type="XFollowDetails" class="raffleleader-additional-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Follow us on X/Twitter</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://twitter.com/">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 79px; position: absolute; left: 0px; top: 721px; z-index: 10;" data-section-id="nghr"><div data-type="XRepostDetails" class="raffleleader-additional-entry-section">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Give us a repost</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://twitter.com/">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'instagramTemplate':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; z-index: 10; width: 500px; height: 95px;" data-section-id="qlfe"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;">Header</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 95px; z-index: 10; width: 500px; height: 75px;" data-section-id="rf66"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 22px;">Subheader</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 294px; position: absolute; left: 0px; top: 170px; z-index: 10;" data-section-id="7t0f"><div data-type="imageDetails" class="raffleleader-image-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 464px; z-index: 10; width: 500px; height: 81px;" data-section-id="qios"><div style="height: 100%; width: 100%; justify-content: left; text-align: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 14px; letter-spacing: 0px; line-height: 20px; font-weight: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero sagittis, pretium ipsum ut, rhoncus nisi. Sed mollis arcuousi.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 87px; position: absolute; left: 0px; top: 545px; z-index: 10;" data-section-id="er9y"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 81px; position: absolute; left: 0px; top: 632px; z-index: 10;" data-section-id="wyug"><div data-type="instaFollowDetails" class="raffleleader-additional-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Follow us on Instagram</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://instagram.com/">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 87px; position: absolute; left: 0px; top: 713px; z-index: 10;" data-section-id="4yc6"><div data-type="instaLikeDetails" class="raffleleader-additional-entry-section">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Like us on Instagram</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://instagram.com/">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

        case 'tiktokTemplate':
            preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; z-index: 10; width: 500px; height: 95px;" data-section-id="ibao"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;">Header</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 95px; z-index: 10; width: 500px; height: 75px;" data-section-id="dy5v"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 22px;">Subheader</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 294px; position: absolute; left: 0px; top: 170px; z-index: 10;" data-section-id="zvgn"><div data-type="imageDetails" class="raffleleader-image-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 464px; z-index: 10; width: 500px; height: 81px;" data-section-id="o2y5"><div style="height: 100%; width: 100%; justify-content: left; text-align: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 14px; letter-spacing: 0px; line-height: 20px; font-weight: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero sagittis, pretium ipsum ut, rhoncus nisi. Sed mollis arcuousi.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 87px; position: absolute; left: 0px; top: 545px; z-index: 10;" data-section-id="n6s8"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 82px; position: absolute; left: 0px; top: 632px; z-index: 10;" data-section-id="8xlo"><div data-type="tiktokFollowDetails" class="raffleleader-additional-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Follow us on TikTok</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://tiktok.com/">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 86px; position: absolute; left: 0px; top: 714px; z-index: 10;" data-section-id="phdo"><div data-type="tiktokLikeDetails" class="raffleleader-additional-entry-section">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Like one of our videos</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column">
                                <button data-link="https://tiktok.com/">+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
            window.zoomScale = 1;
            document.dispatchEvent(loadPreviewEvent);
            break;

        case 'plaunchTemplate':
            preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; z-index: 10; width: 500px; height: 95px;" data-section-id="kgvb"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;">Header</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 95px; z-index: 10; width: 500px; height: 75px;" data-section-id="com5"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 22px;">Subheader</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 326px; position: absolute; left: 0px; top: 170px; z-index: 10;" data-section-id="qr7w"><div data-type="imageDetails" class="raffleleader-image-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 496px; z-index: 10; width: 500px; height: 182px;" data-section-id="chca"><div style="height: 100%; width: 100%; justify-content: left; text-align: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 14px; letter-spacing: 0px; line-height: 23px; font-weight: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero sagittis, pretium ipsum ut, rhoncus nisi. Sed mollis arcuousi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero sagittis, pretium ipsum ut, rhoncus nisi. Sed mollis arcuousi.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89px; position: absolute; left: 0px; top: 678px; z-index: 10;" data-section-id="a10f"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-bottom: 0px solid rgb(60, 67, 74);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
            window.zoomScale = 1;
            document.dispatchEvent(loadPreviewEvent);
            break;

        case 'referTemplate':
            preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 750px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; z-index: 10; width: 500px; height: 95px;" data-section-id="8l1q"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;">Header</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 95px; z-index: 10; width: 500px; height: 75px;" data-section-id="mw0f"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 22px;">Subheader</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="width: 500px; height: 294px; position: absolute; left: 0px; top: 170px; z-index: 10;" data-section-id="w528"><div data-type="imageDetails" class="raffleleader-image-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 464px; z-index: 10; width: 500px; height: 91px;" data-section-id="tpaz"><div style="height: 100%; width: 100%; justify-content: left; text-align: center;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 14px; letter-spacing: 0px; line-height: 20px; font-weight: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero sagittis, pretium ipsum ut, rhoncus nisi. Sed mollis arcuousi.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 94px; position: absolute; left: 0px; top: 555px; z-index: 10;" data-section-id="47kf"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 101px; position: absolute; left: 0px; top: 649px; z-index: 10;" data-section-id="ipzb"><div data-type="referDetails" class="raffleleader-additional-entry-section">
                            <div class="raffleleader-additional-entry-text-column">
                                <h2>Refer a friend</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="raffleleader-additional-entry-button-column raffleleader-additional-entry-button-column-refer">
                                <button style="background-color: rgb(21, 1, 254);">Copy Link</button>
                            </div>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
            window.zoomScale = 1;
            document.dispatchEvent(loadPreviewEvent);
            break;
        }

        const dropzone = document.getElementById('dropzone');
        const newPreview = document.getElementById('preview');

        const footerWrapper = document.querySelector('.raffleleader-footer-wrapper');
        const footerText = document.querySelector('.raffleleader-rules-and-terms')

        layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
        layoutWidthForm.value = getComputedStyle(newPreview).getPropertyValue('width').replace(/^"|"$/g, '');

        const raffleBackgroundColorRGB = window.getComputedStyle(newPreview).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const raffleBackgroundColorHex = rgbToHex(raffleBackgroundColorRGB);
        raffleBackgroundForm.value = raffleBackgroundColorHex;
        raffleBackgroundHexBox.style.backgroundColor = raffleBackgroundColorHex;

        const footerColorRGB = window.getComputedStyle(footerText).getPropertyValue('color').replace(/^"|"$/g, '');
        const footerColorHex = rgbToHex(footerColorRGB);
        footerColorForm.value = footerColorHex;
        footerColorHexBox.style.backgroundColor = footerColorHex;

        const footerBackgroundColorRGB = window.getComputedStyle(footerWrapper).getPropertyValue('background-color').replace(/^"|"$/g, '');
        const footerBackgroundColorHex = rgbToHex(footerBackgroundColorRGB);
        footerBackgroundForm.value = footerBackgroundColorHex;
        footerBackgroundHexBox.style.backgroundColor = footerBackgroundColorHex;    }
});