document.addEventListener('raffleLoaded', ()=>{

    const userSignedIn = new CustomEvent('userSignedIn');
    document.addEventListener('userSignedIn', handleSignIn);

    let isLoading = false;
    let isSuccess = true;
    
    const emailForm = document.querySelector('.raffleleader-email-submit');
    const submitBtn = emailForm.querySelector('button');
    const emailInput = emailForm.querySelector('input');
    const raffleID = parseInt(emailForm.parentNode.parentNode.id, 10);

    const additionalEntrySections = document.querySelectorAll('.raffleleader-additional-entry-section');
    additionalEntrySections.forEach((additionalEntrySection)=>{
        additionalEntrySection.classList.add('inactive-additional-entry');
        additionalEntrySection.querySelector('button').addEventListener('click', handleAdditionalEntry);
    });

    emailForm.addEventListener('submit', handleEmailLogin);

    async function handleEmailLogin(event){
        event.preventDefault(event);

        isLoading = true;
        updateEmailUI();

        const emailValue = emailInput.value;
        try{
            const response = await fetch(raffleleader_raffle_entry_object.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'action': 'handleEmailLogin',
                    'raffle_id': raffleID,
                    'contestant_email': emailValue,
                    'security': raffleleader_raffle_entry_object.security,
                })
            });
            const data = await response.json();

            if(!data.success){
                throw new Error(`$HTTP error: ${response.status}`);
            }

        } catch (error){
            isSuccess = false;
            console.error("Fetch error", error);
        } finally {
            isLoading = false;
            document.dispatchEvent(userSignedIn);
            updateEmailUI();
        }
    }

    async function handleSignIn(event){
        try{
            const response = await fetch(raffleleader_raffle_entry_object.ajax_url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'action': 'handleSignIn',
                    'raffle_id': raffleID,
                    'contestant_email': 
                })
            })
        } catch (error){

        } finally {

        }
    }

    async function handleAdditionalEntry(event){
        const contestantEmail = emailInput.value;
        const URL = event.target.getAttribute('data-link');

        const timeWindowOpened = new Date();
        const newWindow = window.open(URL, '_blank', 'width=1000,height=800');

        let checkWindowClosed = setInterval(()=>{
        }, 500);
    }

    function updateEmailUI(){
        if(isLoading){
            submitBtn.classList.add('on-submit-loading-btn');
            submitBtn.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
            submitBtn.disabled = true;
        } else {
            setTimeout(()=>{
                if(isSuccess == true){
                    submitBtn.innerHTML = '✓';
                    submitBtn.classList.add('on-submit-success-btn');
                    submitBtn.classList.remove('on-submit-loading-btn');
                    submitBtn.disabled = true;

                    additionalEntrySections.forEach(additionalEntrySection =>{
                        additionalEntrySection.classList.remove('inactive-additional-entry');
                    })
                    setTimeout(()=>{
                        const welcomeElement = document.createElement('div');
                        welcomeElement.innerHTML = `
                        <div class="logged-in-user">Welcome, ${emailInput.value}</div>
                        ` ;
                        emailForm.appendChild(welcomeElement);

                        emailInput.classList.add('logged-in-input');
                        submitBtn.classList.add('logged-in-btn');
                        submitBtn.classList.remove('on-submit-success-btn');
                        
                        setTimeout(()=>{
                            submitBtn.style.display = 'none';
                        }, 1000);
                    }, 2000);
                } else {
                    submitBtn.innerHTML = '✕'
                    submitBtn.classList.add('on-submit-failure-btn');
                    submitBtn.classList.remove('on-submit-loading-btn');
                    setTimeout(()=>{
                        submitBtn.classList.remove('on-submit-failure-btn');
                        submitBtn.innerHTML = '&rarr;';
                        submitBtn.disabled = false;
                    }, 2000);
                }
            }, 2000);
        }
    }

    function updateEntryUI(){
        
    }
});