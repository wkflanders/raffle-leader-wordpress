document.addEventListener('DOMContentLoaded', ()=>{
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

    fetch('/wp-admin/admin-ajax.php?action=loadBuilderData&post_id=' + postId)
    .then(response => response.json())
    .then(data => {
        return loadPreview(data);
    })
    .catch(error => console.error('Error:', error));

    function loadPreview(raffleData){
        // Bulk preview data
        if(raffleData.content){
            const HTMLContent = raffleData.content;
            preview.outerHTML = HTMLContent;
        }

        // Load time data
        if(raffleData.startDate && raffleData.endDate){
            const startTimeObject = new Date(raffleData.startDate);
            const startDate = startTimeObject.toISOString().split('T')[0];
            const startTime = startTimeObject.toISOString().split('T')[1].slice(0, 5);

            startDateInput.value = startDate;
            startTimeInput.value = startTime;

            const endTimeObject = new Date(raffleData.endDate);
            const endDate = endTimeObject.toISOString().split('T')[0]
            const endTime = endTimeObject.toISOString().split('T')[1].slice(0, 5)

            endDateInput.value = endDate;
            endTimeInput.value = endTime;

            initializeCounters(startTimeObject, endTimeObject);

        } else if(raffleData.startDate){
            const startTimeObject = new Date(raffleData.startDate);
            const startDate = startTimeObject.toISOString().split('T')[0];
            const startTime = startTimeObject.toISOString().split('T')[1].slice(0, 5);

            startDateInput.value = startDate;
            startTimeInput.value = startTime;

            const defaultEndDateObject = startTimeObject;
            defaultEndDateObject.setDate(defaultEndDateObject.getDate() + 3);
            defaultEndDate = defaultEndDateObject.toISOString().split('T')[0];
            defaultEndTime = defaultEndDateObject.toISOString().split('T')[1].slice(0, 5);

            endDateInput.value = defaultEndDate;
            endTimeInput.value = defaultEndTime;

            initializeCounters(startTimeObject, defaultEndDateObject);
            
        } else if(raffleData.endDate){
            const endTimeObject = new Date(raffleData.endDate);
            const endDate = endTimeObject.toISOString().split('T')[0]
            const endTime = endTimeObject.toISOString().split('T')[1].slice(0, 5)

            endDateInput.value = endDate;
            endTimeInput.value = endTime;

            const defaultStartDateObject = new Date();
            defaultStartDateObject.setDate(defaultStartDateObject.getDate() + 1);
            defaultStartDate = defaultStartDateObject.toISOString().split('T')[0];
            defaultStartTime = defaultStartDateObject.toISOString().split('T')[1].slice(0, 5);

            startDateInput.value = defaultStartDate;
            startTimeInput.value = defaultStartTime;

            initializeCounters(defaultStartDateObject, endTimeObject);

        } else {
            const defaultStartDateObject = new Date();
            defaultStartDateObject.setDate(defaultStartDateObject.getDate() + 1);
            defaultStartDate = defaultStartDateObject.toISOString().split('T')[0];
            defaultStartTime = defaultStartDateObject.toISOString().split('T')[1].slice(0, 5);

            startDateInput.value = defaultStartDate;
            startTimeInput.value = defaultStartTime;

            const defaultEndDateObject = new Date();
            defaultEndDateObject.setDate(defaultEndDateObject.getDate() + 4);
            defaultEndDate = defaultEndDateObject.toISOString().split('T')[0];
            defaultEndTime = defaultEndDateObject.toISOString().split('T')[1].slice(0, 5);

            endDateInput.value = defaultEndDate;
            endTimeInput.value = defaultEndTime;

            initializeCounters(defaultStartDateObject, defaultEndDateObject);
        }

        document.dispatchEvent(loadPreviewEvent);

        // Load preview height and width
        const dropzone = document.getElementById('dropzone');
        const newPreview = document.getElementById('preview');

        layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
        layoutWidthForm.value = getComputedStyle(newPreview).getPropertyValue('width').replace(/^"|"$/g, '');
    }

    function initializeCounters(startTime, endTime){
        const now = new Date();

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

