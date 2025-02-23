document.addEventListener('keydown', (event) => {
    if (document.getModifierState('Shift')) {
        console.log('Shift key is pressed');
    }
});

document.addEventListener('keydown', (event) => {
    if (document.getModifierState('CapsLock')) {
        console.log('Caps Lock is ON');
    } else {
        console.log('Caps Lock is OFF');
    }
});
