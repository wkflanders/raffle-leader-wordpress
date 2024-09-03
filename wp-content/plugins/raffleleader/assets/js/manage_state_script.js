const stateSaved = new CustomEvent('stateSaved');

const createStateManager = () => {
    let states = [];
    let currentIndex = -1;
    const maxStates = 50;

    return {
        saveState: (state) => {
            states = states.slice(0, currentIndex + 1);
            states.push(JSON.parse(JSON.stringify(state)));

            if(states.length > maxStates){
                states.shift();
            } else {
                currentIndex++;
            }
        },
        undo: () => {
            if(currentIndex > 0){
                currentIndex--;
                return states[currentIndex];
            }
            return null;
        },
        redo: ()=>{
            if(currentIndex < states.length - 1){
                currentIndex++
                return states[currentIndex];
            }
            return null;
        },
        showStates: () => states,
        getCurrentState: () => states[currentIndex]
    };
};

const stateManager = createStateManager();

function captureBuilderState() {
    const preview = document.getElementById('preview');
    const selectedSection = preview.querySelector('.selected-raffleleader-section');
    let content;

    if (selectedSection !== null) {
        // Temporarily remove the 'selected-raffleleader-section' class for capturing state
        selectedSection.classList.remove('selected-raffleleader-section');
        selectedSection.querySelectorAll('.raffleleader-resize-handle').forEach(handle => handle.style.display = 'none');
        selectedSection.querySelector('.raffleleader-layer-handle-container').style.display = 'none';
        
        content = preview.outerHTML;
        
        selectedSection.classList.add('selected-raffleleader-section');
        selectedSection.querySelectorAll('.raffleleader-resize-handle').forEach(handle => handle.style.display = 'block');
        selectedSection.querySelector('.raffleleader-layer-handle-container').style.display = 'flex';
    } else {
        content = preview.outerHTML;
    }

    return {
        content: content,
        // Other stuff to be saved in a state
    };
}

function applyBuilderState(state){
    if(state){
        const preview = document.getElementById('preview');
        const currentSection = preview.querySelector('.selected-raffleleader-section');
        const currentSectionId = currentSection ? currentSection.getAttribute('data-section-id') : '' ;
        
        preview.outerHTML = state.content;

        const newPreview = document.getElementById('preview');
        const newCurrentSection = newPreview.querySelector(`[data-section-id="${currentSectionId}"]`);
        
        const customizeBox = document.getElementById('settingsWrapper');

        if(newCurrentSection){  
            selectSection(newCurrentSection);
        } else if(customizeBox.classList.contains('slide-right-to-left')){
            customizeBox.classList.toggle('slide-right-to-left');
        }
    }
}

function saveCurrentState(){
    const currentState = captureBuilderState();
    stateManager.saveState(currentState);
}

function undoAction(){
    const previousState = stateManager.undo();
    if(previousState){
        applyBuilderState(previousState);
        document.dispatchEvent(stateSaved)
    }
}

function redoAction(){
    const nextState = stateManager.redo()
    if(nextState){
        applyBuilderState(nextState);
        document.dispatchEvent(stateSaved)
    }
}

let newTemplateFlag = false;

document.addEventListener('previewLoaded', ()=>{
    // init state
    saveCurrentState();

    if(!newTemplateFlag){
        document.addEventListener('repositionDrop', ()=>{
            saveCurrentState();
        });

        document.addEventListener('resizeDrop', ()=>{
            saveCurrentState();
        });

        document.addEventListener('customizationSettingChanged', ()=>{
            saveCurrentState();
        });

        document.addEventListener('layoutDrop', ()=>{
            saveCurrentState();
        });
        newTemplateFlag = true;
    }

    // const observer = new MutationObserver(()=>{
    //     saveCurrentState();
    // });

    // observer.observe(preview, {
    //     childList: true,
    //     subtree:true,
    //     attributes: true,
    //     characterData: true
    // });
});

window.undoAction = undoAction;
window.redoAction = redoAction;