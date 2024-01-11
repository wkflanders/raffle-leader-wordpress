window.addEventListener('load', ()=>{
    const preview = document.getElementById('preview');
    const parent = document.getElementById('setup');
    const boxes = document.querySelectorAll('.layout-option-box');

    for(i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('dragstart', dragStart);
    }

    parent.addEventListener('dragover', dragOver);

    preview.addEventListener('drop', drop);

    function dragStart(event){
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event){
        event.preventDefault();
    }

    function drop(event){
        event.preventDefault();
        
        const data = event.dataTransfer.getData("text");
        const draggableElement = document.getElementById(data);
        const clone = draggableElement.cloneNode(true);

        preview.appendChild(clone);
    }
});