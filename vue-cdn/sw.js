const CACHE_NAME = "static-cache-v1";

const FILES_TO_CACHE = ["/offline.html"];

// when the install event is trigger we add the offline file to the cache
// this way we can access them when the internet is not working.
self.addEventListener("install", evt => {
  // precache the offline page
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  // do not wait to install
  self.skipWaiting();
});

// When the sw is activated we do some house keeping like removing the cache.
// This happens after installation, when the page to be controlled by the service worker refreshes
self.addEventListener("activate", evt => {
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// the fetch event is triggered when a file is needed from the internet

self.addEventListener("fetch", evt => {
  console.log("[ServiceWorker] Fetch", evt.request.url);
  // Add fetch event handler here.
  if (evt.request.mode !== "navigate") {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
    fetch(evt.request).catch(() => {
      // if the fetch event fails we return the offline file
      return caches.open(CACHE_NAME).then(cache => {
        return cache.match("offline.html");
      });
    })
  );
});
