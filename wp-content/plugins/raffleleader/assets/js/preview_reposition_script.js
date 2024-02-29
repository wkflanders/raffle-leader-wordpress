document.addEventListener('previewLoaded', ()=>{

    let highestZIndex = 10; // Global z-index
    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
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
            const zoomLevel = window.zoomScale || 1;  // Ensure there's a default zoom level
        
            let newWidth = originalWidth + (e.clientX - originalMouseX) / zoomLevel;
            let newHeight = originalHeight + (e.clientY - originalMouseY) / zoomLevel;
        
            const snapMargin = 5 / zoomLevel;  // Snap margin should also consider zoom level
            const elRect = el.getBoundingClientRect();
        
            document.querySelectorAll('.section').forEach(otherEl => {
                if (otherEl === el) return;
        
                const rect = otherEl.getBoundingClientRect();
        
                // Adjust snapping calculations for zoom
                if (Math.abs(rect.right - elRect.left - (newWidth * zoomLevel)) < snapMargin) {
                    newWidth = (rect.right - elRect.left) / zoomLevel;
                } else if (Math.abs(rect.left - elRect.left - (newWidth * zoomLevel)) < snapMargin) {
                    newWidth = (rect.left - elRect.left) / zoomLevel;
                }
            
                // Snapping for height
                if (Math.abs(rect.bottom - elRect.top - (newHeight * zoomLevel)) < snapMargin) {
                    newHeight = (rect.bottom - elRect.top) / zoomLevel;
                } else if (Math.abs(rect.top - elRect.top - (newHeight * zoomLevel)) < snapMargin) {
                    newHeight = (rect.top - elRect.top) / zoomLevel;
                }
            });
        
            // Adjust boundary checks for zoom
            const parentRectHeight = dropzone.getBoundingClientRect();
            const parentRectWidth = preview.getBoundingClientRect();
            let maxWidth = (parentRectWidth.width / zoomLevel) - ((elRect.left - parentRectWidth.left) / zoomLevel);
            let maxHeight = (parentRectHeight.height / zoomLevel) - ((elRect.top - parentRectHeight.top) / zoomLevel);
        
            if (newWidth > maxWidth) newWidth = maxWidth;
            if (newHeight > maxHeight) newHeight = maxHeight;
        
            // Apply the adjusted dimensions
            el.style.width = `${Math.max(50, newWidth)}px`;
            el.style.height = `${Math.max(10, newHeight)}px`;
        }

        function stopResize() {
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
        }

        // Dragging logic
        el.addEventListener('mousedown', function(e) {
            const zoomLevel = window.zoomScale || 1; // Assuming scale is global

            e.preventDefault();
            if (e.target === resizeHandle) return;
            updateZIndex();

            isDragging = true;
            initialDrag = true;
            dragStartX = (e.clientX - el.getBoundingClientRect().left) / zoomLevel;
            dragStartY = (e.clientY - el.getBoundingClientRect().top) / zoomLevel;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        });

        function drag(e) {
            if (!isDragging) return;
            const zoomLevel = window.zoomScale || 1; // Assuming scale is global
            const parentRectHeight = dropzone.getBoundingClientRect();
            const parentRectWidth = preview.getBoundingClientRect();

            let mouseX = (e.clientX - parentRectWidth.left) / zoomLevel;
            let mouseY = (e.clientY - parentRectHeight.top) / zoomLevel;

            let x = mouseX - dragStartX;
            let y = mouseY - dragStartY;
        
            // Boundary checks
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            let rightBoundary = (parentRectWidth.width / zoomLevel) - el.offsetWidth;
            let bottomBoundary = (parentRectHeight.height / zoomLevel) - el.offsetHeight;
            if (x > rightBoundary) x = rightBoundary;
            if (y > bottomBoundary) y = bottomBoundary;
        
            // Snapping Logic
            const snapMargin = 5 / zoomLevel;
        
            document.querySelectorAll('.section').forEach(otherEl => {
                if (otherEl === el) return;
        
                const otherRect = otherEl.getBoundingClientRect();
                const scaledOtherRect = {
                    left: (otherRect.left - parentRectWidth.left) / zoomLevel,
                    right: (otherRect.right - parentRectWidth.left) / zoomLevel,
                    top: (otherRect.top - parentRectHeight.top) / zoomLevel,
                    bottom: (otherRect.bottom - parentRectHeight.top) / zoomLevel
                };
        
                // Adjusted Horizontal snapping
                if (Math.abs(scaledOtherRect.left - x - el.offsetWidth) < snapMargin) {
                    x = scaledOtherRect.left - el.offsetWidth;
                } else if (Math.abs(scaledOtherRect.right - x) < snapMargin) {
                    x = scaledOtherRect.right;
                }

                // New Horizontal snapping - left to left and right to right
                if (Math.abs(scaledOtherRect.left - x) < snapMargin) {
                    x = scaledOtherRect.left;
                } else if (Math.abs(scaledOtherRect.right - x - el.offsetWidth) < snapMargin) {
                    x = scaledOtherRect.right - el.offsetWidth;
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

// Depreceated

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