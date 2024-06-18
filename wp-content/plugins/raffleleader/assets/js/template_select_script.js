document.addEventListener("generalSettingsLoaded", ()=>{

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
                selectText = 'Select Pre-Designed Template';
                break;
        
            case 'pdTemplateTwo':
                selectText = 'Select Pre-Designed Template';
                break;
            
            case 'pdTemplateThree':
                selectText = 'Select Pre-Designed Template';
                break;
        
            case 'pdTemplateFour':
                selectText = 'Select Pre-Designed Template';
                break;

            case 'pdTemplateFive':
                selectText = 'Select Pre-Designed Template';
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
        } else {
            template.classList.add('chosen-template');
            document.querySelector("ul.rl-nav-tabs li.active-tab").classList.remove("active-tab");
            document.querySelector(".rl-tab-pane.active-tab").classList.remove("active-tab");

            setupTab.classList.add("active-tab");
            document.querySelector('#setup').classList.add("active-tab");
        }

        try{
            const currentElement = document.querySelector('.selected-raffleleader-section');

            currentElement.classList.remove('selected-raffleleader-section');
            currentElement.querySelector('.raffleleader-resize-handle').style.display = 'none';
            if(customizeBox.classList.contains('slide-right-to-left')){
                customizeBox.classList.toggle('slide-right-to-left');
            }
        } catch {}
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
                                        <div class="raffleleader-section" style="width: 500px; height: 337px; position: absolute; left: 0px; top: 0px;"><div data-type="imageDetails" class="raffleleader-image-section"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/alo.png" alt="Raffle Image" title="alo"></div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 46.2031px; top: 444px; width: 146px; height: 68px;"><div style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; color: rgb(255, 255, 255); font-size: 70px; font-family: Urbanist;">alo </h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 29.2031px; top: 378px; width: 272px; height: 66px;"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; color: rgb(255, 255, 255); font-weight: normal; font-size: 70px; font-family: Urbanist;">Win an</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 160.203px; top: 434.391px; width: 298.797px; height: 92px;"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-weight: normal; font-family: Urbanist; color: rgb(255, 255, 255); font-size: 70px;">Giftcard</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 29.1875px; top: 532.391px; width: 447px; height: 160px;"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0); justify-content: left; text-align: left; align-items: center; writing-mode: horizontal-tb; text-orientation: upright; border-width: 0px; border-style: solid; border-color: rgba(60, 67, 74, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; color: rgb(255, 255, 255); font-family: Nunito; font-size: 15px; font-weight: normal; justify-content: left; line-height: 20px;">Enter to win a $50 Giftcard for alo from Vera Co. which includes our new Rewards type giveaway. Rewards allow you to give away a coupon code, download, link or another instant reward to everyone who enters as opposed to giving away one big prize like in a traditional giveaway.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="25raffleID" style="width: 500px; height: 93px; position: absolute; left: 0px; top: 692.391px;"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 0px; border-style: solid; border-color: rgba(255, 255, 255, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="font-family: Urbanist; font-size: 20px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0); border-radius: 0px; border-width: 2px; border-style: solid; border-color: rgb(128, 128, 128);">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(255, 0, 114); color: rgb(255, 255, 255); border-radius: 0px; border-top: 0px solid rgb(255, 255, 255); border-left: 0px solid rgb(255, 255, 255); border-right: 0px solid rgb(128, 128, 128);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="background-color: rgb(0, 0, 0);">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content raffleleader-rules-and-terms" style="color: rgb(255, 255, 255);">Raffle Rules and Terms</a>
                                                <p>|</p>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com" style="color: rgb(255, 255, 255);">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'pdTemplateTwo':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px; background-color: rgb(104, 174, 37);">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">×</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="width: 499px; height: 433px; position: absolute; left: 1px; top: 12.3906px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-radius: 100px;"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/bonaroo.png" alt="Raffle Image" title="bonaroo" style="border-radius: 100px;"></div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 1px; top: 484.391px; width: 499px; height: 132px;"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-family: Orbitron; color: rgb(255, 255, 255); font-size: 40px; line-height: 45px;">WIN A TICKET TO BONNAROOO!!!!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 39px; top: 622.391px; width: 407px; height: 60px;"><div style="height: 100%; width: 100%; justify-content: left; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; font-size: 16px; line-height: 20px; font-family: &quot;Open Sans&quot;; font-weight: normal; letter-spacing: 0px;">It's time to party! Enter your email for a chance to win a free ticket to Bonaroo.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="25raffleID" style="width: 499px; height: 83px; position: absolute; left: 1px; top: 697.391px;"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0); border-width: 0px; border-style: solid; border-color: rgb(0, 0, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="background-color: rgba(0, 0, 0, 0); color: rgb(0, 0, 0); font-size: 18px; font-family: Orbitron; border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0);">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(0, 0, 0); border-radius: 10px;">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="background-color: rgb(104, 174, 37);">
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
                                        <div class="raffleleader-section" style="position: absolute; left: 48px; top: 0px; width: 392px; height: 151px;"><div style="height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 40px; font-weight: normal; line-height: 50px; color: rgb(255, 255, 255); font-family: Jura;">Win a piece from the new collection</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 485px; height: 420px; position: absolute; left: 8px; top: 151px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-radius: 100px;"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/collection.png" alt="Raffle Image" title="collection" style="border-radius: 100px;"></div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 48px; top: 612.391px; width: 425px; height: 80px;"><div style="height: 100%; width: 100%; justify-content: left; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; font-weight: normal; font-size: 14px; justify-content: left; line-height: 18px; color: rgb(255, 255, 255);">Enter your email for the chance to win any piece from our new collection, including this beautiful ring!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="25raffleID" style="width: 500px; height: 91.6094px; position: absolute; left: 0px; top: 699.391px;"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="color: rgb(255, 255, 255); background-color: rgb(0, 0, 0); border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255); font-size: 18px;">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(128, 128, 128) rgb(255, 255, 255) rgb(255, 255, 255); background-color: rgb(0, 0, 0);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="background-color: rgb(0, 0, 0);">
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
                                        <div class="raffleleader-section" style="position: absolute; left: 19px; top: 49.3906px; width: 467px; height: 106px;"><div style="height: 100%; width: 100%; justify-content: left; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; justify-content: left; color: rgb(255, 255, 255); font-size: 40px; line-height: 40px;">Win a ticket to the NFL game of your choice!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 36.2031px; top: 178.391px; width: 427px; height: 69px;"><div style="height: 100%; width: 100%; justify-content: left; background-color: rgba(255, 255, 255, 0);" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: left; font-weight: normal; font-size: 14px; justify-content: left; line-height: 18px; color: rgb(255, 255, 255); letter-spacing: 0px;">One lucky winner will win a ticket to the NFL game of their choosing. All you need to do is enter your email.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 427.609px; position: absolute; left: 0px; top: 372.391px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top-left-radius: 800px; border-top-right-radius: 5px; border-bottom-right-radius: 0px; border-width: 0px; border-style: solid; border-color: rgba(60, 67, 74, 0);"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/nfl.png" alt="Raffle Image" title="nfl" style="border-top-left-radius: 800px; border-top-right-radius: 5px; border-bottom-right-radius: 0px;"></div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="25raffleID" style="width: 500px; height: 108px; position: absolute; left: 0px; top: 264.391px;"><div data-type="entryDetails" class="raffleleader-entry-section" style="background-color: rgba(255, 255, 255, 0);">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="font-size: 20px; color: rgb(255, 255, 255); background-color: rgba(255, 255, 255, 0); border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255);">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="background-color: rgb(198, 42, 42); color: rgb(23, 23, 76);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                        <div class="raffleleader-footer-wrapper" style="background-color: rgb(7, 7, 45);">
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
                                        <div class="raffleleader-section" style="position: absolute; left: 18px; top: 21.3906px; width: 463px; height: 90px;"><div style="height: 100%; width: 100%; border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); border-radius: 100px;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-family: Roboto; font-size: 40px;">WIN A GOPRO!</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 407px; position: absolute; left: 0px; top: 129.391px;"><div data-type="imageDetails" class="raffleleader-image-section"><img src="https://raffleleader.s3.us-east-2.amazonaws.com/gopro.png" alt="Raffle Image" title="gopro"></div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 536.391px; width: 500px; height: 151px;"><div style="height: 100%; width: 100%; border-width: 3px 0px 0px; border-style: solid; border-color: rgb(60, 67, 74); border-top-left-radius: 50px; border-top-right-radius: 50px;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center; font-size: 16px; font-weight: normal; letter-spacing: 0px;">Win this giveaway and never miss a moment again.</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="25raffleID" style="width: 500px; height: 100px; position: absolute; left: 0px; top: 670.391px;"><div data-type="entryDetails" class="raffleleader-entry-section">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="" style="font-size: 20px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); border-radius: 50px;">
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit" style="border-radius: 50px; background-color: rgb(9, 154, 217);">
                                    →
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
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
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                        <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">&times;</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                        <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 86.7925px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                        <h2 style="white-space: pre-wrap;">Header</h2>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 86.7812px; width: 500px; height: 65.9691px;"><div style="height: 100%; width: 100%; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                                        <h2 style="white-space: pre-wrap; font-size: 20px;">Subheader</h2>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 300px; position: absolute; left: 0px; top: 152.734px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top: 1px solid rgb(60, 67, 74);">
                                        <p>Insert An Image Here</p>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 452.813px; width: 500px; height: 75.4255px;"><div style="height: 100%; width: 100%; justify-content: center; align-items: center; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                                        <h2 style="white-space: pre-wrap; font-size: 15px; font-weight: normal; letter-spacing: 0px;">Enter your body text here!</h2>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89.5938px; position: absolute; left: 0px; top: 528.234px;"><div data-type="entryDetails" class="raffleleader-entry-section">
                                        <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                            <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                            <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                                →
                                            </button>
                                        </form>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 90.9091px; position: absolute; left: 0px; top: 617.82px;"><div data-type="XFollowDetails" class="raffleleader-additional-entry-section" style="border-top: 1px solid rgb(60, 67, 74);">
                                        <div class="raffleleader-additional-entry-text-column">
                                            <h2>Follow us on X</h2>
                                            <p>for an extra entry!</p>
                                        </div>
                                        <div class="raffleleader-additional-entry-button-column">
                                            <button data-link="https://twitter.com/">+1</button>
                                        </div>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 91.2813px; position: absolute; left: 0px; top: 708.719px;"><div data-type="XRepostDetails" class="raffleleader-additional-entry-section" style="border-top: 1px solid rgb(60, 67, 74);">
                                        <div class="raffleleader-additional-entry-text-column">
                                            <h2>Repost us on X</h2>
                                            <p>for an extra entry!</p>
                                        </div>
                                        <div class="raffleleader-additional-entry-button-column">
                                            <button data-link="https://twitter.com/">+1</button>
                                        </div>
                                    </div>
                                    <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                                    <div class="raffleleader-footer-wrapper">
                                                        <div class="raffleleader-footer">
                                                            <a class="raffleleader-footer-content raffleleader-rules-and-terms" data-rules="">Raffle Rules and Terms</a>
                                                            <p>|</p>
                                                            <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                                        </div>
                                                    </div>
                                                </div>`;
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

            case 'instagramTemplate':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
                                            <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
                                            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">&times;</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
                                            <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 86.7925px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                <h2 style="white-space: pre-wrap;">Header</h2>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 86.7812px; width: 500px; height: 65.9691px;"><div style="height: 100%; width: 100%; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                                <h2 style="white-space: pre-wrap; font-size: 20px;">Subheader</h2>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 300px; position: absolute; left: 0px; top: 152.734px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top: 1px solid rgb(60, 67, 74);">
                                <p>Insert An Image Here</p>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 452.813px; width: 500px; height: 75.4255px;"><div style="height: 100%; width: 100%; justify-content: center; align-items: center; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                                <h2 style="white-space: pre-wrap; font-size: 15px; font-weight: normal; letter-spacing: 0px;">Enter your body text here!</h2>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89.5938px; position: absolute; left: 0px; top: 528.234px;"><div data-type="entryDetails" class="raffleleader-entry-section">
                                <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                    <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                                    <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                        →
                                    </button>
                                </form>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 90.617px; position: absolute; left: 0px; top: 617.812px;"><div data-type="instaFollowDetails" class="raffleleader-additional-entry-section" style="border-top: 1px solid rgb(60, 67, 74);">
                                <div class="raffleleader-additional-entry-text-column">
                                    <h2>Follow us on Instagram</h2>
                                    <p>for an extra entry!</p>
                                </div>
                                <div class="raffleleader-additional-entry-button-column">
                                    <button data-link="https://instagram.com/">+1</button>
                                </div>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 91.5781px; position: absolute; left: 0px; top: 708.422px;"><div data-type="instaLikeDetails" class="raffleleader-additional-entry-section" style="border-top: 1px solid rgb(60, 67, 74);">
                                <div class="raffleleader-additional-entry-text-column">
                                    <h2>Like us on Instagram</h2>
                                    <p>for an extra entry!</p>
                                </div>
                                <div class="raffleleader-additional-entry-button-column">
                                    <button data-link="https://instagram.com/">+1</button>
                                </div>
                                </div>
                                <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                            <div class="raffleleader-footer-wrapper">
                                                <div class="raffleleader-footer">
                                                    <a class="raffleleader-footer-content raffleleader-rules-and-terms" data-rules="">Raffle Rules and Terms</a>
                                                    <p>|</p>
                                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                                </div>
                                            </div>
                                        </div>`;
                window.zoomScale = 1;
                document.dispatchEvent(loadPreviewEvent);
                break;

        case 'tiktokTemplate':
            preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
            <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">&times;</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
            <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 86.7925px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap;">Header</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 86.7812px; width: 500px; height: 65.9691px;"><div style="height: 100%; width: 100%; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap; font-size: 20px;">Subheader</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 300px; position: absolute; left: 0px; top: 152.812px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top: 1px solid rgb(60, 67, 74);">
                <p>Insert An Image Here</p>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 452.813px; width: 500px; height: 75.4255px;"><div style="height: 100%; width: 100%; justify-content: center; align-items: center; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap; font-size: 15px; font-weight: normal; letter-spacing: 0px;">Enter your body text here!</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89.5938px; position: absolute; left: 0px; top: 528.234px;"><div data-type="entryDetails" class="raffleleader-entry-section">
                <form class="raffleleader-email-submit" action="/submit-email" method="post">
                    <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                    <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                        →
                    </button>
                </form>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 91.5781px; position: absolute; left: 0px; top: 708.422px;"><div data-type="tiktokLikeDetails" class="raffleleader-additional-entry-section" style="border-top: 1px solid rgb(60, 67, 74);">
                <div class="raffleleader-additional-entry-text-column">
                <h2>Like us on TikTok</h2>
                <p>for an extra entry!</p>
                </div>
                <div class="raffleleader-additional-entry-button-column">
                <button data-link="https://tiktok.com/">+1</button>
                </div>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="${raffleID}raffleID" style="width: 500px; height: 90.6094px; position: absolute; left: 0px; top: 617.812px;"><div data-type="tiktokFollowDetails" class="raffleleader-additional-entry-section" style="border-top: 1px solid rgb(60, 67, 74);">
                <div class="raffleleader-additional-entry-text-column">
                <h2>Follow us on TikTok</h2>
                <p>for an extra entry!</p>
                </div>
                <div class="raffleleader-additional-entry-button-column">
                <button data-link="https://tiktok.com/">+1</button>
                </div>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                            <div class="raffleleader-footer-wrapper">
                                <div class="raffleleader-footer">
                                    <a class="raffleleader-footer-content raffleleader-rules-and-terms" data-rules="">Raffle Rules and Terms</a>
                                    <p>|</p>
                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                </div>
                            </div>
                        </div>`;
            window.zoomScale = 1;
            document.dispatchEvent(loadPreviewEvent);
            break;

        case 'plaunchTemplate':
            preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
            <div id="dropzone" class="raffleleader-dropzone" style="height: 800px;">
            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">&times;</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
            <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 86.7925px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap;">Header</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 86.7812px; width: 500px; height: 65.9691px;"><div style="height: 100%; width: 100%; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap; font-size: 20px;">Subheader</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 300px; position: absolute; left: 0px; top: 152.734px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top: 1px solid rgb(60, 67, 74);">
                <p>Insert An Image Here</p>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 452.813px; width: 500px; height: 157.156px;"><div style="height: 100%; width: 100%; justify-content: center; align-items: center; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap; font-size: 20px; font-weight: normal; letter-spacing: 0px;">Enter your body text here!</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89.5938px; position: absolute; left: 0px; top: 609.969px;"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-bottom: 1px solid rgb(60, 67, 74);">
                <form class="raffleleader-email-submit" action="/submit-email" method="post">
                    <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                    <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                        →
                    </button>
                </form>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 700px; width: 172.281px; height: 99.9844px;"><div style="height: 100%; width: 100%; border-right: 1px solid rgb(60, 67, 74);" data-type="counterDetails" class="raffleleader-counter-section">
                <h2>00</h2>
                <p></p>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 172.294px; top: 699.984px; width: 165.464px; height: 100px;"><div style="height: 100%; width: 100%; border-right: 1px solid rgb(60, 67, 74);" data-type="counterDetails" class="raffleleader-counter-section">
                <h2>00</h2>
                <p></p>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 337.734px; top: 699.969px; width: 162.281px; height: 100px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="raffleleader-counter-section">
                <h2>00</h2>
                <p></p>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                            <div class="raffleleader-footer-wrapper">
                                <div class="raffleleader-footer">
                                    <a class="raffleleader-footer-content raffleleader-rules-and-terms" data-rules="">Raffle Rules and Terms</a>
                                    <p>|</p>
                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.s3.us-east-2.amazonaws.com/footer_text_logo.png"> For Yourself!</a>
                                </div>
                            </div>
                        </div>`;
            window.zoomScale = 1;
            document.dispatchEvent(loadPreviewEvent);
            break;

        case 'referTemplate':
            preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
            <div id="dropzone" class="raffleleader-dropzone" style="height: 700px;">
            <div style="display: none;" class="raffleleader-rules-and-terms-preview">
                                                <button class="rules-and-terms-close-button">&times;</button>
                                                <h2>Rules and Terms</h2>
                                                <p class="raffleleader-rules-text"></p>
                                            </div>
            <div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 86.7925px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap;">Header</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 86.7812px; width: 500px; height: 65.9691px;"><div style="height: 100%; width: 100%; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap; font-size: 20px;">Subheader</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 300px; position: absolute; left: 0px; top: 152.812px;"><div data-type="imageDetails" class="raffleleader-image-section" style="border-top: 1px solid rgb(60, 67, 74);">
                <p>Insert An Image Here</p>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 452.813px; width: 500px; height: 75.4255px;"><div style="height: 100%; width: 100%; justify-content: center; align-items: center; border-top: 1px solid rgb(60, 67, 74);" data-type="textDetails" class="raffleleader-text-section">
                <h2 style="white-space: pre-wrap; font-size: 15px; font-weight: normal; letter-spacing: 0px;">Enter your body text here!</h2>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="${raffleID}raffleID" style="width: 500px; height: 89.5938px; position: absolute; left: 0px; top: 528.234px;"><div data-type="entryDetails" class="raffleleader-entry-section">
                <form class="raffleleader-email-submit" action="/submit-email" method="post">
                    <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required="">
                    <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                        →
                    </button>
                </form>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 82.1875px; position: absolute; left: 0px; top: 617.812px; border-top: 1px solid rgb(60, 67, 74);"><div data-type="referDetails" class="raffleleader-additional-entry-section">
                <div class="raffleleader-additional-entry-text-column">
                <h2>Refer a friend</h2>
                <p>for an extra entry!</p>
                </div>
                <div class="raffleleader-additional-entry-button-column">
                <button data-link="https://instagram.com/">+1</button>
                </div>
                </div>
                <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                            <div class="raffleleader-footer-wrapper">
                                <div class="raffleleader-footer">
                                    <a class="raffleleader-footer-content raffleleader-rules-and-terms" data-rules="">Raffle Rules and Terms</a>
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