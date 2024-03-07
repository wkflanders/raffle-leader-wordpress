document.addEventListener('raffleLoaded', ()=>{
    
    const emailForms = document.querySelectorAll('[data-type="entryDetails"]');

    emailForms.forEach((emailForm)=>{
        emailForm.addEventListener('submit', handleEmailLogin);
    });

    function handleEmailLogin(event){
        event.preventDefault();
    }

})