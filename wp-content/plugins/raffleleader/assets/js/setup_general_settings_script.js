document.addEventListener('previewLoaded', ()=>{
    const generalSettingsBtns = document.querySelectorAll('.settings-options-btn');
    const generalSettings = document.querySelector('.general-settings-wrapper');

    generalSettingsBtns.forEach((generalSettingBtn)=>{
        generalSettingBtn.addEventListener('click', openSettingWindow);
    });

    

    function openSettingWindow(event){
        event.preventDefault();
        settingsBtn = event.target;
        menuID = settingsBtn.parentNode.getAttribute('href');

        try{
            currentMenu = document.querySelector('.active-settings-menu');
            currentMenu.classList.remove('active-settings-menu');
        } catch{}

        generalSettings.classList.add('active-settings-wrapper');
        document.querySelector(menuID).classList.add('active-settings-menu');
    }
})