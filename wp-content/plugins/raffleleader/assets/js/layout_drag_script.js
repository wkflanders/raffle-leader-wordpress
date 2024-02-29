document.addEventListener('previewLoaded', () => {
    const dropzone = document.getElementById('dropzone');
    const layoutBoxes = document.querySelectorAll('.layout-option-box');
    const entryAdditionalBoxes = document.querySelectorAll('.dropdown-additional-entry');

    let currentDragElement = null;

    layoutBoxes.forEach((layoutBox)=>{
        layoutBox.addEventListener('dragstart', dragStart);
    });

    entryAdditionalBoxes.forEach((entryAdditionalBox)=>{
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
        const htmlToAppend = generateHTML(dragElement.id);
        const newElement = document.createElement('div');
        const entryFormID = `entry${Math.floor(Math.random() * 1000)}`;

        newElement.classList.add('section');

        if(dragElement.id === 'imageBox'){
            newElement.style.width = '400px';
            newElement.style.height = '300px';
        } else if(dragElement.id === 'entryBox'){
            newElement.style.width = '500px';
            newElement.style.height = '150px';
            newElement.id = entryFormID;
        } else if(dragElement.id === 'XFollowEntry' || dragElement.id === 'XRepostEntry' || dragElement.id === 'XLikeEntry'){
            newElement.style.width = '500px';
            newElement.style.height = '75px';
            newElement.setAttribute('data-entry', dropzone.querySelector('.selected-section').id);
        }

        newElement.innerHTML = htmlToAppend;
        container.appendChild(newElement);

        const rect = newElement.getBoundingClientRect();
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

            case 'entryBox':
                return `<div data-type="entryDetails" class="entry-section">
                            <form action="/submit-email" method="post">
                                <input type="email" name="email" placeholder="email...">
                                <button type="submit">&rarr;</button>
                            </form>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;

            case 'counterBox':
                return `<div style="height: 100%; width: 100%;" data-type="counterDetails" class="counter-section">
                            <h2>00</h2>
                            <p></p>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;

            case 'imageBox':
                return `<div data-type="imageDetails" class="image-section">
                            <p>Insert An Image Here</p>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`;

            case 'XFollowEntry':
                return `<div data-type="XFollowEntry" class="additional-entry-section">
                            <div class="additional-entry-text-column">
                                <h2>Follow us on X/Twitter</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="additional-entry-button-column">
                                <button>+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`

            case 'XRepostEntry':
                return `<div data-type="XRepostEntry" class="additional-entry-section">
                            <div class="additional-entry-text-column">
                                <h2>Repost us on X/Twitter</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="additional-entry-button-column">
                                <button>+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`

            case 'XLikeEntry':
                return `<div data-type="XLikeEntry" class="additional-entry-section">
                            <div class="additional-entry-text-column">
                                <h2>Like us on X/Twitter</h2>
                                <p>for an extra entry!</p>
                            </div>
                            <div class="additional-entry-button-column">
                                <button>+1</button>
                            </div>
                        </div>
                        <div style="display: none;" class="resize-handle"></div>`
        }
    }
});