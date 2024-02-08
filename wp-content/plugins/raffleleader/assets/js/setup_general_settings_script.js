document.addEventListener('DOMContentLoaded', ()=>{
    const generalSettings = document.querySelector('.general-settings-wrapper');
    const generalSettingsBtns = document.querySelectorAll('.general-settings-btn');
    const generalSettingsCloseBtns = document.querySelectorAll('.close-settings-menu');

    generalSettingsBtns.forEach((generalSettingBtn)=>{
        generalSettingBtn.addEventListener('click', openSettingWindow);
    });

    generalSettingsCloseBtns.forEach((generalSettingsCloseBtn)=>{
        generalSettingsCloseBtn.addEventListener('click', closeSettingWindow);
    });

    (function(){
        const timezoneDropdown = document.getElementById('timezoneList');

        const timezones = Intl.supportedValuesOf('timeZone');

        timezones.forEach((timezone)=>{
            const li = document.createElement('li');
            li.classList.add('timezone');
            li.textContent = timezone;
            timezoneDropdown.appendChild(li);
            li.addEventListener('click', ()=>{
                const currentTimezone = document.querySelector('.selected-timezone')
                currentTimezone.classList.remove('selected-timezone');

                const timezoneDisplay = document.getElementById('timeZoneDropDownTitle');
                timezoneDisplay.textContent = this.textContent;

                this.classList.add('selected-timezone');
            });
        });

        const UTCli = document.createElement('li');
        UTCli.classList.add('timezone');
        UTCli.textContent = 'UTC';
        UTCli.addEventListener('click', ()=>{
            const currentTimezone = document.querySelector('.selected-timezone')
            currentTimezone.classList.remove('selected-timezone');

            const timezoneDisplay = document.getElementById('timeZoneDropDownTitle');
            timezoneDisplay.textContent = this.textContent;

            this.classList.add('selected-timezone');
        });
        timezoneDropdown.appendChild(UTCli);
    })();

    populateTimezoneList();

    function openSettingWindow(event){
        event.preventDefault();
        settingsBtn = event.target;
        menuID = settingsBtn.parentNode.getAttribute('href');

        try{
            currentBtn = document.querySelector('.active-settings-btn')
            currentMenu = document.querySelector('.active-settings-menu');
            currentBtn.classList.remove('active-settings-btn');
            currentMenu.classList.remove('active-settings-menu');
        } catch{}

        settingsBtn.classList.add('active-settings-btn');
        generalSettings.classList.add('active-settings-wrapper');
        document.querySelector(menuID).classList.add('active-settings-menu');
    }

    function closeSettingWindow(event){
        event.preventDefault();
        closeSettingsBtn = event.target;

        currentMenu = document.querySelector('.active-settings-menu');
        currentBtn = document.querySelector('.active-settings-btn');

        generalSettings.classList.remove('active-settings-wrapper');
        currentBtn.classList.remove('active-settings-btn');

        setTimeout(()=>{
            currentMenu.classList.remove('active-settings-menu');
        }, 900)
    }
})