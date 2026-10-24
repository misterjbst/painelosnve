// App de observação da Nova Era: não guarda nada em cache,
// sempre busca a versão mais nova do painel e dos dados.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request)); });
