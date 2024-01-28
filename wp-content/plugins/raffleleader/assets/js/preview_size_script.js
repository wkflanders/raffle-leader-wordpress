document.addEventListener('previewLoaded', ()=>{
    const preview = document.getElementById('preview');
    const dropzone = document.getElementById('dropzone');
    const layoutSizeForms = document.querySelectorAll('.layout-size-form');

    layoutMinHeightError = document.querySelector('.layout-min-height-error');
    layoutMinWidthError = document.querySelector('.layout-min-width-error');
    layoutMaxWidthError = document.querySelector('.layout-max-width-error');
    layoutMaxWidthError = document.querySelector('.layout-max-width-error');

    layoutSizeForms.forEach((layoutSizeForm)=>{
        layoutSizeForm.addEventListener('input', resizePreview);
    });

    function resizePreview(event){
        const layoutInputForm = event.target;
        const sizeFormID = layoutInputForm.id;
        const sizeValue = layoutInputForm.value.includes('px') ? layoutInputForm.value.replace('px', '') : layoutInputForm.value;

        if(sizeFormID === 'layoutWidthForm'){
            preview.style.width = `${sizeValue}px`;
            if(parseInt(sizeValue) < 500){
                layoutMinWidthError.style.display = 'block'; 
                layoutMaxWidthError.style.display = 'none'; 
            } else if(parseInt(sizeValue) > 2000){
                console.log('fired');
                layoutMinWidthError.style.display = 'none'; 
                layoutMaxWidthError.style.display = 'block'; 
            } else {
                layoutMinWidthError.style.display = 'none'; 
                layoutMaxWidthError.style.display = 'none'; 
            }
        } 

        if(sizeFormID === 'layoutHeightForm'){
            dropzone.style.height = `${sizeValue}px`;
            if(parseInt(sizeValue) < 100){
                layoutMinHeightError.style.display = 'block'; 
                layoutMaxHeightError.style.display = 'none'; 
            } else if(parseInt(sizeValue) > 1200) {
                layoutMinHeightError.style.display = 'none'; 
                layoutMaxHeightError.style.display = 'block'; 
            } else {
                layoutMinHeightError.style.display = 'none'; 
                layoutMaxHeightError.style.display = 'none'; 
            }
        } 
    }
})