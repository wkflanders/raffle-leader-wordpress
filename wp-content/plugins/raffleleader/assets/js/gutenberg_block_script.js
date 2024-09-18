const { registerBlockType } = wp.blocks;
const { Button, Modal, SelectControl, TextControl } = wp.components;
const { useState, useEffect } = wp.element;
const { BlockControls, useBlockProps } = wp.blockEditor;
const { createElement: el, Fragment } = wp.element;

const RaffleSelector = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [raffles, setRaffles] = useState([]);
    const [selectedRaffle, setSelectedRaffle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            fetchRaffles();
        }
    }, [isOpen]);

    const fetchRaffles = () => {
        setIsLoading(true);
        setError('');
        fetch(raffleleader_gutenberg_script_object.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'action': 'handleClassicEditorModalRaffles',
                'security': raffleleader_gutenberg_script_object.security,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setRaffles(data.data.map(raffle => ({
                    value: raffle.raffle_id,
                    label: raffle.name
                })));
            } else {
                console.error('Failed to fetch raffles:', data);
                setError(data.data || 'Failed to fetch raffles.');
            }
        })
        .catch(error => {
            console.error('Error fetching raffles:', error);
            setError('Error fetching raffles.');
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const handleSelect = () => {
        if (selectedRaffle) {
            onSelect(selectedRaffle);
            setIsOpen(false);
            setSelectedRaffle('');
        }
    };

    return el(Fragment, null,
        el(Button, {
            onClick: () => setIsOpen(true),
            isSecondary: true
        }, "Select Raffle"),
        isOpen ? el(Modal, {
            title: "Select a Raffle",
            onRequestClose: () => setIsOpen(false)
        },
            isLoading ? el('p', null, 'Loading raffles...') :
            error ? el('p', { style: { color: 'red' } }, error) :
            el(SelectControl, {
                label: "Choose a raffle",
                value: selectedRaffle,
                options: raffles,
                onChange: setSelectedRaffle
            }),
            el(Button, {
                isPrimary: true,
                onClick: handleSelect,
                disabled: !selectedRaffle || isLoading || error
            }, "Insert Raffle")
        ) : null
    );
};

registerBlockType('raffleleader/raffle-block', {
    title: 'Raffle Leader',
    icon: el(
        'svg',
        { 
            xmlns: 'http://www.w3.org/2000/svg', 
            viewBox: '0 0 22 14',
            width: '24', // Optional: set width and height as needed
            height: '24'
        },
        el('path', { fill: '#1501FE', d: 'M14.5 11.4h4c1 0 1.4-.3 1.3-1.2V4.8c0-1-.5-1-1-1l-6.6-.2a3 3 0 0 1-1.8-.7l-.3-.2c-.6-.6-1.2-1-2-1H3.4c-.8 0-1.5 0-1.5 1.1V8c.1 1 .6 1.4 1.4 1.4l6.2.2c.8 0 1.2.1 2 .5l1.1.8c.7.4 1.4.5 2 .5Z' }),
        el('path', { fill: '#1501FE', d: 'M22 3.3h-.2c-.7 0-1.2-.6-1.2-1.2V2h-7.9c-.7 0-1.5-.3-2-.9a4.3 4.3 0 0 0-3-1.1H1.3v.2A1.2 1.2 0 0 1 1 1c-.3.2-.6.4-1 .4v8.2h.2A1.2 1.2 0 0 1 1.4 11H9c1 0 1.9.4 2.7 1l.4.3c.5.5 1.2.7 2 .7h6.5v-.3c0-.6.6-1.2 1.2-1.1l.1-8.2Zm-3 8.4h-4.3c-.6 0-1.3-.1-2-.6l-1.2-.8c-.8-.4-1.3-.5-2-.5H3c-1 0-1.4-.4-1.5-1.5V2.5c0-1 .6-1.2 1.6-1.2h4.8c.9 0 1.6.6 2.2 1.2l.3.2c.4.4 1.3.7 1.9.7h7c.4 0 1 0 1 1v6.1c0 1-.4 1.3-1.4 1.2Z' })
    ),
    category: 'widgets',
    attributes: {
        raffleId: {
            type: 'string',
        },
    },
    edit: function(props) {
        const blockProps = useBlockProps();
        
        const { attributes = {}, setAttributes } = props;
        const { raffleId } = attributes;

        const handleRaffleSelect = (selectedRaffleId) => {
            setAttributes({ 
                raffleId: selectedRaffleId
            });
        };

        const shortcode = raffleId ? `[raffleleader id="${raffleId}"]` : '';

        return el('div', { ...blockProps, className: 'raffleleader-block' },
            el(BlockControls, null,
                el(RaffleSelector, { onSelect: handleRaffleSelect })
            ),
            raffleId
                ? el(TextControl, {
                    label: "Raffle Shortcode",
                    value: shortcode,
                    readOnly: true,
                    disabled: true,
                })
                : el('p', null, 'Please select a raffle using the block toolbar.')
        );
    },
    save: function({ attributes }) {
        if (attributes && attributes.raffleId) {
            const shortcode = `[raffleleader id="${attributes.raffleId}"]`;
            return el('div', null, shortcode);
        }
        return null;
    }
});