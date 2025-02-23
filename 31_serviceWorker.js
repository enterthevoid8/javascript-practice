/**
 * Service Worker in JavaScript
 * 
 * A Service Worker is a background script that acts as a proxy between a web application, the browser, and the network.
 * It enables features like offline support, background sync, push notifications, and caching to improve web performance.
 * Service Workers run independently of the main browser thread, allowing websites to work even when offline.
 * They follow a lifecycle: Installation → Activation → Fetching Requests and must be served over HTTPS for security.
 * 
 * Feature	Description
 * 
 * Background Execution	    Runs in the background, separate from the main web page.
 * Offline Support	        Enables caching of assets for offline access.
 * Push Notifications	    Supports sending background push notifications.
 * Fetch Interception	    Can intercept network requests and serve cached responses.
 * Requires HTTPS	        Must be served over a secure connection (except for localhost).
 * 
 */

// JavaScript Service Worker Examples

// 1. Registering a Service Worker in the main JavaScript file (app.js)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker Registered:', registration);
        })
        .catch(error => {
            console.log('Service Worker Registration Failed:', error);
        });
} else {
    console.log('Service Workers are not supported in this browser.');
}

// 2. Basic Service Worker File (service-worker.js)
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open('v1').then(cache => {
            console.log('Service Worker: Caching Files');
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                '/offline.html'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== 'v1') {
                    console.log('Service Worker: Clearing Old Cache');
                    return caches.delete(key);
                }
            }));
        })
    );
});

// 3. Intercepting Network Requests (Cache First Strategy)
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(() => caches.match('/offline.html')) // Fallback to offline page
    );
});

// 4. Push Notification Event Listener
self.addEventListener('push', event => {
    console.log('Service Worker: Push Notification Received');
    event.waitUntil(
        self.registration.showNotification('New Message', {
            body: 'You have a new message!',
            icon: '/icon.png',
            badge: '/badge.png'
        })
    );
});

// 5. Background Sync Example
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncDataFunction());
    }
});

function syncDataFunction() {
    return fetch('/sync-data-endpoint', {
        method: 'POST',
        body: JSON.stringify({ sync: true }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => console.log('Sync Data Successful:', data))
      .catch(err => console.log('Sync Data Failed:', err));
}
