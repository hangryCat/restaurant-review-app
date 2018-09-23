// Checks to see if the sw is registered
console.log('Service Worker: Registered');

// Will contain cacheFiles elements
// Will be used in conjuction with the installation event listener below
// The string 'List' will appear in the Cache Storage
const cacheList = 'Restaurant-List';

// List of file names to cache
// Comprises all file paths into strings
// This is everything the app uses/requests to create what users see
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

// After the sw is registered, an installation event is fired
// The code below listens for that event
// The 'self' refers to the sw
self.addEventListener('install', function(evt) {
  // waitUntil method is used to wait until the installation evt is complete
    evt.waitUntil(
        caches.open(cacheList).then(function(cache) {
            console.log('Service Worker: Installed');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', evt => {
  // respondWith method prevents the default fetch event so we can use a promise
  evt.respondWith(
    // The match method determine if the evt request url already exists
    // within the cache that was loaded in the installation was completed
    // The then method is chained to receive the promise
    caches.match(evt.request).then(response => {
      // The if statement checks for a query match
      // True means the request exists within the cache and it is returned
      if (response) {
        console.log(evt.request, ' was found in cache');
        return response;
      }
      // False means the request does not exist; the items will be fetched normally
      // After the items are fetched, it'll be added to the cache storage for later
      else {
        console.log(evt.request, ' was not found in cache; fetching...');
        return fetch(evt.request)
        // THEN method here takes the response from the fetch above
        // The cacheList is opened with the OPEN method
        // The PUT method allows key/value pairs to be added to the current cache object
          // In this case, it's the request and response
          // Note: it'll overwrite any previous key/value pair that matches the request
        .then(response => {
          // Clones the reponse so we're not using it more than once
          const responseClone = response.clone();
          caches.open(cacheList).then(cache => {
            cache.put(evt.request, responseClone);
          })
          // This response will be returned to the fetch
          return response;
        })
        // This CATCH method logs any errors
        .catch(err => console.error(err, evt.request))
      } // end of else statement
    })
  );
});
