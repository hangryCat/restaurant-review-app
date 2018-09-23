// Checks to see if the sw is registered
console.log('Service Worker: Registered');

// List of file names to cache
// Comprises all file paths into strings
// This is everything the app uses/requests to create what users see
const cacheFiles = [
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/data/restaurant.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js'
];

// After the sw is registered, an installation event is fired
// The code below listens for that event
// The 'self' refers to the sw
self.addEventListener('install', function(evt) {

});
