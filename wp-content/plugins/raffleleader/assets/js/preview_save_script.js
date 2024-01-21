document.addEventListener('previewLoaded', ()=>{
    const saveBtn = document.querySelector('.save-btn');
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get('post_id');

    saveBtn.addEventListener('click', btnSavePreview);

    function btnSavePreview(){
        const preview = document.getElementById('preview');
        try{
            let selectedElement = document.querySelector('.selected-section');
            selectedElement.classList.remove('selected-section');
        } catch {}
        const previewContent = preview.innerHTML;
        savePreview(postID, previewContent);
        try{
            selectedElement.classList.add('selected-section'); // Need to fix saving when not selecting
        } catch {}
    }
});

function savePreview(postID, HTMLContent){

    fetch(raffleleader_preview_save_object.ajax_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'action': 'savePreview',
            'post_id': postID,
            'content': HTMLContent,
            'security': raffleleader_preview_save_object.security
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}