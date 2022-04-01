const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/agua.jpg",
  "/images/aspirinas.jpg",
  "/images/caretas.jpg",
  "/images/comida.jpg",
  "/images/cubrebocas.jpg",
  "/images/gel.jpg",
  "/images/guantes.jpg",
  "/images/paracetamol.jpg",
  "/images/termometro.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
