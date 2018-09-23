// Checks to see if the sw is registered
console.log('Service Worker: Registered');

// Will contain cacheFiles elements
// Will be used in conjuction with the installation event listener below
// The string 'List' will appear in the Cache Storage
const cacheList = 'List';

// List of file names to cache
// Comprises all file paths into strings
// This is everything the app uses/requests to create what users see
const cacheFiles = [
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
            return cache.addAll(cacheFiles);
        })
    );
});
