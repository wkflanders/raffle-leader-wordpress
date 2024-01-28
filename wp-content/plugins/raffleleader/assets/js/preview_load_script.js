document.addEventListener('DOMContentLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    const preview = document.getElementById('preview');
    const loadPreviewEvent = new CustomEvent('previewLoaded');

    const layoutHeightForm = document.getElementById('layoutHeightForm');
    const layoutWidthForm = document.getElementById('layoutWidthForm');

    fetch('/wp-admin/admin-ajax.php?action=loadBuilderData&post_id=' + postId)
    .then(response => response.json())
    .then(data => {
        if(data.content){
            const HTMLContent = data.content;
            preview.outerHTML = HTMLContent;

            document.dispatchEvent(loadPreviewEvent);
        } else {
            document.dispatchEvent(loadPreviewEvent);
        }
    })
    .then(() => {
        const preview = document.getElementById('preview');
        const dropzone = document.getElementById('dropzone');

        layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
        layoutWidthForm.value = getComputedStyle(preview).getPropertyValue('width').replace(/^"|"$/g, '');
    })
    .catch(error => console.error('Error:', error));
})

