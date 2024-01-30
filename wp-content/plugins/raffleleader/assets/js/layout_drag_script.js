document.addEventListener('previewLoaded', () => {
    const dropzone = document.getElementById('dropzone');
    const boxes = document.querySelectorAll('.layout-option-box');
    let currentDragElement = null;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('dragstart', dragStart);
    }

    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);

    function dragStart(event) {
        currentDragElement = event.target;
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();

        const dropzoneRect = dropzone.getBoundingClientRect();
        const mouseX = event.clientX - dropzoneRect.left;
        const mouseY = event.clientY - dropzoneRect.top;

        if (currentDragElement) {
            handleDrop(mouseX, mouseY, this, currentDragElement);
        }

        currentDragElement = null;
    }

    function handleDrop(mouseX, mouseY, container, dragElement) {
        const htmlToAppend = generateHTML(dragElement.id);
        const newElement = document.createElement('div');
        newElement.classList.add('section');
        if(dragElement.id === 'imageBox'){
            newElement.style.width = '400px';
            newElement.style.height = '300px';
        }
        newElement.innerHTML = htmlToAppend;

        // Append first to get dimensions, then position
        container.appendChild(newElement);
        const rect = newElement.getBoundingClientRect();
        
        // Adjust position so the center of the element is at the mouse position
        const centerX = mouseX - rect.width / 2;
        const centerY = mouseY - rect.height / 2;

        newElement.style.position = 'absolute';
        newElement.style.left = `${centerX}px`;
        newElement.style.top = `${centerY}px`;
    }

    function generateHTML(ID){
        switch(ID){
            case 'textBox':
                return `<div style="height: 100%; width: 100%;" data-type="textDetails" class="text-section">
                            <h2 style="white-space: pre-wrap;">Text</h2>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;
            case 'formBox':
                return `<div data-type="formDetails" class="form-section">
                            <p>Form</p>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;
            case 'counterBox':
                return `<div style="height: 100%; width: 100%;" data-type="counterDetails" class="counter-section">
                            <h2>00</h2>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;
            case 'imageBox':
                return `<div data-type="imageDetails" class="image-section">
                            <p>Drag & Drop an Image Here</p>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;
        }
    }
});