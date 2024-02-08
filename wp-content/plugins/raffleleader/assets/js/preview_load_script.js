document.addEventListener('generalSettingsLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    const preview = document.getElementById('preview');
    const loadPreviewEvent = new CustomEvent('previewLoaded');

    const layoutHeightForm = document.getElementById('layoutHeightForm');
    const layoutWidthForm = document.getElementById('layoutWidthForm');

    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const timezone = document.getElementById('timeZoneDropDownTitle');

    fetch('/wp-admin/admin-ajax.php?action=loadBuilderData&post_id=' + postId)
    .then(response => response.json())
    .then(data => {
        loadDateAndTime(data);
        return loadPreview(data);
    })
    .catch(error => console.error('Error:', error));

    function loadPreview(raffleData){
        // Bulk preview data
        if(raffleData.content){
            const HTMLContent = raffleData.content;
            preview.outerHTML = HTMLContent;
        }

        document.dispatchEvent(loadPreviewEvent);

        // Load preview height and width
        const dropzone = document.getElementById('dropzone');
        const newPreview = document.getElementById('preview');

        layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
        layoutWidthForm.value = getComputedStyle(newPreview).getPropertyValue('width').replace(/^"|"$/g, '');
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

            const defaultUTCStart = moment().utc().add(1, 'days');

            startDateInput.value = defaultUTCStart.format('YYYY-MM-DD');
            startTimeInput.value = defaultUTCStart.format('HH:mm:ss');

            const defaultUTCEnd = moment().utc().add(3, 'days');

            endDateInput.value = defaultUTCEnd.format('YYYY-MM-DD');
            endTimeInput.value = defaultUTCEnd.format('HH:mm:ss');

            initializeCounters(defaultUTCStart, defaultUTCEnd, 'UTC');
        }
    }

    function initializeCounters(startTime, endTime, timezone){
        const now = moment.tz(timezone);

        const timeLeftCounters = document.querySelectorAll('.show-time-left');
        timeLeftCounters.forEach((timeLeftCounter)=>{
            watchTimeLeft(timeLeftCounter, endTime, now);
        })

        const timeStartCounters = document.querySelectorAll('.show-time-start');
        timeStartCounters.forEach((timeStartCounter)=>{
            watchTimeStart(timeStartCounter, startTime, now);
        })
    }

    function watchTimeLeft(element, endTime, nowTime){
        const difference = endTime.getTime() - nowTime.getTime();

        let timeLeft = {
            days: (0).toString().padStart(2, '0'),
            hours: (0).toString().padStart(2, '0'),
            minutes: (0).toString().padStart(2, '0'),
            seconds: (0).toString().padStart(2, '0')
        };

        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
            }
        }

        if(timeLeft.days > 0){
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.days}</h2> 
                                 <p>DAYS</p>`;
        } else if(timeLeft.hours > 0) {
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.hours}</h2> 
                                 <p>HOURS</p>`;
        } else if(timeLeft.minutes > 0){
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.minutes}</h2> 
                                 <p>MINUTES</p>`;
        } else {
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.seconds}</h2> 
                                 <p>SECONDS</p>`;
        }
    }

    function watchTimeStart(element, startTime, nowTime){
        const difference = startTime.getTime() - nowTime.getTime();

        let timeLeft = {
            days: (0).toString().padStart(2, '0'),
            hours: (0).toString().padStart(2, '0'),
            minutes: (0).toString().padStart(2, '0'),
            seconds: (0).toString().padStart(2, '0')
        };

        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
            }
        }

        if(timeLeft.days > 0){
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.days}</h2> 
                                 <p>DAYS</p>`;
        } else if(timeLeft.hours > 0) {
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.hours}</h2> 
                                 <p>HOURS</p>`;
        } else if(timeLeft.minutes > 0){
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.minutes}</h2> 
                                 <p>MINUTES</p>`;
        } else {
            element.innerHTML = `<h2 style="padding-top: 3vh">${timeLeft.seconds}</h2> 
                                 <p>SECONDS</p>`;
        }
    }
})

