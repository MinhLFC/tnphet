/**
 * Service Worker cho Ứng Dụng Chấm Thi QM 2025
 * Lưu trữ offline hoàn toàn trên điện thoại và máy tính
 */

const CACHE_NAME = 'qm2025-v1';
const ASSETS_TO_CACHE = [
  'chamthi.html',
  'manifest.json',
  'assets/css/chamthi.css',
  'assets/js/qm2025-template.js',
  'assets/js/qm2025-omr.js',
  'assets/js/qm2025-app.js',
  'assets/images/logo-hcmue.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Fallback offline
        return caches.match('chamthi.html');
      });
    })
  );
});
