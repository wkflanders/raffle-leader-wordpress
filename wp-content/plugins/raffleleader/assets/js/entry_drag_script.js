document.addEventListener('previewLoaded', ()=>{
    const entryAdditionalBoxes = document.querySelectorAll('.dropdown-additional-entry');
    const dropzone = document.getElementById('dropzone');

    dropzone.addEventListener('dragover', entryDragOver);
    dropzone.addEventListener('drop', entryDrop);

    let currentDragElement = null;

    entryAdditionalBoxes.forEach((entryAdditionalBox)=>{
        entryAdditionalBox.addEventListener('dragstart', entryDragStart);
    });

    function entryDragStart(event){  
        currentDragElement = event.target;
    }

    function entryDragOver(event){
        event.preventDefault();
    }

    function entryDrop(event){
        event.preventDefault();

        const parentEntry = document.querySelector('.selected-section');

        if (currentDragElement) {
            entryHandleDrop(parentEntry, currentDragElement);
        }

        currentDragElement = null;
    }

    function entryHandleDrop(parentEntryContainer, entryElement){
        const htmlToAppend = generateHTML(entryElement.id, parentEntryContainer.id);
        const newElement = document.createElement('div');
        newElement.classList.add('additional-entry-section')
        
        // newElement.classList.add('section');

        newElement.innerHTML = htmlToAppend;
        parentEntryContainer.insertBefore(newElement, parentEntryContainer.querySelector('.resize-handle'));

        let currentHeight = parseInt(parentEntryContainer.style.height);
        currentHeight += parseInt(getComputedStyle(newElement).height);
        parentEntryContainer.style.height = `${currentHeight}px`;
    }

    function generateHTML(ID){
        switch(ID){
            case 'XFollowEntry':
                return `<div data-type="XFollowEntry" class="XEntry">
                            <h2 style="white-space: pre-wrap;">Test</h2>
                        </div>`
        }
    }    
});