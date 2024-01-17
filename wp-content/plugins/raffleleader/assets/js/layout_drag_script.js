window.addEventListener('load', ()=>{
    const dropzone = document.getElementById('dropzone');
    const boxes = document.querySelectorAll('.layout-option-box');
    let currentDragElement = null;

    for(i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('dragstart', dragStart);
    }

    dropzone.addEventListener('dragover', dragOver);

    dropzone.addEventListener('drop', drop);

    function dragStart(event){
        currentDragElement = event.target;
    }

    function dragOver(event){
        event.preventDefault();
    }

    function drop(event){
        event.preventDefault();

        const mouseY = event.clientY;

        if(currentDragElement){
            handleDrop(mouseY, this, currentDragElement);
        }

        currentDragElement = null;
    }

    function handleDrop(mouseY, container, dragElement){
        const childElements = Array.from(container.children);
        let closest = { index: -1, distance: Infinity };

        childElements.forEach((child, index) => {
            const rect = child.getBoundingClientRect();
            const midY = rect.top + rect.height / 2;
            const distance = Math.abs(midY - mouseY);
            if(distance < closest.distance){
                closest = { index, distance };
            }
        });

        const htmlToAppend = generateHTML(dragElement.id);

        const newElement = document.createElement('div');
        newElement.classList.add('section');
        // newElement.classList.add('selected-section');
        newElement.innerHTML = htmlToAppend;

        if(closest.index === -1){
            container.appendChild(newElement);
        } else {
            const rect = childElements[closest.index].getBoundingClientRect();
            const midY = rect.top + rect.height / 2;

            if(mouseY < midY){
                container.insertBefore(newElement, childElements[closest.index]);
            } else {
                const nextSibling = childElements[closest.index].nextElementSibling;
                container.insertBefore(newElement, nextSibling);
            }
        }
    }

    function generateHTML(ID){
        switch(ID){
            case 'headerBox':
                return `<div data-type="header" class="header-section">
                            <h2>Header</h2>
                        </div>`;
            case 'subheaderBox':
                return `<div data-type="subheader" class="subheader-section">
                            <h4>Subheader</h4>
                        </div>`;
            case 'bodyBox':
                return `<div data-type="body" class="body-section">
                            <p>Body Text</p>
                        </div>`;
            case 'formBox':
                return `<div data-type="form" class="form-section">
                            <p>Form</p>
                        </div>`;
            case 'counterBox':
                return `<div data-type="counter" class="counter-section">
                            <p>Counter</p>
                        </div>`;
            case 'imageBox':
                return `<div data-type="image" class="image-section">
                            <p>Drag & Drop an Image Here</p>
                        </div>`;
        }
    }
});