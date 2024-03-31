window.zoomScale = 1;

document.addEventListener('generalSettingsLoaded', ()=>{
    const viewport = document.getElementById('previewWrapper');

    // Flushing event listeners
    viewport.removeEventListener('wheel', handleZoom);
    viewport.addEventListener('wheel', handleZoom);

    function handleZoom(event){
        const zoomable = document.getElementById('preview');

        event.preventDefault();
        const ZOOM_SPEED = 0.03;
        const { deltaX, deltaY } = event;
        const direction = deltaY < 0 ? 1 : -1;
        window.zoomScale += direction * ZOOM_SPEED;
        window.zoomScale = Math.max(0.1, window.zoomScale); // Limit zoom out
        zoomable.style.transform = `scale(${window.zoomScale})`;
    }
})
