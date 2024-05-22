document.addEventListener('DOMContentLoaded', ()=>{
    const raffleContainer = document.getElementById('raffleleader-raffle-container');
    const raffleID = raffleContainer.getAttribute('data-raffle-id');

    const viewportWidth = window.innerWidth;

    const raffleLoaded = new CustomEvent('raffleLoaded');

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
            if(viewportWidth <= 400){
                raffleContainer.style.transform = 'scale(0.6)';
            } else if(viewportWidth <= 600){
                raffleContainer.style.transform = 'scale(0.8)';
            } else if(viewportWidth <= 1000){
                raffleContainer.style.transform = 'scale(0.9)';
            } else { 
                raffleContainer.style.transform = 'scale(1)';
            }

            const HTMLContent = raffleData.content;
            raffleContainer.innerHTML = HTMLContent;

            const preview = raffleContainer.querySelector('.raffleleader-preview-box');
            const dropzone = raffleContainer.querySelector('.raffleleader-dropzone');
            preview.style.position = "static";
            dropzone.style.position = "relative";

            const sections = preview.querySelectorAll('.raffleleader-section');
            sections.forEach((section)=>{
                section.style.position = null;
            });

            const entrySection = preview.querySelector('.raffleleader-entry-section');
            const emailInput = entrySection.querySelector('.raffleleader-email-input');
            const emailBtn = entrySection.querySelector('.raffleleader-email-submit-btn');

            const additionalEntrySections = document.querySelectorAll('.raffleleader-additional-entry-section');

            if(raffleData.status.includes('Starts')){
                entrySection.classList.add('inactive-entry');
                emailInput.placeholder = 'This raffle is starting soon';
                emailBtn.innerText = '⧗';
            } else if(raffleData.status.includes('Finished')){
                entrySection.classList.add('inactive-entry');
                emailInput.placeholder = 'This raffle has finished';
                emailBtn.innerText = '✓';
                
                additionalEntrySections.forEach((additionalEntrySection)=>{
                    additionalEntrySection.classList.add('inactive-additional-entry')
                    additionalEntrySection.querySelector('button').innerHTML = '✓';
                })
            }

            const rulesAndTerms = document.querySelector('.raffleleader-rules-and-terms');
            rulesAndTerms.addEventListener('click', displayRulesAndTerms);

            const rulesAndTermsCloseBtn = document.querySelector('.rules-and-terms-close-button');
            rulesAndTermsCloseBtn.addEventListener('click', closeRulesAndTerms);
            
            document.dispatchEvent(raffleLoaded);
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

    function displayRulesAndTerms(){
        const rulesAndTermsPreview = preview.querySelector('.raffleleader-rules-and-terms-preview');
        rulesAndTermsPreview.style.display = '';
    }

    function closeRulesAndTerms(){
        const rulesAndTermsPreview = preview.querySelector('.raffleleader-rules-and-terms-preview');
        rulesAndTermsPreview.style.display = 'none';
    }
})

