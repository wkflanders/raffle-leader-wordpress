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
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
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
                                                            <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
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
                                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
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
                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
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
                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
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
                                    <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
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