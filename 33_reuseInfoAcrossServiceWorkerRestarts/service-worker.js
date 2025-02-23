// service-worker.js (Runs in the Background)

// Open IndexedDB for persistent storage
function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("ServiceWorkerDB", 1);
        request.onupgradeneeded = event => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("storage")) {
                db.createObjectStore("storage");
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Save data to IndexedDB
async function saveData(key, value) {
    const db = await openDatabase();
    const transaction = db.transaction("storage", "readwrite");
    const store = transaction.objectStore("storage");
    store.put(value, key);
}

// Retrieve data from IndexedDB
async function getData(key) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("storage", "readonly");
        const store = transaction.objectStore("storage");
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Service Worker Install & Activate Event
self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
    return self.clients.claim();
});

// Listen for messages from the main thread
self.addEventListener('message', async event => {
    if (event.data.type === 'SAVE_DATA') {
        await saveData('userData', event.data.data);
        console.log("Data saved in IndexedDB:", event.data.data);
    } else if (event.data.type === 'GET_DATA') {
        const storedData = await getData('userData');
        event.source.postMessage(storedData || { message: "No data found!" });
    }
});