document.addEventListener('DOMContentLoaded', ()=>{
    const generalSettings = document.querySelector('.general-settings-wrapper');
    const generalSettingsBtns = document.querySelectorAll('.general-settings-btn');
    const generalSettingsCloseBtns = document.querySelectorAll('.close-settings-menu');

    const generalSettingsLoaded = new CustomEvent('generalSettingsLoaded');

    generalSettingsBtns.forEach((generalSettingBtn)=>{
        generalSettingBtn.addEventListener('click', openSettingWindow);
    });

    generalSettingsCloseBtns.forEach((generalSettingsCloseBtn)=>{
        generalSettingsCloseBtn.addEventListener('click', closeSettingWindow);
    });

    (function(){
        const timezoneDropdown = document.getElementById('timezoneList');
        const timezones = moment.tz.names();
        const defaultTimezone = 'UTC' // momentjs uses outdated naming

        timezones.forEach((timezone)=>{
            const li = document.createElement('li');
            li.classList.add('timezone');

            if(timezone === defaultTimezone){
                li.textContent = timezone;
                li.setAttribute('data-type', timezone);
                li.classList.add('default-timezone');
                li.setAttribute('data-type', 'UTC');
                timezoneDropdown.appendChild(li);
            } else {
                li.textContent = timezone;
                li.setAttribute('data-type', timezone);
                timezoneDropdown.appendChild(li);
            }

            li.addEventListener('click', (event)=>{
                const liElement = event.target;
                const currentTimezone = document.querySelector('.selected-timezone')
                currentTimezone.classList.remove('selected-timezone');

                const timezoneDisplay = document.getElementById('timeZoneDropDownTitle');
                timezoneDisplay.textContent = liElement.textContent;
                liElement.classList.add('selected-timezone');

                adjustTimeCounters(currentTimezone.textContent, liElement.textContent);
            });

            const rulesBox = document.getElementById('rulesAndTermsForm');

            rulesBox.addEventListener('input', inputRulesAndTerms);
        });

        document.dispatchEvent(generalSettingsLoaded);
    })();

    function openSettingWindow(event){
        event.preventDefault();
        const settingsBtn = event.target;
        const menuID = settingsBtn.parentNode.getAttribute('href');

        try{
            const currentBtn = document.querySelector('.active-settings-btn')
            const currentMenu = document.querySelector('.active-settings-menu');
            currentBtn.classList.remove('active-settings-btn');
            currentMenu.classList.remove('active-settings-menu');
        } catch{}

        settingsBtn.classList.add('active-settings-btn');
        generalSettings.classList.add('active-settings-wrapper');
        document.querySelector(menuID).classList.add('active-settings-menu');
    }

    function closeSettingWindow(event){
        event.preventDefault();

        const currentMenu = document.querySelector('.active-settings-menu');
        const currentBtn = document.querySelector('.active-settings-btn');

        generalSettings.classList.remove('active-settings-wrapper');
        currentBtn.classList.remove('active-settings-btn');

        setTimeout(()=>{
            currentMenu.classList.remove('active-settings-menu');
        }, 900)
    }

    function adjustTimeCounters(previousTimezone, currentTimezone){
        const startDateInput = document.getElementById('startDate').value;
        const startTimeInput = document.getElementById('startTime').value;
        const endDateInput = document.getElementById('endDate').value;
        const endTimeInput = document.getElementById('endTime').value;

        const startDate = startDateInput + ' ' + startTimeInput;
        const adjustedStartDate = moment.tz(startDate, currentTimezone);

        const endDate = endDateInput + ' ' + endTimeInput;
        const adjustedEndDate = moment.tz(endDate, currentTimezone);

        const nowTime = moment();
        
        const differenceStart = adjustedStartDate.diff(nowTime);
        const durationStart = moment.duration(differenceStart)

        const differenceLeft = adjustedEndDate.diff(nowTime);
        const durationLeft = moment.duration(differenceLeft);

        const timeLeftCounters = document.querySelectorAll('.show-time-left');
        const timeStartCounters = document.querySelectorAll('.show-time-start');

        timeStartCounters.forEach(timeStartCounter=>{
            const counterHeader = timeStartCounter.querySelector('h2');
            const counterText = timeStartCounter.querySelector('p');

            if(durationStart.days() > 0){
                counterHeader.innerText = `${durationStart.days()}`;
                counterText.innerText = 'DAYS';
            } else if(durationStart.hours() > 0) {
                counterHeader.innerText = `${durationStart.hours()}`;
                counterText.innerText = 'HOURS';
            } else if(durationStart.minutes() > 0){
                counterHeader.innerText = `${durationStart.minutes()}`;
                counterText.innerText = 'MINUTES';
            } else if(durationStart.seconds() > 0) {
                counterHeader.innerText = `${durationStart.seconds()}`;
                counterText.innerText = 'SECONDS';
            } else {
                counterHeader.innerText = `00`;
                counterText.innerText = 'STARTED';
            }
        });

        timeLeftCounters.forEach(timeLeftCounter=>{
            const counterHeader = timeLeftCounter.querySelector('h2');
            const counterText = timeLeftCounter.querySelector('p');

            if(durationLeft.days() > 0){
                counterHeader.innerText = `${durationLeft.days()}`;
                counterText.innerText = 'DAYS';
            } else if(durationLeft.hours() > 0) {
                counterHeader.innerText = `${durationLeft.hours()}`;
                counterText.innerText = 'HOURS';
            } else if(durationLeft.minutes() > 0){
                counterHeader.innerText = `${durationLeft.minutes()}`;
                counterText.innerText = 'MINUTES';
            } else if(durationLeft.seconds() > 0) {
                counterHeader.innerText = `${durationLeft.seconds()}`;
                counterText.innerText = 'SECONDS';
            } else {
                counterHeader.innerText = `00`;
                counterText.innerText = 'ENDED';
            }
        });
    }

    function inputRulesAndTerms(event){
        const inputForm = event.target;
        const inputText = inputForm.value;
        const formattedText = inputText.replace(/\n/g, '<br>')
        const rulesElement = document.querySelector('.raffleleader-rules-text');

        rulesElement.innerHTML = formattedText;
    }
})