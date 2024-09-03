const layoutDrop = new CustomEvent('layoutDrop');

document.addEventListener('previewLoaded', layoutDrag);
document.addEventListener('stateSaved', layoutDrag);

function layoutDrag(){
    const dropzone = document.getElementById('dropzone');
    const layoutBoxes = document.querySelectorAll('.layout-option-box');
    const entryAdditionalBoxes = document.querySelectorAll('.dropdown-additional-entry');

    const urlParams = new URLSearchParams(window.location.search);
    const raffleID = urlParams.get('raffle_id');

    let currentDragElement = null;

    layoutBoxes.forEach((layoutBox)=>{
        // Flushing the event listeners for multiple previewLoaded firings
        layoutBox.addEventListener('dragstart', dragStart);

        // Adding event listeners
        layoutBox.addEventListener('dragstart', dragStart);
    });

    entryAdditionalBoxes.forEach((entryAdditionalBox)=>{
        // Flushing the event listeners for multiple previewLoaded firings
        entryAdditionalBox.removeEventListener('dragstart', dragStart);

        // Adding event listeners
        entryAdditionalBox.addEventListener('dragstart', dragStart);
    });

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
        const zoomLevel = window.zoomScale || 1;

        const dropzoneRect = dropzone.getBoundingClientRect();
        const mouseX = (event.clientX - dropzoneRect.left) / zoomLevel;
        const mouseY = (event.clientY - dropzoneRect.top) / zoomLevel;

        if (currentDragElement) {
            handleDrop(mouseX, mouseY, this, currentDragElement);
        }

        currentDragElement = null;
    }

    function handleDrop(mouseX, mouseY, container, dragElement) {
        const uniqueId = Math.random().toString(36).substr(2, 4); // Generates a unique 4-character string

        const htmlToAppend = generateHTML(dragElement.id);
        const newElement = document.createElement('div');

        newElement.classList.add('raffleleader-section');

        newElement.innerHTML = htmlToAppend;

        if(dragElement.id === 'imageBox'){
            newElement.style.width = '500px';
            newElement.style.height = '300px';
        } else if(dragElement.id === 'entryBox'){
            newElement.style.width = '500px';
            newElement.style.height = '80px';
            newElement.id = `${raffleID}raffleID`;
            newElement.querySelector('button').addEventListener('click', (event)=>{
                event.preventDefault();
            });
        } else if(dragElement.id === 'XFollowEntry' || dragElement.id === 'XRepostEntry' || dragElement.id === 'XLikeEntry' ||
                  dragElement.id === 'instaFollowEntry' || dragElement.id === 'instaCommentEntry' || dragElement.id === 'instaLikeEntry' || 
                  dragElement.id === 'facebookFollowEntry' || dragElement.id === 'facebookCommentEntry' || dragElement.id === 'facebookLikeEntry' ||
                  dragElement.id === 'tiktokFollowEntry' || dragElement.id === 'tiktokCommentEntry' || dragElement.id === 'tiktokLikeEntry'){
            newElement.style.width = '500px';
            newElement.style.height = '75px';
            newElement.setAttribute('data-entry', dropzone.querySelector('.selected-raffleleader-section').id);
        } else if(dragElement.id === 'referEntry'){
            newElement.style.width = '500px';
            newElement.style.height = '75px';
        }

        container.appendChild(newElement);

        const rect = newElement.getBoundingClientRect();
        const centerX = mouseX - rect.width / 2;
        const centerY = mouseY - rect.height / 2;

        newElement.style.position = 'absolute';
        newElement.style.left = `${centerX}px`;
        newElement.style.top = `${centerY}px`;
        newElement.style.zIndex = window.globalZIndex;

        newElement.setAttribute('data-section-id', uniqueId);

        selectSection(newElement);

        document.dispatchEvent(layoutDrop);
    }

    function generateHTML(ID){
        switch(ID){
            case 'textBox':
                return `<div style="height: 100%; width: 100%;" data-type="textDetails" class="raffleleader-text-section">
                            <h2 style="white-space: pre-wrap; text-align: center;">Text</h2>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div>`;
                        

            case 'entryBox':
                return `<div data-type="entryDetails" class="raffleleader-entry-section">
                            <form class="raffleleader-email-submit" action="/submit-email" method="post">
                                <input class="raffleleader-email-input" type="email" name="email" placeholder="email..." required>
                                <button class="raffleleader-email-submit-btn ld-over-full" type="submit">
                                    &rarr;
                                </button>
                            </form>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div>`;

            case 'counterBox':
                return `<div style="height: 100%; width: 100%;" data-type="counterDetails" class="raffleleader-counter-section">
                            <h2>00</h2>
                            <p style="margin-top: 60px"></p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div>`;

            case 'imageBox':
                return `<div data-type="imageDetails" class="raffleleader-image-section">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="raffleleader-layer-handle-container">
                            <div class="raffleleader-to-top-handle"></div>
                            <div class="raffleleader-to-back-handle"></div>
                        </div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-bottom-right"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-left"></div>
                        <div style="display: none;" class="raffleleader-resize-handle raffleleader-resize-top-right"></div>`;
        }
    }
}