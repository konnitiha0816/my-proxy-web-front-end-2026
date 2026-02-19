importScripts('https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.bundle.js');
importScripts('https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.config.js');
importScripts('uv.config.js');
importScripts('https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.sw.js');

const sw = new UVServiceWorker();
self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
