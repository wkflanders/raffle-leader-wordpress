document.addEventListener("DOMContentLoaded", ()=>{

//     const urlParams = new URLSearchParams(window.location.search);
//     const raffleID = urlParams.get('raffle_id');

    const loadPreviewEvent = new CustomEvent('previewLoaded');

    const templates = document.querySelectorAll(".rl-box");

    const selectBtns = document.querySelectorAll(".select-template");
    
    templates.forEach((template)=>{
        template.addEventListener("mouseover", hoverTemplate);
        template.addEventListener("mouseout", stopHoverTemplate);
    });

    selectBtns.forEach((selectBtn)=>{
        selectBtn.addEventListener('click', selectTemplate);
    })

    function hoverTemplate(event){
        event.stopPropagation();

        const templateTarget = event.currentTarget;
        try {
            const templateActionTarget = templateTarget.querySelector("div.rl-box-action");
            const blurMask = templateTarget.querySelector('.rl-box-action-blur');
            
            templateActionTarget.style.display = "flex";
            blurMask.style.display = "flex";
        } catch (error) {}
        
    }

    function stopHoverTemplate(event){
        event.stopPropagation();

        const templateTarget = event.currentTarget;
        try{
            const templateActionTarget = templateTarget.querySelector("div.rl-box-action");
            const blurMask = templateTarget.querySelector('.rl-box-action-blur');

            templateActionTarget.style.display = "none";
            blurMask.style.display = "none";
        } catch (error) {}
        
    }

    function selectTemplate(event){
        const selectedBtn = event.target;
        const templateType = selectedBtn.id;
        const templateBox = selectedBtn.parentNode.parentNode.parentNode;
        const currentTemplate = document.querySelector('.chosen-template');

        injectTemplateHTML(templateType);

        if(currentTemplate){
            currentTemplate.classList.remove('chosen-template');
            templateBox.classList.add('chosen-template');
        } else {
            templateBox.classList.add('chosen-template');
        }
    }

    function injectTemplateHTML(templateType){
        const preview = document.getElementById('preview');

        switch(templateType) {
            case 'blankTemplate':
                preview.outerHTML = `<div id="preview" class="preview-box preview-reset" style="width: 500px">
                                        <div id="dropzone" class="dropzone" style="height: 600px"></div>
                                        <div class="footer-wrapper">
                                            <div class="footer">
                                                <a class="footer-content">Raffle Rules and Terms</a>
                                                <a class="footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="footer-text-logo" src="http://raffleleader-demo.local/wp-content/plugins/raffleleader/ ../../assets/images/footer_text_logo.svg"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                document.dispatchEvent(loadPreviewEvent);
            break;
            case 'twitterTemplate':
                preview.outerHTML = `<div id="preview" class="preview-box preview-reset" style="width: 500px; transform: scale(1.0);">
                                        <div id="dropzone" class="dropzone" style="height: 1000px;"><div class="section" style="position: absolute; left: 0px; top: 932.972px; z-index: 24; width: 166px; height: 67.0156px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="counter-section">
                                            <h2 style="font-size: 40px;">00</h2>
                                            <p></p>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 0px; top: 882.542px; z-index: 56; width: 166.241px; height: 50.4219px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 20px;">Start</h2>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 165.994px; top: 882.542px; z-index: 12; width: 167.703px; height: 50.4376px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 20px;">Your Entries</h2>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 331px; top: 882.542px; z-index: 58; width: 169.063px; height: 50.4375px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 20px;">End</h2>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" id="entry47" style="width: 500px; height: 100px; position: absolute; left: 0px; top: 557.571px; z-index: 52;"><div data-type="entryDetails" class="entry-section" style="border-top: 1px solid rgb(0, 0, 0);">
                                            <form action="/submit-email" method="post">
                                                <input type="email" name="email" placeholder="email...">
                                                <button type="submit">→</button>
                                            </form>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 165.994px; top: 932.972px; z-index: 14; width: 167.687px; height: 66.9999px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="counter-section">
                                            <h2 style="font-size: 40px;">00</h2>
                                            <p></p>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 331px; top: 932.969px; z-index: 59; width: 169.162px; height: 67px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="counter-section">
                                            <h2 style="font-size: 40px;">00</h2>
                                            <p></p>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 0px; top: 0px; z-index: 31; width: 500px; height: 76.4151px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="text-section">
                                            <h2 style="white-space: pre-wrap;">Header</h2>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 0px; top: 76.4063px; z-index: 32; width: 500px; height: 59.434px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 25px;">Subheader</h2>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="width: 500px; height: 336.075px; position: absolute; left: 0px; top: 135.891px; z-index: 11;"><div data-type="imageDetails" class="image-section">
                                            <p>Insert An Image Here</p>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" data-entry="entry47" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 657.571px; z-index: 53;"><div data-type="XFollowDetails" class="additional-entry-section">
                                            <div class="additional-entry-text-column">
                                                <h2>Follow us on X/Twitter</h2>
                                                <p>for an extra entry!</p>
                                            </div>
                                            <div class="additional-entry-button-column">
                                                <button>+1</button>
                                            </div>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" data-entry="entry47" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 732.557px; z-index: 54;"><div data-type="XRepostDetails" class="additional-entry-section">
                                            <div class="additional-entry-text-column">
                                                <h2>Repost us on X/Twitter</h2>
                                                <p>for an extra entry!</p>
                                            </div>
                                            <div class="additional-entry-button-column">
                                                <button>+1</button>
                                            </div>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" data-entry="entry47" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 807.543px; z-index: 55;"><div data-type="XLikeDetails" class="additional-entry-section">
                                            <div class="additional-entry-text-column">
                                                <h2>Like us on X/Twitter</h2>
                                                <p>for an extra entry!</p>
                                            </div>
                                            <div class="additional-entry-button-column">
                                                <button>+1</button>
                                            </div>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div><div class="section" style="position: absolute; left: 0px; top: 471.903px; z-index: 51; width: 500px; height: 85.6875px;"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(0, 0, 0); justify-content: left; align-items: start;" data-type="textDetails" class="text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 15px; letter-spacing: 0px; font-weight: normal;">Body Text</h2>
                                        </div>
                                        <div style="display: none;" class="resize-handle"></div></div></div>
                                        <div class="footer-wrapper">
                                            <div class="footer">
                                                <a class="footer-content">Raffle Rules and Terms</a>
                                                <a class="footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="footer-text-logo" src="http://raffleleader-demo.local/wp-content/plugins/raffleleader/ ../../assets/images/footer_text_logo.svg"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                document.dispatchEvent(loadPreviewEvent);
            break;
        }
    }
});