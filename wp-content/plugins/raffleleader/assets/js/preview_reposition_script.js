document.addEventListener('previewLoaded', ()=>{

    let highestZIndex = 10; // Global z-index
    const dropzone = document.getElementById('dropzone');
    // Function to apply resizing and dragging logic to an element
    function applyLogicToElement(el) {
        const resizeHandle = el.querySelector('.resize-handle');

        // Variables for resizing
        let originalWidth, originalHeight, originalMouseX, originalMouseY;

        // Variables for dragging
        let isDragging = false, initialDrag = false, dragStartX, dragStartY;

        // Function to update z-index
        function updateZIndex() {
            highestZIndex++;
            el.style.zIndex = highestZIndex;
        }

        // Resizing logic
        resizeHandle.addEventListener('mousedown', function(e) {
            e.preventDefault();
            updateZIndex();

            originalWidth = el.offsetWidth;
            originalHeight = el.offsetHeight;
            originalMouseX = e.clientX;
            originalMouseY = e.clientY;

            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
        });

        function resize(e) {
            const zoomLevel = window.zoomScale;
        
            let newWidth = originalWidth + (e.clientX - originalMouseX) / zoomLevel;
            let newHeight = originalHeight + (e.clientY - originalMouseY) / zoomLevel;
        
            const snapMargin = 10; // Distance within which snapping occurs
            const elRect = el.getBoundingClientRect(); // Get the element's rect before looping
        
            document.querySelectorAll('.section').forEach(otherEl => {
                if (otherEl === el) return;
        
                const rect = otherEl.getBoundingClientRect();
        
                // Snap horizontally
                if (Math.abs(rect.right - elRect.left - newWidth) < snapMargin) {
                    newWidth = rect.right - elRect.left;
                } else if (Math.abs(rect.left - elRect.left - newWidth) < snapMargin) {
                    newWidth = rect.left - elRect.left;
                }
        
                // Snap vertically
                if (Math.abs(rect.bottom - elRect.top - newHeight) < snapMargin) {
                    newHeight = rect.bottom - elRect.top;
                } else if (Math.abs(rect.top - elRect.top - newHeight) < snapMargin) {
                    newHeight = rect.top - elRect.top;
                }
            });
        
            // Boundary checks after snapping logic
            const parentRect = dropzone.getBoundingClientRect();
            let maxWidth = parentRect.width - (elRect.left - parentRect.left);
            let maxHeight = parentRect.height - (elRect.top - parentRect.top);
        
            if (newWidth > maxWidth) newWidth = maxWidth;
            if (newHeight > maxHeight) newHeight = maxHeight;
        
            // Set new dimensions with snapping and boundaries applied
            el.style.width = `${Math.max(100, newWidth)}px`;
            el.style.height = `${Math.max(100, newHeight)}px`;
        }

        function stopResize() {
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
        }

        // Dragging logic
        el.addEventListener('mousedown', function(e) {
            e.preventDefault();
            if (e.target === resizeHandle) return;
            updateZIndex();

            isDragging = true;
            initialDrag = true;
            dragStartX = e.clientX - el.getBoundingClientRect().left;
            dragStartY = e.clientY - el.getBoundingClientRect().top;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        });

        function drag(e) {
            if (!isDragging) return;
            const zoomLevel = window.zoomScale; // Assuming scale is global
            const parentRect = dropzone.getBoundingClientRect();

            let mouseX = (e.clientX - parentRect.left) / zoomLevel;
            let mouseY = (e.clientY - parentRect.top) / zoomLevel;

            let x = mouseX - dragStartX;
            let y = mouseY - dragStartY;

            // Correcting the initial position calculation
            // if (initialDrag) {
            //     x += el.offsetLeft;
            //     y += el.offsetTop;
            //     initialDrag = false; // Reset the flag after the initial drag
            // }
        
            // Boundary checks
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            let rightBoundary = (parentRect.width / zoomLevel) - el.offsetWidth;
            let bottomBoundary = (parentRect.height / zoomLevel) - el.offsetHeight;
            if (x > rightBoundary) x = rightBoundary;
            if (y > bottomBoundary) y = bottomBoundary;
        
            // Snapping Logic
            const snapMargin = 10 / zoomLevel;
        
            document.querySelectorAll('.section').forEach(otherEl => {
                if (otherEl === el) return;
        
                const otherRect = otherEl.getBoundingClientRect();
                const scaledOtherRect = {
                    left: (otherRect.left - parentRect.left) / zoomLevel,
                    right: (otherRect.right - parentRect.left) / zoomLevel,
                    top: (otherRect.top - parentRect.top) / zoomLevel,
                    bottom: (otherRect.bottom - parentRect.top) / zoomLevel
                };
        
                // Adjusted Horizontal snapping
                if (Math.abs(scaledOtherRect.left - x - el.offsetWidth) < snapMargin) {
                    x = scaledOtherRect.left - el.offsetWidth;
                } else if (Math.abs(scaledOtherRect.right - x) < snapMargin) {
                    x = scaledOtherRect.right;
                }
        
                // Vertical snapping
                if (Math.abs(scaledOtherRect.top - y) < snapMargin) {
                    y = scaledOtherRect.top;
                } else if (Math.abs(scaledOtherRect.bottom - y) < snapMargin) {
                    y = scaledOtherRect.bottom;
                } else if (Math.abs(scaledOtherRect.top - y - el.offsetHeight) < snapMargin) {
                    y = scaledOtherRect.top - el.offsetHeight;
                } else if (Math.abs(scaledOtherRect.bottom - y - el.offsetHeight) < snapMargin) {
                    y = scaledOtherRect.bottom - el.offsetHeight;
                }
            });
        
            el.style.position = 'absolute';
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
        }

        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }
    }

    // Function to handle new elements added to the DOM
    function handleNewElements(mutationsList) {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.classList && node.classList.contains('section')) {
                        applyLogicToElement(node);
                    }
                });
            }
        });
    }

    // Creating a MutationObserver to observe for new elements
    const observer = new MutationObserver(handleNewElements);
    const config = { childList: true, subtree: true };
    observer.observe(dropzone, config);

    // Apply logic to existing .section elements
    document.querySelectorAll('.section').forEach(el => {
        applyLogicToElement(el);
    });
});


// document.addEventListener('previewLoaded', ()=>{
//     const dropzone = document.getElementById('dropzone');

//     dropzone.addEventListener('dragover', handleDragOver);
//     dropzone.addEventListener('drop', handleDrop);

//      // Initial elements loaded in

//      const sections = document.querySelectorAll('.section');
//      sections.forEach((section)=>{
//         makeElementDraggable(section);
//      })
    
//     // Mutation observer for dropzone container

//     const observer = new MutationObserver((mutations) => {
//         mutations.forEach(mutation => {
//             if(mutation.addedNodes.length){
//                 mutation.addedNodes.forEach(newNode => {
//                     if(newNode.classList && newNode.classList.contains('section')) {
//                         makeElementDraggable(newNode);
//                     }
//                 })
//             }
//         })
//     })

//     observer.observe(dropzone, { childList: true });

//     // Utility functions for handling the drag

//     function makeElementDraggable(element){
//         element.setAttribute('draggable', true);
//         element.addEventListener('dragstart', handleDragStart);
//         element.addEventListener('dragend', handleDragEnd);
//     }

//     function getDragAfterElement(container, x, y){
//         const draggableElements = [...container.querySelectorAll('.section:not(.dragging)')];
//         const closestElement = draggableElements.reduce((closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offset = y - box.top - box.height / 2;

//             if(offset < 0 && offset > closest.offset){
//                 return { offset: offset, element: child };
//             } else {
//                 return closest;
//             }
//         }, { offset: Number.NEGATIVE_INFINITY });

//         return closestElement.element ? closestElement.element : null;
//     }

//     // Event handler callbacks for dragging

//     function handleDragStart(event){
//         event.target.classList.add('dragging');
//     }

//     function handleDragOver(event){
//         event.preventDefault();
//     }

//     function handleDrop(event){
//         event.preventDefault();
//         const afterElement = getDragAfterElement(dropzone, event.clientX, event.clientY);
//         const draggableElement = document.querySelector('.dragging');

//         if(afterElement === null){
//             if(draggableElement){
//                 dropzone.append(draggableElement);
//             }
//         } else {
//             try{
//                 dropzone.insertBefore(draggableElement, afterElement);
//             } catch {}
//         }
//     }

//     function handleDragEnd(event){
//         event.target.classList.remove('dragging');
//     }

// });