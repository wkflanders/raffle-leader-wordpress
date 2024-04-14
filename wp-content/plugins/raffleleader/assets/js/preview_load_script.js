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
});

