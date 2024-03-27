document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('insert-raffleleader-shortcode');
    const modal = document.getElementById('raffleModal');
    const closeButton = modal.querySelector('.close');
    const raffleList = document.getElementById('raffleList');
    const insertButton = document.getElementById('insertRaffle');

    // Function to fetch raffles and populate the modal
    const handleClassicEditorModalRaffles = () => {
        fetch(raffleleader_classic_editor_script_object.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'action': 'handleClassicEditorModalRaffles', // The WP action hook suffix for the AJAX call
                'security': raffleleader_classic_editor_script_object.security, // Include the nonce in the request
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                populateModal(data.data);
                modal.style.display = 'block';
            } else {
                console.error('Failed to fetch raffles:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching raffles:', error);
        });
    };

    // Function to populate the modal with raffles
    const populateModal = (raffles) => {
        raffleList.innerHTML = ''; // Clear existing list items
        raffles.forEach(raffle => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-id', raffle.raffle_id);
            listItem.textContent = `${raffle.name}`;
            raffleList.appendChild(listItem);
        });
    };

    // Event listener to open the modal and fetch raffles
    button.addEventListener('click', (e) => {
        e.preventDefault();
        handleClassicEditorModalRaffles(); // Now fetching raffles when the modal is opened
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    raffleList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            raffleList.querySelectorAll('li').forEach(li => {
                li.classList.remove('selected');
            });
            e.target.classList.add('selected');
            raffleList.dataset.selectedRaffle = e.target.dataset.id;
        }
    });

    insertButton.addEventListener('click', () => {
        const selectedRaffleId = raffleList.dataset.selectedRaffle;
        if (selectedRaffleId) {
            const shortcode = `[raffleleader id="${selectedRaffleId}"]`;
            if (tinyMCE.activeEditor) {
                tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);
            } else {
                const textEditor = document.getElementById('content');
                if (textEditor) {
                    textEditor.value += shortcode;
                }
            }
            modal.style.display = 'none';
        }
    });
});
