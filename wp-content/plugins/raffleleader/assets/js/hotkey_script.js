document.addEventListener('previewLoaded', () => {
    document.addEventListener('keydown', (event) => {
        const dropzone = document.getElementById('dropzone');
        const selectedElement = dropzone.querySelector('.selected-raffleleader-section');

        // Check if the event target is an input, textarea, or contentEditable element
        const isInputActive = event.target.matches('input, textarea') || event.target.isContentEditable;

        if (selectedElement) {
            if (isInputActive) {
                // Allow default behavior for input and textarea elements or contentEditable areas
                return; // Normal browser functionality like copy, paste, and text input will occur
            }

            // Custom clipboard operations for selected elements outside of input fields
            if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                event.preventDefault(); // Prevent default only if a selected element exists and hotkey is pressed
                const htmlContent = selectedElement.outerHTML;
                navigator.clipboard.writeText(htmlContent).then(() => {
                    console.log('Copied to clipboard');
                }).catch((err) => {
                    console.error('Failed to copy to clipboard', err);
                });
            } else if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
                event.preventDefault(); // Prevent default only if a selected element exists and hotkey is pressed
                navigator.clipboard.readText().then((element) => {
                    dropzone.insertAdjacentHTML('beforeend', element)
                    console.log('Pasted from clipboard');
                }).catch((err) => {
                    console.error('Failed to read from clipboard', err);
                });
            } else if (event.key === 'Delete') {
                event.preventDefault(); // Prevent default only if a selected element exists
                selectedElement.remove();
                console.log('Deleted');
            }
        }
        // If no section is selected, normal browser behavior will continue for Ctrl+C, Ctrl+V, and Delete
    });
});