// Legendary Twelve service worker: caches the app so it opens instantly and works offline.
const CACHE = "legendary-twelve-v33";
const DICT = ["dict_1.json","dict_2.json","dict_3.json","dict_4.json","dict_5.json","dict_6.json","dict_7.json","dict_8.json","dict_9.json","dict_10.json","lang_freq.json","lang_ant.json","lang_pron_1.json","lang_pron_2.json"].concat(Array.from({length:16},(_,i)=>"topics_"+(i+1)+".json"));
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL).then(() => Promise.allSettled(DICT.map(f => c.add(f))))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => e.request.mode === "navigate" ? caches.match("./index.html") : Response.error()))
  );
});
