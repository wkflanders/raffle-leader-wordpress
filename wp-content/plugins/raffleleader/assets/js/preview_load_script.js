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
        return loadPreview(data);
    })
    .catch(error => console.error('Error:', error));

    function loadPreview(raffleData){
        // Bulk preview data
        if(raffleData.content){
            const HTMLContent = raffleData.content;
            preview.outerHTML = HTMLContent;

            // Load counter data
            console.log(raffleData);
    
            document.dispatchEvent(loadPreviewEvent);
        } else {
            document.dispatchEvent(loadPreviewEvent);
        }

        // Load preview height and width
        const dropzone = document.getElementById('dropzone');
        const newPreview = document.getElementById('preview');

        layoutHeightForm.value = getComputedStyle(dropzone).getPropertyValue('height').replace(/^"|"$/g, '');
        layoutWidthForm.value = getComputedStyle(newPreview).getPropertyValue('width').replace(/^"|"$/g, '');
    }
})

