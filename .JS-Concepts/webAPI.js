// ============================
// 1. DOM Manipulation
// ============================
console.log("DOM Manipulation Examples");

// Create a new element dynamically and append it
const newDiv = document.createElement('div');
newDiv.id = 'dynamicDiv';
newDiv.textContent = "I'm a dynamically created div!";
document.body.appendChild(newDiv);

// Modify an existing element
const existingDiv = document.querySelector('#dynamicDiv');
existingDiv.style.color = 'blue';
existingDiv.setAttribute('data-info', 'sample-div');

// Get bounding box details
const rect = newDiv.getBoundingClientRect();
console.log(`Position of Div - Top: ${rect.top}, Left: ${rect.left}`);

// Create and append a list dynamically
const ul = document.createElement('ul');
ul.id = 'myList';
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// ============================
// 2. Event Handling
// ============================
console.log("Event Handling Examples");

// Add an event listener
const button = document.createElement('button');
button.textContent = 'Click Me';
button.id = 'myButton';
document.body.appendChild(button);

button.addEventListener('click', () => {
    alert('Button clicked!');
    button.classList.toggle('active');
    console.log(`Button active state: ${button.classList.contains('active')}`);
});

// Remove event listener after one click
const handleClickOnce = () => {
    alert('This runs only once!');
    button.removeEventListener('click', handleClickOnce);
};
button.addEventListener('click', handleClickOnce);

// Dispatch a custom event
const customEvent = new Event('myCustomEvent');
button.addEventListener('myCustomEvent', () => console.log('Custom event triggered!'));
button.dispatchEvent(customEvent);

// ============================
// 3. Networking (Fetch API)
// ============================
console.log("Networking Example - Fetch API");

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Fetched Data:', data))
    .catch(error => console.error('Fetch Error:', error));

// ============================
// 4. Local and Session Storage
// ============================
console.log("Storage Examples");

// Save data
localStorage.setItem('user', JSON.stringify({ name: 'Lalit', age: 30 }));
sessionStorage.setItem('sessionKey', 'temporaryData');

// Retrieve data
const userData = JSON.parse(localStorage.getItem('user'));
console.log('Stored User:', userData);

// Remove session data
sessionStorage.removeItem('sessionKey');

// ============================
// 5. Clipboard API
// ============================
console.log("Clipboard API Example");

navigator.clipboard.writeText('Hello from Clipboard API!').then(() => {
    console.log('Text copied to clipboard!');
});

// ============================
// 6. Geolocation API
// ============================
console.log("Geolocation Example");

navigator.geolocation.getCurrentPosition(
    position => {
        console.log('Current Position:', position.coords.latitude, position.coords.longitude);
    },
    error => console.error('Geolocation Error:', error)
);

// ============================
// 7. Animation
// ============================
console.log("Animation Example");

const animDiv = document.createElement('div');
animDiv.style.width = '50px';
animDiv.style.height = '50px';
animDiv.style.backgroundColor = 'red';
animDiv.style.position = 'absolute';
document.body.appendChild(animDiv);

let start = null;
function move(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    animDiv.style.left = Math.min(progress / 5, 300) + 'px';
    if (progress < 2000) {
        requestAnimationFrame(move);
    }
}
requestAnimationFrame(move);

// ============================
// 8. Performance API
// ============================
console.log("Performance Example");

performance.mark('start');
for (let i = 0; i < 1000000; i++) {} // Simulate some work
performance.mark('end');
performance.measure('Loop Performance', 'start', 'end');
console.log(performance.getEntriesByName('Loop Performance'));

// ============================
// 9. WebSocket Example
// ============================
console.log("WebSocket Example");

const socket = new WebSocket('wss://echo.websocket.org');
socket.onopen = () => {
    console.log('WebSocket connected!');
    socket.send('Hello Server!');
};
socket.onmessage = event => console.log('Message from Server:', event.data);
socket.onclose = () => console.log('WebSocket disconnected!');

// ============================
// 10. Battery Status API
// ============================
console.log("Battery API Example");

navigator.getBattery().then(battery => {
    console.log('Battery Level:', battery.level * 100 + '%');
});

// ============================
// 11. JSON Handling
// ============================
console.log("JSON Handling Example");

const obj = { name: 'Lalit', age: 30 };
const jsonString = JSON.stringify(obj);
console.log('JSON String:', jsonString);

const parsedObj = JSON.parse(jsonString);
console.log('Parsed Object:', parsedObj);

// ============================
// 12. Scroll Control
// ============================
console.log("Scroll Control Example");

const scrollButton = document.createElement('button');
scrollButton.textContent = 'Scroll to Top';
scrollButton.id = 'scrollButton';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================
// 13. Navigator Properties
// ============================
console.log("Navigator API Example");

console.log('Browser Name:', navigator.appName);
console.log('Platform:', navigator.platform);

// ============================
// 14. Alert, Confirm, and Prompt
// ============================
console.log("Dialog Examples");

alert('This is an alert dialog!');
if (confirm('Do you like JavaScript?')) {
    const name = prompt('What is your name?', 'Lalit');
    console.log(`Welcome, ${name}!`);
}

// ============================
// 15. Interval and Timeout
// ============================
console.log("Interval and Timeout Example");

// Interval example
const intervalId = setInterval(() => {
    console.log('This runs every second!');
}, 1000);

// Timeout to stop the interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');
}, 5000);
