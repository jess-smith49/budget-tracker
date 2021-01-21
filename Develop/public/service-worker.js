const CACHE_NAME = 'my-site-cache-v1',
const DATA_CACHE_NAME = 'data-cache-v1';


const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png',
    '/public/icons/icon-72x72.png'
];


//install service worker
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log('Pre-cache successful')
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});

//activate
self.addEventListener('activate', function(e) {
    e.waitUntil(

    )
})

//fetch requests
self.addEventListener('fetch', function (e) {
    
})