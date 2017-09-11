var CACHE_NAME = 'my-site-cache-v1';

importScripts('./js/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/index.css',
       '/css/jasny-bootstrap.min.css',
       '/css/jquery.mobile.min.css',
       '/css/bootstrap.min.css',
       '/js/index.js',
       '/js/jasny-bootstrap.min.js',
       '/js/modernizr.min.js',
       '/js/bootstrap.min.js',
       '/js/jquery.min.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});