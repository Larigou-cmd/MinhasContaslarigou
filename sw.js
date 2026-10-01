// Service worker mínimo para o app poder ser instalado. Não guarda nada em cache:
// sempre busca a versão mais nova no GitHub (os dados ficam só criptografados no index.html).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
