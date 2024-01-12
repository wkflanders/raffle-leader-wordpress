window.addEventListener("load", ()=>{
    const preview = document.getElementById('preview');

    preview.addEventListener('click', (event)=>{

        console.log('fired');

        const selectedElement = event.target.parentNode;
        const currentElement = document.querySelector('.selected-section');

        console.log(selectedElement);

        if(selectedElement.classList.contains('section')){
            try{
                currentElement.classList.remove('selected-section');
            } catch {}
            selectedElement.classList.add('selected-section');
        }
    })
})