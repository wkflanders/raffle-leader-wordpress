document.addEventListener('previewLoaded', () => {
    const container = document.getElementById('previewWrapper');
    container.style.display = 'flex';

    const { initialOffsetX, initialOffsetY } = centerBackground();
    let offsetX = -initialOffsetX;
    let offsetY = -initialOffsetY;
    let scale = 1;

    const scrollSensitivity = 0.15;
    const zoomSpeed = 0.015;
    window.zoomScale = 1;

    container.addEventListener('wheel', (event) => {
        event.preventDefault();

        if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            const zoomable = document.getElementById('preview');

            const { deltaX, deltaY } = event;
            const direction = deltaY < 0 ? 1 : -1;
            window.zoomScale += direction * zoomSpeed;
            window.zoomScale = Math.max(0.1, window.zoomScale);
            zoomable.style.transform = `scale(${window.zoomScale})`;
        } else {
            let dy = event.deltaY * scrollSensitivity;
            let minOffsetY = Math.min(window.innerHeight - container.offsetHeight * scale, 0);
            let maxOffsetY = 0;
            let newOffsetY = Math.min(Math.max(offsetY - dy, minOffsetY), maxOffsetY);

            offsetY = newOffsetY;

            requestAnimationFrame(() => {
                container.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
            });
        }
    });

    function centerBackground() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const backgroundWidth = viewportWidth * 1.5;
        const backgroundHeight = viewportHeight * 2;

        const offsetX = (backgroundWidth - viewportWidth) / 2;
        const offsetY = (backgroundHeight - viewportHeight) / 1.5;

        container.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
        return { initialOffsetX: offsetX, initialOffsetY: offsetY };
    }

    // DEPRECATED (maybe will revisit in the future)

    // let isDragging = false;
    // let lastX, lastY;
    // let offsetX = 0, offsetY = 0;

    // // Set and apply initial offset to center the background
    // const { initialOffsetX, initialOffsetY } = centerBackground();
    // offsetX = -initialOffsetX;
    // offsetY = -initialOffsetY;

    // container.addEventListener('mousedown', (e) => {
    //     if(e.target === container){
    //         isDragging = true;
    //         lastX = e.clientX;
    //         lastY = e.clientY;
    //         container.style.cursor = 'grabbing';
    //     }
    // });

    // document.addEventListener('mousemove', (e) => {
    //     if (isDragging) {
    //         e.preventDefault();

    //         let dx = e.clientX - lastX;
    //         let dy = e.clientY - lastY;

    //         // Update the last position
    //         lastX = e.clientX;
    //         lastY = e.clientY;

    //         // Calculate potential new position with boundary checks
    //         let newOffsetX = Math.min(Math.max(offsetX + dx, window.innerWidth - container.offsetWidth), 0);
    //         let newOffsetY = Math.min(Math.max(offsetY + dy, window.innerHeight - container.offsetHeight), 0);

    //         // Update the offset
    //         offsetX = newOffsetX;
    //         offsetY = newOffsetY;

    //         // Apply the position
    //         requestAnimationFrame(() => {
    //             container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    //         });
    //     }
    // });

    // document.addEventListener('mouseup', () => {
    //     isDragging = false;
    //     container.style.cursor = 'default';
    // });

    // function centerBackground() {
    //     const viewportWidth = window.innerWidth;
    //     const viewportHeight = window.innerHeight;
    //     const backgroundWidth = viewportWidth * 1.5;  // Assuming 150% of the viewport
    //     const backgroundHeight = viewportHeight * 2;

    //     const offsetX = (backgroundWidth - viewportWidth) / 2;
    //     const offsetY = (backgroundHeight - viewportHeight) / 1.5;

    //     container.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
    //     return { initialOffsetX: offsetX, initialOffsetY: offsetY };
    // }
});