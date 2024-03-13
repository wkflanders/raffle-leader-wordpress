document.addEventListener('generalSettingsLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const raffleID = urlParams.get('raffle_id');
    const loadPreviewEvent = new CustomEvent('previewLoaded');

    const layoutHeightForm = document.getElementById('layoutHeightForm');
    const layoutWidthForm = document.getElementById('layoutWidthForm');

    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const timezone = document.getElementById('timeZoneDropDownTitle');

    fetch('/wp-admin/admin-ajax.php?action=loadBuilderData&raffle_id=' + raffleID)
    .then(response => response.json())
    .then(data => {
        loadPreview(data);
        return data;
    })
    .then(data =>{
        loadDateAndTime(data);
        return data;
    })
    .catch(error => console.error('Error:', error));

    function loadPreview(raffleData){

        // Bulk preview data

        if(raffleData.content){
            const preview = document.getElementById('preview');
            const HTMLContent = raffleData.content;
            preview.outerHTML = HTMLContent;

            const btnTarget = document.getElementById(raffleData.template_id);
            const templateBox = btnTarget.parentNode.parentNode.parentNode;
            templateBox.classList.add('chosen-template');

            document.dispatchEvent(loadPreviewEvent);

            // Load preview height and width
            const dropzone = document.getElementById('dropzone');
            const newPreview = document.getElementById('preview');

            layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
            layoutWidthForm.value = getComputedStyle(newPreview).getPropertyValue('width').replace(/^"|"$/g, '');

        } else if(raffleData.template_id){
            const btnTarget = document.getElementById(raffleData.template_id);
            const templateBox = btnTarget.parentNode.parentNode.parentNode;
            templateBox.classList.add('chosen-template');

            injectTemplateHTML(raffleData.template_id);

            document.dispatchEvent(loadPreviewEvent);

            // Load preview height and width
            const dropzone = document.getElementById('dropzone');
            const newPreview = document.getElementById('preview');

            layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
            layoutWidthForm.value = getComputedStyle(newPreview).getPropertyValue('width').replace(/^"|"$/g, '');
        }
    }

    function loadDateAndTime(raffleData){

        // Load time data

        if(raffleData.startDate && raffleData.endDate){
            timezone.textContent = raffleData.timezone;
            document.querySelector(`[data-type="${raffleData.timezone}"]`).classList.add('selected-timezone');

            const localStart = moment.tz(raffleData.startDate, 'UTC').tz(raffleData.timezone);

            startDateInput.value = localStart.format('YYYY-MM-DD');
            startTimeInput.value = localStart.format('HH:mm:ss');

            const localEnd = moment.tz(raffleData.endDate, 'UTC').tz(raffleData.timezone);

            endDateInput.value = localEnd.format('YYYY-MM-DD');
            endTimeInput.value = localEnd.format('HH:mm:ss');

            initializeCounters(localStart, localEnd, raffleData.timezone);

        } else if(raffleData.startDate){
            timezone.textContent = raffleData.timezone;
            document.querySelector(`[data-type="${raffleData.timezone}"]`).classList.add('selected-timezone');

            const localStart = moment.tz(raffleData.startDate, 'UTC').tz(raffleData.timezone);

            startDateInput.value = localStart.format('YYYY-MM-DD');
            startTimeInput.value = localStart.format('HH:mm:ss');

            const defaultLocalEnd = localStart.add(3, 'days');

            endDateInput.value = defaultLocalEnd.format('YYYY-MM-DD');
            endTimeInput.value = defaultLocalEnd.format('HH:mm:ss');

            initializeCounters(localStart, defaultLocalEnd, raffleData.timezone);
            
        } else if(raffleData.endDate){
            timezone.textContent = raffleData.timezone;
            document.querySelector(`[data-type="${raffleData.timezone}"]`).classList.add('selected-timezone');

            const localEnd = moment.tz(raffleData.endDate, 'UTC').tz(raffleData.timezone);

            endDateInput.value = localEnd.format('YYYY-MM-DD');
            endTimeInput.value = localEnd.format('HH:mm:ss');

            const defaultLocalStart = localStart.subtract(1, 'days');

            startDateInput.value = defaultLocalStart.format('YYYY-MM-DD');
            startTimeInput.value = defaultLocalStart.format('HH:mm:ss');

            initializeCounters(defaultLocalStart, localEnd, raffleData.timezone);

        } else {
            document.getElementById('timezoneList').querySelector('.default-timezone').classList.add('selected-timezone');

            const defaultUTCStart = moment().add(1, 'days');

            startDateInput.value = defaultUTCStart.format('YYYY-MM-DD');
            startTimeInput.value = defaultUTCStart.format('HH:mm:ss');

            const defaultUTCEnd = moment().add(3, 'days');

            endDateInput.value = defaultUTCEnd.format('YYYY-MM-DD');
            endTimeInput.value = defaultUTCEnd.format('HH:mm:ss');

            initializeCounters(defaultUTCStart, defaultUTCEnd, 'UTC');
        }
    }

    function initializeCounters(startTime, endTime, timezone){
        const now = moment();

        const timeLeftCounters = document.querySelectorAll('.show-time-left');
        timeLeftCounters.forEach((timeLeftCounter)=>{
            watchTimeLeft(timeLeftCounter, endTime, now);
        });

        const timeStartCounters = document.querySelectorAll('.show-time-start');
        timeStartCounters.forEach((timeStartCounter)=>{
            watchTimeStart(timeStartCounter, startTime, now);
        });
    }

    function watchTimeLeft(element, endTime, nowTime){
        const difference = endTime.diff(nowTime);
        const duration = moment.duration(difference);

        const counterHeader = element.querySelector('h2');
        const counterText = element.querySelector('p');

        if(duration.days() > 0){
            counterHeader.innerText = `${duration.days()}`;
            counterText.innerText = 'DAYS';
        } else if(duration.hours() > 0) {
            counterHeader.innerText = `${duration.hours()}`;
            counterText.innerText = 'HOURS';
        } else if(duration.minutes() > 0){
            counterHeader.innerText = `${duration.minutes()}`;
            counterText.innerText = 'MINUTES';
        } else if(duration.seconds() > 0){
            counterHeader.innerText = `${duration.seconds()}`;
            counterText.innerText = 'SECONDS';
        } else {
            counterHeader.innerText = `00`;
            counterText.innerText = 'ENDED';
        }
    }

    function watchTimeStart(element, startTime, nowTime){
        const difference = startTime.diff(nowTime);
        const duration = moment.duration(difference);

        const counterHeader = element.querySelector('h2');
        const counterText = element.querySelector('p');

        if(duration.days() > 0){
            counterHeader.innerText = `${duration.days()}`;
            counterText.innerText = 'DAYS';
        } else if(duration.hours() > 0) {
            counterHeader.innerText = `${duration.hours()}`;
            counterText.innerText = 'HOURS';
        } else if(duration.minutes() > 0){
            counterHeader.innerText = `${duration.minutes()}`;
            counterText.innerText = 'MINUTES';
        } else if(duration.seconds() > 0) {
            counterHeader.innerText = `${duration.seconds()}`;
            counterText.innerText = 'SECONDS';
        } else {
            counterHeader.innerText = `00`;
            counterText.innerText = 'STARTED';
        }
    }


    function injectTemplateHTML(templateType){
        const preview = document.getElementById('preview');

        switch(templateType) {
            case 'blankTemplate':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 600px"></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-footer">
                                                <a class="raffleleader-footer-content">Raffle Rules and Terms</a>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                window.zoomScale = 1;
            break;

            case 'twitterTemplate':
                preview.outerHTML = `<div id="preview" class="raffleleader-preview-box raffleleader-preview-reset" style="width: 500px; transform: scale(1.0);">
                                        <div id="dropzone" class="raffleleader-dropzone" style="height: 1000px;"><div class="raffleleader-section" style="position: absolute; left: 0px; top: 932.972px; z-index: 1; width: 166px; height: 67.0156px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="raffleleader-counter-section">
                                            <h2 style="font-size: 40px;">00</h2>
                                            <p></p>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 882.542px; z-index: 1; width: 166.241px; height: 50.4219px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 20px;">Start</h2>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 165.994px; top: 882.542px; z-index: 1; width: 167.703px; height: 50.4376px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 20px;">Your Entries</h2>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 331px; top: 882.542px; z-index: 1; width: 169.063px; height: 50.4375px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 20px;">End</h2>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" id="entry47" style="width: 500px; height: 100px; position: absolute; left: 0px; top: 557.571px; z-index: 1;"><div data-type="entryDetails" class="raffleleader-entry-section" style="border-top: 1px solid rgb(0, 0, 0);">
                                            <form action="/submit-email" method="post">
                                                <input type="email" name="email" placeholder="email...">
                                                <button type="submit">→</button>
                                            </form>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 165.994px; top: 932.972px; z-index: 1; width: 167.687px; height: 66.9999px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="raffleleader-counter-section">
                                            <h2 style="font-size: 40px;">00</h2>
                                            <p></p>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 331px; top: 932.969px; z-index: 1; width: 169.162px; height: 67px;"><div style="height: 100%; width: 100%;" data-type="counterDetails" class="raffleleader-counter-section">
                                            <h2 style="font-size: 40px;">00</h2>
                                            <p></p>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 0px; z-index: 1; width: 500px; height: 76.4151px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                            <h2 style="white-space: pre-wrap;">Header</h2>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="position: absolute; left: 0px; top: 76.4063px; z-index: 1; width: 500px; height: 59.434px;"><div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 25px;">Subheader</h2>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" style="width: 500px; height: 336.075px; position: absolute; left: 0px; top: 135.891px; z-index: 1;"><div data-type="imageDetails" class="raffleleader-image-section">
                                            <p>Insert An Image Here</p>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="entry47" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 657.571px; z-index: 1;"><div data-type="XFollowDetails" class="raffleleader-additional-entry-section">
                                            <div class="additional-entry-text-column">
                                                <h2>Follow us on X/Twitter</h2>
                                                <p>for an extra entry!</p>
                                            </div>
                                            <div class="additional-entry-button-column">
                                                <button>+1</button>
                                            </div>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="raffleleader-section" data-entry="entry47" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 732.557px; z-index: 1;"><div data-type="XRepostDetails" class="raffleleader-additional-entry-section">
                                            <div class="additional-entry-text-column">
                                                <h2>Repost us on X/Twitter</h2>
                                                <p>for an extra entry!</p>
                                            </div>
                                            <div class="additional-entry-button-column">
                                                <button>+1</button>
                                            </div>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="section" data-entry="entry47" style="width: 500px; height: 75px; position: absolute; left: 0px; top: 807.543px; z-index: 1;"><div data-type="XLikeDetails" class="raffleleader-additional-entry-section">
                                            <div class="additional-entry-text-column">
                                                <h2>Like us on X/Twitter</h2>
                                                <p>for an extra entry!</p>
                                            </div>
                                            <div class="additional-entry-button-column">
                                                <button>+1</button>
                                            </div>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div><div class="section" style="position: absolute; left: 0px; top: 471.903px; z-index: 1; width: 500px; height: 85.6875px;"><div style="height: 100%; width: 100%; border-bottom: 1px solid rgb(0, 0, 0); justify-content: left; align-items: start;" data-type="textDetails" class="raffleleader-text-section">
                                            <h2 style="white-space: pre-wrap; font-size: 15px; letter-spacing: 0px; font-weight: normal;">Body Text</h2>
                                        </div>
                                        <div style="display: none;" class="raffleleader-resize-handle"></div></div></div>
                                        <div class="raffleleader-footer-wrapper">
                                            <div class="raffleleader-ooter">
                                                <a class="raffleleader-footer-content">Raffle Rules and Terms</a>
                                                <a class="raffleleader-footer-content rl_link" target="_blank" href="https://raffleleader.com">Try <img id="footer-logo" class="raffleleader-footer-text-logo" src="https://raffleleader.com/wp-content/uploads/2024/03/footer_text_logo.png"> For Yourself!</a>
                                            </div>
                                        </div>
                                    </div>`;
                window.zoomScale = 1;
            break;
        }
    }
});

