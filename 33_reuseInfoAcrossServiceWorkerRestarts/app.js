// app.js (Main JavaScript File)

// Register the Service Worker
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

    // Send data to Service Worker
    document.getElementById('saveData').addEventListener('click', () => {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'SAVE_DATA',
                data: { username: "Alice", lastLogin: new Date().toISOString() }
            });
        }
    });

    // Request saved data from Service Worker
    document.getElementById('loadData').addEventListener('click', () => {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'GET_DATA' });
        }
    });
}

// Function to update the DOM
function updateDOM(data) {
    document.getElementById('output').innerText = `Stored Data: ${JSON.stringify(data)}`;
}