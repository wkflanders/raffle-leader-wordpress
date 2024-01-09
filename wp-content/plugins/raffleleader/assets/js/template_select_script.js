document.addEventListener('DOMContentLoaded', ()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    
    const selectBtns = document.querySelectorAll('.select-template');

    for (i=0; i < selectBtns.length; i++){
        selectBtns[i].addEventListener('click', selectTemplate);
    }

    fetch('/wp-admin/admin-ajax.php?action=loadBuilderData&post_id=' + postId)
    .then(response => response.json())
    .then(data => {
        if(data.template){
            const btnTarget = document.querySelector('.' + data.template);

            const templateBox = btnTarget.parentNode.parentNode.parentNode;

            templateBox.classList.add('chosen-template');
        }
    })
    .catch(error => console.error('Error:', error));

    function selectTemplate(event){
        const templateId = this.dataset.templateId;

        const btnTarget = event.currentTarget;
        
        const templateBox = btnTarget.parentNode.parentNode.parentNode;

        let currentTemplate = document.querySelector('.chosen-template');

        fetch(raffleleader_template_select_object.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'action': 'saveTemplate',
                'post_id': postId,
                'template_id': templateId,
                'security': raffleleader_template_select_object.security,
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        console.log(templateBox);
        if(currentTemplate){
            currentTemplate.classList.remove('chosen-template');
            templateBox.classList.add('chosen-template');
        } else {
            templateBox.classList.add('chosen-template');
        }
    }
})