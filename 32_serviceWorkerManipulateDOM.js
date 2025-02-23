/**
 * Manipulating the DOM Using a Service Worker in JavaScript
 * 
 * A Service Worker runs in a separate thread and does not have direct access to the DOM.
 * To manipulate the DOM, a Service Worker must communicate with the main thread using the postMessage API.
 * The main JavaScript file listens for messages from the Service Worker and updates the DOM accordingly.
 * This approach is useful for background updates, push notifications, and offline content handling.
 * 
 * Concept                  Description
 * Service Worker Scope	    Runs in the background, does not have direct DOM access.
 * postMessage API	        Used for communication between the Service Worker and the main thread.
 * Event Listeners	        message event is used in the main thread to receive updates from the Service Worker.
 * Push Notifications	    Can trigger DOM changes indirectly by notifying the main script.
 * 
 * Examples in corresponding directory 32_serviceWorkerManipulateDOM
 * 
 */
