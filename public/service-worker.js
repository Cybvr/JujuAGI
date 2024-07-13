self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache-v2').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/styles/App.css',
        '/src/index.tsx',
        '/src/assets/images/app/juju-192x192.png',
        '/src/assets/images/app/juju-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});