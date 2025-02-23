// service-worker.js (Runs in the Background)

self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
    return self.clients.claim();
});

// Listen for messages from the main thread
self.addEventListener('message', event => {
    console.log('Service Worker Received Message:', event.data);

    // Send a response back to all clients (Main Thread)
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage(`Received: ${event.data}`);
        });
    });
});