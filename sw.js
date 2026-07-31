/* Service worker da ficha weNutri.
   Ao publicar uma versão nova do index.html, troque o número
   do CACHE abaixo. Isso força a atualização no celular das
   nutricionistas na próxima vez que abrirem com internet. */
const CACHE = "ficha-wenutri-v6";
const BASICO = ["./", "./index.html", "./manifest.webmanifest", "./icone-192.png", "./icone-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(BASICO.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copia = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia)).catch(()=>{});
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
