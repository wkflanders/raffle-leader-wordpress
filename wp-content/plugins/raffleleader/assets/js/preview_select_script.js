window.addEventListener("load", ()=>{
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');

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

            const editingElement = selectedElement.firstChild;
            const elementType = editingElement.getAttribute('data-type');

            switch(elementType){
                case 'header':
                    return;
            }


        }
    })

    document.addEventListener("keydown", ({key}) => {
        const currentElement = document.querySelector('.selected-section');

        if(key === "Escape"){
            try{
                currentElement.classList.remove('selected-section');
            } catch {}
        }
    })
})