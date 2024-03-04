document.addEventListener('DOMContentLoaded', ()=>{
    const raffleContainer = document.getElementById('raffleleader-raffle-container');
    const raffleID = raffleContainer.getAttribute('data-raffle-id');

    if(raffleID){
        fetch(raffleleader_load_raffle_object.ajax_url + '?action=loadRaffleData&raffle_id=' + raffleID + '&security=' + encodeURIComponent(raffleleader_load_raffle_object.security))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loadPreview(data);
            return data;
        })
        .then(data =>{
            loadDateAndTime(data);
            return data;
        })
        .catch(error => console.error('Error:', error));
    }

    function loadPreview(raffleData){
        // Bulk preview data
        if(raffleData.content){
            const HTMLContent = raffleData.content;
            raffleContainer.innerHTML = HTMLContent;

            const preview = raffleContainer.querySelector('.preview-box');
            preview.style.position = "static";
        }
    }

    function loadDateAndTime(raffleData){
        // Load time data
        if(raffleData.startDate && raffleData.endDate){
            const localStart = moment.tz(raffleData.startDate, 'UTC').tz(raffleData.timezone);

            const localEnd = moment.tz(raffleData.endDate, 'UTC').tz(raffleData.timezone);

            initializeCounters(localStart, localEnd, raffleData.timezone);
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
})

