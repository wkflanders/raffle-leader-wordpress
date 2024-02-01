document.addEventListener('previewLoaded', ()=>{
    const generalSettings = document.querySelector('.general-settings-wrapper');
    const generalSettingsBtns = document.querySelectorAll('.general-settings-btn');
    const generalSettingsCloseBtns = document.querySelectorAll('.close-settings-menu');

    generalSettingsBtns.forEach((generalSettingBtn)=>{
        generalSettingBtn.addEventListener('click', openSettingWindow);
    });

    generalSettingsCloseBtns.forEach((generalSettingsCloseBtn)=>{
        generalSettingsCloseBtn.addEventListener('click', closeSettingWindow);
    })

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