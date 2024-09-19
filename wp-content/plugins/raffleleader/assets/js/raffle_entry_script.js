document.addEventListener('raffleLoaded', ()=>{

    let isLoading = false;
    let isSuccess = true;
    
    const emailForm = document.querySelector('.raffleleader-email-submit');
    const fontColor = emailForm.querySelector('.raffleleader-email-input').style.color;
    const submitBtn = emailForm.querySelector('button');
    const emailInput = emailForm.querySelector('input');
    const raffleID = parseInt(emailForm.parentNode.parentNode.id, 10);
    let contestantID;
    let contestantEntries;
    let inputEntryDetails;
    let referralLink;

    const additionalEntrySections = document.querySelectorAll('.raffleleader-additional-entry-section');
    additionalEntrySections.forEach((additionalEntrySection)=>{
        additionalEntrySection.classList.add('inactive-additional-entry');
        if(additionalEntrySection.getAttribute('data-type') === 'referDetails'){
            additionalEntrySection.querySelector('button').addEventListener('click', handleReferEntry);
        } else {;
            additionalEntrySection.querySelector('button').addEventListener('click', handleAdditionalEntry);
        }
    });

    emailForm.addEventListener('submit', handleEmailLogin);

    async function handleEmailLogin(event){
        event.preventDefault(event);

        isLoading = true;
        updateEmailUI();

        const emailValue = emailInput.value;
        const urlParams = new URLSearchParams(window.location.search);
        const referralCode = urlParams.get('ref');  
        const currentUrl = window.location.href.split('?')[0];

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
                    'referral_code': referralCode || '',
                    'current_url': currentUrl,
                    'security': raffleleader_raffle_entry_object.security,
                })
            });
            const data = await response.json();

            if(!data.success){
                throw new Error(`HTTP error: ${response.status}`);
            }

            contestantID = data.data.contestant_id;
            contestantEntries = data.data.contestant_entries;
            referralLink = data.data.referral_link;

            additionalEntrySections.forEach((additionalEntrySection)=>{
                if(additionalEntrySection.getAttribute('data-type') !== 'referDetails'){       
                    if(contestantEntries.some(entry => entry.entry_type === additionalEntrySection.getAttribute('data-type'))){
                        updateEntryUI(additionalEntrySection.querySelector('button'))
                    }
                }
            });

            updateReferralLinkButton();

        } catch (error){
            isSuccess = false;
            console.error("Fetch error", error);
        } finally {
            isLoading = false;
            updateEmailUI();
        }
    }

    function updateReferralLinkButton(){
        const referButton = document.querySelector('.raffleleader-additional-entry-section[data-type="referDetails"] button');
        if(referButton){
            referButton.setAttribute('data-link', referralLink);
            referButton.disabled = false;
        }
    }

    async function handleReferEntry(event){
        event.preventDefault();

        const button = event.target;
        const link = button.getAttribute('data-link');

        if(!link){
            console.error('No link provided');
            return;
        }
        
        try{
            await navigator.clipboard.writeText(link);
            const originalText = button.textContent;
            button.textContent = 'Copied';
            button.disabled = true;
            setTimeout(()=>{
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy to clipboard', err);
        }
    }

    async function handleAdditionalEntry(event){
        const entryBtn = event.target;
        entryBtn.disabled = true;

        const contestantEmail = emailInput.value;
        const URL = entryBtn.getAttribute('data-link');

        window.open(URL, '_blank', 'width=1000,height=800');

        const entryType = entryBtn.parentNode.parentNode.getAttribute('data-type');
        const match = entryType.match(/^[a-zA-Z]+(?=(Like|Follow|Comment|Repost)Details)/);
        const entryTypePrefix = match ? match[0] : null;

        if (entryTypePrefix) {
            const entryExistsWithNullDetails = contestantEntries.some(entry => {
                const contestantEntryTypeMatch = entry.entry_type.match(/^[a-zA-Z]+(?=(Like|Follow|Comment|Repost)Details)/);
                const contestantEntryTypePrefix = contestantEntryTypeMatch ? contestantEntryTypeMatch[0] : null;

                return contestantEntryTypePrefix === entryTypePrefix && entry.entry_details == null;
            });

            const entryExistsWithNonNullDetails = contestantEntries.some(entry => {
                const contestantEntryTypeMatch = entry.entry_type.match(/^[a-zA-Z]+(?=(Like|Follow|Comment|Repost)Details)/);
                const contestantEntryTypePrefix = contestantEntryTypeMatch ? contestantEntryTypeMatch[0] : null;

                return contestantEntryTypePrefix === entryTypePrefix && entry.entry_details != null;
            });

            if (entryExistsWithNullDetails) {
                console.log(`Another ${entryTypePrefix} exists but entry details are null`);
                inputEntryDetails = await updateEntryUIForm(entryBtn, entryTypePrefix);

            } else if (entryExistsWithNonNullDetails) {
                console.log(`Another ${entryTypePrefix} exists and entry details are not null`);
                updateEntryUI(entryBtn);
                
            } else {
                console.log(`No other ${entryTypePrefix} entry exists yet`);
                inputEntryDetails = await updateEntryUIForm(entryBtn, entryTypePrefix);
            }
        } else {
            console.log('Error: entry type missing.');
        }

        try{
            const response = await fetch(raffleleader_raffle_entry_object.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'action': 'handleAdditionalEntry',
                    'raffle_id': raffleID,
                    'contestant_email': contestantEmail,
                    'entry_type': entryType,
                    'entry_details': inputEntryDetails,
                    'security': raffleleader_raffle_entry_object.security,
                })
            });
            const data = await response.json();

            contestantEntries = data.data.contestant_entries;

            if(!data.success){
                throw new Error(`$HTTP error: ${response.status}`);
            }

        } catch(error){
            console.error("Fetch error", error);
        }
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
                    });
                    updateEntryUI();
                    setTimeout(()=>{
                        const welcomeElement = document.createElement('div');
                        welcomeElement.style.color = fontColor;
                        welcomeElement.innerHTML = `<div class="logged-in-user">Welcome, ${emailInput.value}</div>` ;
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

    function updateEntryUI(element){
        setTimeout(()=>{
            try{
                element.classList.add('completed-additional-entry');
                element.innerHTML = '✓';
            } catch(error){
                console.error(error);
            }
        }, 2000);
    }

    async function updateEntryUIForm(element, entryPrefix) {
        const entryBtnCol = element.parentNode;
        const additionalEntrySection = entryBtnCol.parentNode;
        const entryTxtCol = additionalEntrySection.querySelector('.raffleleader-additional-entry-text-column');
    
        entryBtnCol.classList.add('additional-entry-handle-form-load');
        // element.style.width = '100%';
        element.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
        element.disabled = true;
    
        return new Promise((resolve) => {
            entryTxtCol.style.display = 'none';
            setTimeout(() => {
                entryBtnCol.classList.remove('additional-entry-handle-form-load');
                element.innerHTML = '&rarr;';
                setTimeout(()=>{        
                    const handleForm = document.createElement('div');
                    handleForm.classList.add('raffleleader-additional-entry-form-column');
                    handleForm.innerHTML = `
                        <form class="raffleleader-entry-handle-form">
                            <input class="raffleleader-entry-handle-input" name="handle" type="username" placeholder="Enter your ${entryPrefix.charAt(0).toUpperCase() + entryPrefix.slice(1)} handle" required>
                        </form>
                            `;
                    additionalEntrySection.appendChild(handleForm);

                    const handleInput = handleForm.querySelector('.raffleleader-entry-handle-input');
                    element.disabled = false;
        
                    element.removeEventListener('click', handleAdditionalEntry);
                    element.addEventListener('click', async (event) => {
                        event.preventDefault();

                        const entryDetails = handleInput.value;
                        if (!entryDetails.trim()) {
                            alert('Please enter a valid username.');
                            return;
                        }
                        entryBtnCol.classList.add('additional-entry-handle-form-load');
                        element.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
                        element.disabled = true;
        
                        setTimeout(() => {
                            additionalEntrySection.removeChild(handleForm);
                            element.classList.add('completed-additional-entry');
                            element.innerHTML = '✓';
        
                            setTimeout(() => {
                                entryBtnCol.classList.remove('additional-entry-handle-form-load');
                                setTimeout(()=>{
                                    entryTxtCol.style.display = '';
                                    resolve(entryDetails);
                                }, 750);
                            }, 2000);
                        }, 2000);
                    });
                }, 750);
            }, 3000);
        });
    }
});