const CACHE_NAME = 'travel-v7';
const ASSETS = [
  'index.html',
  'manifest.json',
  'assets/images/day1.webp',
  'assets/images/day2.webp',
  'assets/images/day3.webp',
  'assets/images/spots.webp'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
