window.zoomScale = 1;

document.addEventListener('previewLoaded', ()=>{
    const viewport = document.getElementById('previewWrapper');
    const zoomable = document.getElementById('preview');
    const ZOOM_SPEED = 0.1;

    viewport.addEventListener('wheel', (event) => {
        event.preventDefault();
        const { deltaX, deltaY } = event;
        const direction = deltaY < 0 ? 1 : -1;
        window.zoomScale += direction * ZOOM_SPEED;
        window.zoomScale = Math.max(0.1, window.zoomScale); // Limit zoom out
        zoomable.style.transform = `scale(${window.zoomScale})`;
    });
})
