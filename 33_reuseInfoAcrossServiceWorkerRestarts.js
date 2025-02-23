/**
 * Reusing Information Across Service Worker Restarts in JavaScript
 * 
 * Service Workers restart frequently and do not retain state between activations.
 * To persist data across restarts, we must store information in IndexedDB, Cache Storage, or LocalStorage.
 * Using IndexedDB is the most efficient way to store structured data in a Service Worker.
 * Message passing (postMessage API) allows communication between the Service Worker and the main thread.
 * 
 * Storage Method	                Description
 * IndexedDB	                    Best for storing structured data across restarts.
 * Cache Storage	                Used for storing network requests and assets.
 * LocalStorage / SessionStorage	Not directly accessible in a Service Worker.
 * postMessage API	                Used for passing data between the Service Worker and main thread.
 * 
 */

