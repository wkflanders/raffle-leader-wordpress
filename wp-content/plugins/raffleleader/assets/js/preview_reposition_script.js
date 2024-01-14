window.addEventListener('load', ()=>{
    const dropzone = document.getElementById('dropzone');

    dropzone.addEventListener('dragover', handleDragOver);
    dropzone.addEventListener('drop', handleDrop);
    
    // Mutation observer for dropzone container

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if(mutation.addedNodes.length){
                mutation.addedNodes.forEach(newNode => {
                    if(newNode.classList && newNode.classList.contains('section')) {
                        makeElementDraggable(newNode);
                    }
                })
            }
        })
    })

    observer.observe(dropzone, { childList: true });

    // Utility functions for handling the drag

    function makeElementDraggable(element){
        element.setAttribute('draggable', true);
        element.addEventListener('dragstart', handleDragStart);
        element.addEventListener('dragend', handleDragEnd);
    }

    function getDragAfterElement(container, x, y){
        const draggableElements = [...container.querySelectorAll('.section:not(.dragging)')];
        const closestElement = draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if(offset < 0 && offset > closest.offset){
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY });

        return closestElement.element ? closestElement.element : null;
    }

    // Event handler callbacks for dragging

    function handleDragStart(event){
        event.target.classList.add('dragging');
    }

    function handleDragOver(event){
        event.preventDefault();
    }

    function handleDrop(event){
        event.preventDefault();
        const afterElement = getDragAfterElement(dropzone, event.clientX, event.clientY);
        const draggableElement = document.querySelector('.dragging');

        if(afterElement === null){
            if(draggableElement){
                dropzone.append(draggableElement);
            }
        } else {
            try{
                dropzone.insertBefore(draggableElement, afterElement);
            } catch {}
        }
    }

    function handleDragEnd(event){
        event.target.classList.remove('dragging');
    }

});