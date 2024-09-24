document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        const dropzone = document.getElementById('dropzone');
        const selectedElement = dropzone.querySelector('.selected-raffleleader-section');
        const isInputActive = event.target.matches('input, textarea') || event.target.isContentEditable;

        if ((event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey) {
            event.preventDefault();
            undoAction();
            return;
        }
        
        if ((event.ctrlKey || event.metaKey) && (event.key === 'y' || (event.shiftKey && event.key === 'Z'))) {
            event.preventDefault();
            redoAction();
            return;
        }

        if (selectedElement) {
            if (isInputActive) {
                return;
            }
            if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                event.preventDefault();
                const clonedElement = selectedElement.cloneNode(true);
                const newUniqueId = `${Math.random().toString(36).substr(2, 4)}`;
                clonedElement.setAttribute('data-section-id', newUniqueId);
                const htmlContent = clonedElement.outerHTML;
                navigator.clipboard.writeText(htmlContent).then(() => {
                    console.log('Copied to clipboard');
                }).catch((err) => {
                    console.error('Failed to copy to clipboard', err);
                });
            }

            if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
                event.preventDefault();
                navigator.clipboard.readText().then((element) => {
                    dropzone.insertAdjacentHTML('beforeend', element);
                    console.log('Pasted from clipboard');
                }).catch((err) => {
                    console.error('Failed to read from clipboard', err);
                });
            } else if (event.key === 'Delete' || event.key === 'Backspace') {
                event.preventDefault();
                selectedElement.remove();
                console.log('Deleted');
            }
        }
    });
});
