window.globalZIndex = 10;

const repositionDrop = new CustomEvent('repositionDrop');
const resizeDrop = new CustomEvent('repositionDrop');

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
                    const minWidth = 50; // Minimum width constraint
                    const minHeight = 50; // Minimum height constraint
                    
                    let newWidth = originalWidth + (e.clientX - originalMouseX) / zoomLevel;
                    let newHeight = originalHeight + (e.clientY - originalMouseY) / zoomLevel;
                    let newLeft = originalLeft;
                    let newTop = originalTop;
                
                    if (handleClass.includes('left')) {
                        newWidth = originalWidth - (e.clientX - originalMouseX) / zoomLevel;
                        newLeft = originalLeft + (e.clientX - originalMouseX) / zoomLevel;
                    }
                    if (handleClass.includes('top')) {
                        newHeight = originalHeight - (e.clientY - originalMouseY) / zoomLevel;
                        newTop = originalTop + (e.clientY - originalMouseY) / zoomLevel;
                    }
                
                    // Apply minimum size constraints
                    newWidth = Math.max(minWidth, newWidth);
                    newHeight = Math.max(minHeight, newHeight);
                
                    // Adjust left position if minimum width is reached
                    if (handleClass.includes('left') && newWidth === minWidth) {
                        newLeft = originalLeft + originalWidth - minWidth;
                    }
                
                    // Adjust top position if minimum height is reached
                    if (handleClass.includes('top') && newHeight === minHeight) {
                        newTop = originalTop + originalHeight - minHeight;
                    }
                
                    // Boundary checks for resizing within the dropzone
                    let maxRight = dropzone.offsetWidth - newLeft;
                    let maxBottom = dropzone.offsetHeight - newTop;
                
                    newWidth = Math.min(newWidth, maxRight); // Prevent resizing beyond the right boundary of the dropzone
                    newHeight = Math.min(newHeight, maxBottom); // Prevent resizing beyond the bottom boundary of the dropzone
                
                    if (handleClass.includes('right')) {
                        newWidth = Math.min(dropzone.offsetWidth - newLeft, originalWidth + (e.clientX - originalMouseX) / zoomLevel);
                    }
                    if (handleClass.includes('bottom')) {
                        newHeight = Math.min(dropzone.offsetHeight - newTop, originalHeight + (e.clientY - originalMouseY) / zoomLevel);
                    }
                    if (handleClass.includes('left')) {
                        const deltaX = (originalMouseX - e.clientX) / zoomLevel;
                        newWidth = Math.max(minWidth, originalWidth + deltaX);
                        newLeft = originalLeft + originalWidth - newWidth;
                        if (newLeft < 0) {
                            newLeft = 0;
                            newWidth = originalLeft + originalWidth;
                        }
                    }
                    if (handleClass.includes('top')) {
                        const deltaY = (originalMouseY - e.clientY) / zoomLevel;
                        newHeight = Math.max(minHeight, originalHeight + deltaY);
                        newTop = originalTop + originalHeight - newHeight;
                        if (newTop < 0) {
                            newTop = 0;
                            newHeight = originalTop + originalHeight;
                        }
                    }
                
                    // Snapping Logic for resizing
                    const snapMargin = 5 / zoomLevel;
                    document.querySelectorAll('.raffleleader-section').forEach(otherEl => {
                        if (otherEl === el) return;
                
                        const otherRect = otherEl.getBoundingClientRect();
                        const scaledOtherRect = {
                            left: (otherRect.left - dropzone.getBoundingClientRect().left) / zoomLevel,
                            right: (otherRect.right - dropzone.getBoundingClientRect().left) / zoomLevel,
                            top: (otherRect.top - dropzone.getBoundingClientRect().top) / zoomLevel,
                            bottom: (otherRect.bottom - dropzone.getBoundingClientRect().top) / zoomLevel
                        };
                
                        // Snap right edge to other left edges and right to right
                        if (handleClass.includes('right')) {
                            if (Math.abs(scaledOtherRect.left - (newLeft + newWidth)) < snapMargin) {
                                newWidth = scaledOtherRect.left - newLeft;
                            }
                            if (Math.abs(scaledOtherRect.right - (newLeft + newWidth)) < snapMargin) {
                                newWidth = scaledOtherRect.right - newLeft;
                            }
                        }
                        // Snap left edge to other right edges and left to left
                        if (handleClass.includes('left')) {
                            if (Math.abs(scaledOtherRect.right - newLeft) < snapMargin) {
                                newLeft = scaledOtherRect.right;
                                newWidth = originalLeft + originalWidth - newLeft;
                            }
                            if (Math.abs(scaledOtherRect.left - newLeft) < snapMargin) {
                                newLeft = scaledOtherRect.left;
                                newWidth = originalLeft + originalWidth - newLeft;
                            }
                        }
                        // Snap top edge to other bottom edges and top to top
                        if (handleClass.includes('top')) {
                            if (Math.abs(scaledOtherRect.bottom - newTop) < snapMargin) {
                                newTop = scaledOtherRect.bottom;
                                newHeight = originalTop + originalHeight - newTop;
                            }
                            if (Math.abs(scaledOtherRect.top - newTop) < snapMargin) {
                                newTop = scaledOtherRect.top;
                            }
                        }
                        // Snap bottom edge to other top edges and bottom to bottom
                        if (handleClass.includes('bottom')) {
                            if (Math.abs(scaledOtherRect.top - (newTop + newHeight)) < snapMargin) {
                                newHeight = scaledOtherRect.top - newTop;
                            }
                            if (Math.abs(scaledOtherRect.bottom - (newTop + newHeight)) < snapMargin) {
                                newHeight = scaledOtherRect.bottom - newTop;
                            }
                        }
                    });
                
                    // Final application of minimum size constraints
                    newWidth = Math.max(minWidth, newWidth);
                    newHeight = Math.max(minHeight, newHeight);
                
                    // Apply the adjusted dimensions and position
                    el.style.width = `${newWidth}px`;
                    el.style.height = `${newHeight}px`;
                    el.style.left = `${newLeft}px`;
                    el.style.top = `${newTop}px`;
                }
        
                function stopResize() {
                    document.removeEventListener('mousemove', resize);
                    document.removeEventListener('mouseup', stopResize);
                    document.dispatchEvent(repositionDrop);
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
            document.dispatchEvent(repositionDrop);
        }
    }

    window.applyLogicToElement = applyLogicToElement;

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
