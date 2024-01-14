window.addEventListener('load', ()=>{
    const viewport = document.getElementById('previewWrapper');
    const zoomable = document.getElementById('preview');
    let scale = 1;
    const ZOOM_SPEED = 0.1;

    viewport.addEventListener('wheel', (event) => {
        event.preventDefault();
        const { deltaX, deltaY } = event;
        const direction = deltaY < 0 ? 1 : -1;
        scale += direction * ZOOM_SPEED;
        scale = Math.max(0.1, scale); // Limit zoom out
        zoomable.style.transform = `scale(${scale})`;
    });
})
