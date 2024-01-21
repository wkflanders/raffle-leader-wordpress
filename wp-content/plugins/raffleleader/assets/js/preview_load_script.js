document.addEventListener('DOMContentLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    const preview = document.getElementById('preview');
    const loadPreviewEvent = new CustomEvent('previewLoaded');


    fetch('/wp-admin/admin-ajax.php?action=loadBuilderData&post_id=' + postId)
    .then(response => response.json())
    .then(data => {
        if(data.content){
            const HTMLContent = data.content;
            preview.innerHTML = HTMLContent;

            document.dispatchEvent(loadPreviewEvent);
        } else{
            document.dispatchEvent(loadPreviewEvent);
        }
    })
    .catch(error => console.error('Error:', error));
})

