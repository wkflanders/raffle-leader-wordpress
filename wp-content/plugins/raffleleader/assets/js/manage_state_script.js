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

function captureBuilderState(){
    const preview = document.getElementById('preview');
    return{
        content: preview.outerHTML,
        // Other stuff to be saved in a state
    };
}

function applyBuilderState(state){
    if(state){
        const preview = document.getElementById('preview');
        preview.outerHTML = state.content;
        // Other stuff to be applied
    }
}

function saveCurrentState(){
    const currentState = captureBuilderState();
    stateManager.saveState(currentState);
    console.log(currentState);
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

document.addEventListener('previewLoaded', ()=>{
    // init state
    saveCurrentState();

    const preview = document.getElementById('preview');

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