document.addEventListener('DOMContentLoaded', ()=>{
    const createNewBtn = document.querySelector('.raffleleader-overview-create-btn');
    createNewBtn.addEventListener('click', ()=>{
        fetch(raffleleader_overview_object.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'action': 'overviewCreateNew',
                'security': raffleleader_overview_object.security,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Response received', data);
            if (data.success) {
                if (data.redirect) {
                    window.location.href = data.redirect;
                }
            } else {
                console.error('Failed to create new raffle');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
})