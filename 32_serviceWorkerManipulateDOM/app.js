// app.js (Main JavaScript File)

// Check if Service Worker is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker Registered:', registration);
        })
        .catch(error => {
            console.log('Service Worker Registration Failed:', error);
        });

    // Listen for messages from the Service Worker
    navigator.serviceWorker.addEventListener('message', event => {
        console.log('Message from Service Worker:', event.data);
        updateDOM(event.data);
    });
}

// Function to update the DOM based on Service Worker messages
function updateDOM(data) {
    const messageContainer = document.getElementById('message');
    if (messageContainer) {
        messageContainer.innerText = `Update: ${data}`;
    }
}

// Send message to Service Worker
document.getElementById('sendMessage').addEventListener('click', () => {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage('Hello from Main Thread!');
    }
});