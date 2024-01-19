window.addEventListener("load", ()=>{
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
    const customizeBox = document.getElementById('settingsWrapper')

    preview.addEventListener('mousedown', (event)=>{

        if(event.button === 0){

            let selectedElement = event.target;
            const currentElement = document.querySelector('.selected-section');

            while(selectedElement != dropzone){
                if(selectedElement.classList.contains('section')){
                    try{
                        currentElement.classList.remove('selected-section');
                    } catch {}
                    selectedElement.classList.add('selected-section');
                    break;
                }
                selectedElement = selectedElement.parentElement;
            }

            selectedElement = selectedElement.firstChild;
            const elementType = selectedElement.getAttribute('data-type');

            openEditingBox(elementType);
        }
    })

    function openEditingBox(elementType){
        const editingElement = document.getElementById(elementType);

        if(!customizeBox.classList.contains('slide-right-to-left')){
            customizeBox.classList.toggle('slide-right-to-left');
        }
        
        const currentEditingElement = document.querySelector('.visible-customize')
        
        if(currentEditingElement && currentEditingElement != editingElement){
            currentEditingElement.classList.remove('visible-customize');
            editingElement.classList.add('visible-customize');
        } else {
            editingElement.classList.add('visible-customize');
        }
    }

    document.addEventListener("keydown", ({key}) => {
        const currentElement = document.querySelector('.selected-section');

        if(key === "Escape"){
            try{
                currentElement.classList.remove('selected-section');
                if(customizeBox.classList.contains('slide-right-to-left')){
                    customizeBox.classList.toggle('slide-right-to-left');
                }
            } catch {}
        }
    })
})