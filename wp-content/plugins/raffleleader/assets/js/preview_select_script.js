document.addEventListener("previewLoaded", ()=>{
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
    const customizeBox = document.getElementById('settingsWrapper')

    preview.addEventListener('mousedown', (event)=>{

        if(event.button === 0){

            let selectedSection = event.target;
            const currentSection = document.querySelector('.selected-section');

            if(selectedSection.classList.contains('footer') || selectedSection.classList.contains('footer-wrapper') || selectedSection.classList.contains('footer-content')){
                return;
            }

            while(selectedSection != dropzone){
                if(selectedSection.classList.contains('section')){
                    try{
                        currentSection.classList.remove('selected-section');
                    } catch {}
                    selectedSection.classList.add('selected-section');
                    break;
                }
                selectedSection = selectedSection.parentElement;
            }

            const selectedElement = selectedSection.firstChild;
            const elementType = selectedElement.getAttribute('data-type');

            loadCustomizeSettings(selectedElement, elementType);

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

    function loadCustomizeSettings(element, elementType){
        switch(elementType){
            case 'headerDetails':
                // Load header settings
                const headerTextForm = document.getElementById('headerTextForm');
                const headerTextElement = element.querySelector('h2');
                const headerText = headerTextElement.textContent;
                headerTextForm.value = headerText;
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