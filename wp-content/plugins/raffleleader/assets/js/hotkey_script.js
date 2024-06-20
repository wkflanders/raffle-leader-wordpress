document.addEventListener('previewLoaded', ()=>{

    let history = [];
    
    document.addEventListener('keydown', (event)=>{
        const dropzone = document.getElementById('dropzone');

        if((event.ctrlKey || event.metaKey) && event.key === 'c'){
            event.preventDefault();

            const selectedElement = dropzone.querySelector('.selected-raffleleader-section');
            if(selectedElement){
                const htmlContent = selectedElement.outerHTML;
                navigator.clipboard.writeText(htmlContent).then(()=>{
                    console.log('Copied to clipboard');
                }).catch((err)=>{
                    console.error('Failed to copy to clipboard', err);
                });
            }
        }

        if((event.ctrlKey || event.metaKey) && event.key === 'v'){
            event.preventDefault();
            navigator.clipboard.readText().then((element)=>{
                dropzone.insertAdjacentHTML('beforeend', element)
                console.log('Pasted from clipboard');
            }).catch((err)=>{
                console.error('Failed to read from clipboard', err);
            });
        }

        if(event.key === 'Delete'){
            const selectedElement = dropzone.querySelector('.selected-raffleleader-section');
            if(selectedElement){
                selectedElement.remove();
                console.log('Deleted');
            }
        }

        
    });
});