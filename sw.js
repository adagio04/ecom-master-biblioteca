/* ECOM MASTER — service worker de retirada (kill switch).
   La versión antigua de la biblioteca era una PWA y registraba un SW
   cache-first ("ecom-master-v1") que dejaba servir HTML obsoleto.
   El index.html actual ya no registra ningún SW, pero el antiguo seguía
   instalado en los navegadores que lo visitaron. Este archivo lo sustituye,
   borra sus cachés, se desregistra y recarga las pestañas abiertas.
   No define handler de 'fetch', así que todo va directo a la red. */

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: "window" });
    for (const client of clients) {
      try { client.navigate(client.url); } catch (e) {}
    }
  })());
});
