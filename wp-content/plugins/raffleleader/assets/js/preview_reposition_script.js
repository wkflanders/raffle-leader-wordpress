window.globalZIndex = 10;

document.addEventListener('previewLoaded', ()=>{

    const dropzone = document.getElementById('dropzone');
    const preview = document.getElementById('preview');
    // Function to apply resizing and dragging logic to an element
    function applyLogicToElement(el) {
        const resizeHandles = el.querySelectorAll('.raffleleader-resize-handle');
        const toTopHandles = el.querySelectorAll('.raffleleader-to-top-handle');
        const toBackHandles = el.querySelectorAll('.raffleleader-to-back-handle');
        let originalWidth, originalHeight, originalMouseX, originalMouseY, originalLeft, originalTop;
        let isDragging = false, initialDrag = false, dragStartX, dragStartY;
    
        function increaseZIndex() {
            globalZIndex++;
            el.style.zIndex = globalZIndex;
        }

        function decreaseZIndex() {
            el.style.zIndex = 1;
        }

        toTopHandles.forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                e.preventDefault();

                increaseZIndex();
            });
        });

        toBackHandles.forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                e.preventDefault();

                decreaseZIndex();
            });
        });
    
        resizeHandles.forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                e.preventDefault();
        
                const el = this.parentElement; // Element being resized
                const dropzone = document.querySelector('#dropzone'); // Container that limits resizing
                const originalWidth = el.offsetWidth;
                const originalHeight = el.offsetHeight;
                const originalMouseX = e.clientX;
                const originalMouseY = e.clientY;
                const originalLeft = el.offsetLeft;
                const originalTop = el.offsetTop;
        
                const handleClass = handle.className;
        
                document.addEventListener('mousemove', resize);
                document.addEventListener('mouseup', stopResize);
        
                function resize(e) {
                    const zoomLevel = window.zoomScale || 1; // Adjust scaling based on zoom level if applicable
                    let newWidth = originalWidth;
                    let newHeight = originalHeight;
                    let newLeft = originalLeft;
                    let newTop = originalTop;
        
                    if (handleClass.includes('right')) {
                        newWidth = Math.min(dropzone.offsetWidth - newLeft, originalWidth + (e.clientX - originalMouseX) / zoomLevel);
                    }
                    if (handleClass.includes('bottom')) {
                        newHeight = Math.min(dropzone.offsetHeight - newTop, originalHeight + (e.clientY - originalMouseY) / zoomLevel);
                    }
                    if (handleClass.includes('left')) {
                        const deltaX = (originalMouseX - e.clientX) / zoomLevel;
                        newWidth = originalWidth + deltaX;
                        if (newWidth > 50) {
                            newLeft = originalLeft - deltaX;
                            if (newLeft < 0) {  // Prevent moving out of the left boundary
                                newLeft = 0;
                                newWidth = originalWidth + originalLeft; // Adjust width to the max possible within the boundary
                            }
                        } else {
                            newWidth = 50; // Enforce minimum width
                        }
                    }
                    if (handleClass.includes('top')) {
                        const deltaY = (originalMouseY - e.clientY) / zoomLevel;
                        newHeight = originalHeight + deltaY;
                        if (newHeight > 10) {
                            newTop = originalTop - deltaY;
                            if (newTop < 0) { // Prevent moving out of the top boundary
                                newTop = 0;
                                newHeight = originalHeight + originalTop; // Adjust height to the max possible within the boundary
                            }
                        } else {
                            newHeight = 10; // Enforce minimum height
                        }
                    }
        
                    // Apply the adjusted dimensions and position
                    el.style.width = `${newWidth}px`;
                    el.style.height = `${newHeight}px`;
                    el.style.left = `${newLeft}px`;
                    el.style.top = `${newTop}px`;
                }
        
                function stopResize() {
                    document.removeEventListener('mousemove', resize);
                    document.removeEventListener('mouseup', stopResize);
                }
            });
        });

        // Dragging logic
        el.addEventListener('mousedown', function(e) {
            const zoomLevel = window.zoomScale || 1; // Assuming scale is global

            e.preventDefault();
            if (e.target.classList.contains('raffleleader-resize-handle')) return;

            isDragging = true;
            initialDrag = true;
            dragStartX = (e.clientX - el.getBoundingClientRect().left) / zoomLevel;
            dragStartY = (e.clientY - el.getBoundingClientRect().top) / zoomLevel;

            // const throttledDrag = throttle(drag, 10);

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
        
            document.querySelectorAll('.raffleleader-section').forEach(otherEl => {
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
                    if (node.classList && node.classList.contains('raffleleader-section')) {
                        applyLogicToElement(node);
                    }
                });
            }
        });
    }

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Creating a MutationObserver to observe for new elements
    const observer = new MutationObserver(handleNewElements);
    const config = { childList: true, subtree: true };
    observer.observe(dropzone, config);

    // Apply logic to existing section elements
    document.querySelectorAll('.raffleleader-section').forEach(el => {
        applyLogicToElement(el);
    });
});
