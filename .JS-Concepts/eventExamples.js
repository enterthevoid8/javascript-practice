// Mouse Events
document.body.innerHTML += '<button id="mouseButton">Mouse Button</button>';
const mouseButton = document.getElementById('mouseButton');

mouseButton.addEventListener('click', () => {
    console.log('Mouse: Button clicked!');
});

mouseButton.addEventListener('dblclick', () => {
    console.log('Mouse: Button double-clicked!');
});

mouseButton.addEventListener('mousedown', () => {
    console.log('Mouse: Button pressed down!');
});

mouseButton.addEventListener('mouseup', () => {
    console.log('Mouse: Button released!');
});

mouseButton.addEventListener('mouseenter', () => {
    console.log('Mouse: Mouse entered the button area!');
});

mouseButton.addEventListener('mouseleave', () => {
    console.log('Mouse: Mouse left the button area!');
});

// Keyboard Events
document.body.innerHTML += '<input id="keyboardInput" placeholder="Type something...">';
const keyboardInput = document.getElementById('keyboardInput');

keyboardInput.addEventListener('keydown', (e) => {
    console.log(`Keyboard: Key "${e.key}" pressed down!`);
});

keyboardInput.addEventListener('keyup', (e) => {
    console.log(`Keyboard: Key "${e.key}" released!`);
});

// Form Events
document.body.innerHTML += `
    <form id="testForm">
        <input type="text" id="textInput" placeholder="Enter name" required>
        <button type="submit">Submit</button>
    </form>
`;

const form = document.getElementById('testForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual submission for demonstration
    console.log('Form: Form submitted!');
});

const textInput = document.getElementById('textInput');

textInput.addEventListener('change', () => {
    console.log(`Form: Input value changed to "${textInput.value}"`);
});

textInput.addEventListener('input', () => {
    console.log(`Form: Current input value is "${textInput.value}"`);
});

// Window Events
window.addEventListener('resize', () => {
    console.log('Window: Resized!');
});

window.addEventListener('scroll', () => {
    console.log('Window: Scrolling!');
});

// Clipboard Events
document.body.innerHTML += '<p id="copyText">Copy this text!</p>';
const copyText = document.getElementById('copyText');

copyText.addEventListener('copy', () => {
    console.log('Clipboard: Text copied!');
});

copyText.addEventListener('cut', () => {
    console.log('Clipboard: Text cut!');
});

copyText.addEventListener('paste', () => {
    console.log('Clipboard: Text pasted!');
});

// Drag-and-Drop Events
document.body.innerHTML += `
    <div id="dragSource" draggable="true" style="width: 100px; height: 100px; background: lightblue;">Drag Me</div>
    <div id="dropTarget" style="width: 200px; height: 200px; border: 2px dashed black;">Drop Here</div>
`;

const dragSource = document.getElementById('dragSource');
const dropTarget = document.getElementById('dropTarget');

dragSource.addEventListener('dragstart', () => {
    console.log('Drag: Drag started!');
});

dragSource.addEventListener('dragend', () => {
    console.log('Drag: Drag ended!');
});

dropTarget.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow drop
    console.log('Drag: Dragging over target!');
});

dropTarget.addEventListener('drop', () => {
    console.log('Drag: Dropped on target!');
});

// Media Events
document.body.innerHTML += `
    <audio id="audioPlayer" controls>
        <source src="sample.mp3" type="audio/mp3">
    </audio>
`;

const audioPlayer = document.getElementById('audioPlayer');

audioPlayer.addEventListener('play', () => {
    console.log('Media: Audio started playing!');
});

audioPlayer.addEventListener('pause', () => {
    console.log('Media: Audio paused!');
});

audioPlayer.addEventListener('ended', () => {
    console.log('Media: Audio ended!');
});

// Touch Events (For Mobile)
document.body.innerHTML += '<div id="touchBox" style="width: 200px; height: 200px; background: lightgreen;">Touch Me</div>';
const touchBox = document.getElementById('touchBox');

touchBox.addEventListener('touchstart', () => {
    console.log('Touch: Touched!');
});

touchBox.addEventListener('touchmove', () => {
    console.log('Touch: Moving on the element!');
});

touchBox.addEventListener('touchend', () => {
    console.log('Touch: Touch ended!');
});

// CSS Animation Events
document.body.innerHTML += '<div id="animatedDiv" style="width: 50px; height: 50px; background: red; animation: move 2s linear infinite;"></div>';

const animatedDiv = document.getElementById('animatedDiv');

animatedDiv.addEventListener('animationstart', () => {
    console.log('Animation: Animation started!');
});

animatedDiv.addEventListener('animationend', () => {
    console.log('Animation: Animation ended!');
});

// CSS for Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes move {
        0% { transform: translateX(0); }
        100% { transform: translateX(300px); }
    }
`;
document.head.appendChild(style);
