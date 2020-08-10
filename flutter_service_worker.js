'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2ae96a5c5039dd70ac85300122397429",
".git/config": "0a1fc4f7db44a7e2d9ca1a4ef336118e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "537124e0932b42c29c2c1cd77fba8f9c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/update.sample": "f51b02427757e79621b5235d7efdf117",
".git/index": "640f6065dd32b1610d3ff7374f911214",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4cb01e817bca3dcc004534de4716a3bd",
".git/logs/refs/heads/gh-pages": "3d7b1ae68a56ecdaac4011d8a971aeef",
".git/logs/refs/heads/master": "5a54fe1a7565b34443f3c109d346207e",
".git/logs/refs/remotes/origin/gh-pages": "e40f953175b566f823ee5e8b239baa96",
".git/logs/refs/remotes/origin/master": "b0262641209950e4e4b4ce4c7ce51403",
".git/objects/00/ac5e5bb3eefda9e7965667d863e80686ee1f62": "3f8a9661beb7d3ccab64d901075fd754",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/44b451fdff288ee09c211b03599ea10c9100f8": "dca76f84ec95e59f5ae661b513a269c3",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/630e450227446ff8d8e44ad96e9ea01474ba81": "ce7e62080ee43618c68c8ed92c5e6ef6",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/143292553d60e5ff4e3858aea4eb83a9a225c2": "c54f0dc3e867e3d7113f3fe90177e384",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/5e/36b8fa0dda74d13925c8ec0adb80e128001c85": "ef367bcc4a5728a8715b2932f9357e96",
".git/objects/5f/a98b97385b26314b8673dd8195149c5174c723": "59ca80c5278ba2fc2085be3b8c2e2406",
".git/objects/67/8fce78833147df1c96d57cc2dd4db8b64c6026": "57345daf224fc19f6a7f1a7ce2b60350",
".git/objects/75/f33926304e3c5d2b8deca01582d7ed3ebc8cad": "3ce23fc3807640f7977780a73652e3cc",
".git/objects/78/ab980db636049d26eeceaa33f2c0617601283b": "9be74e53bd61c7947766f8a17f1e69a7",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9b5e0e67d5e46c95f1f416a653cf6f6f3aa93d": "085b825efd5cfbfd2f0297eb65b55f6f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a6/b47fe7814cb93656126d7ee83d6de6e271a0c4": "5e9a07b753c392bc5f1b7e83cdfb00aa",
".git/objects/a6/efaf724aa963db0e97a6a99e4c736a4dff8593": "42107ec46f55bb3c3e336c87b08ed8cb",
".git/objects/ac/4dc4f43e6ff8634b4156ce910964b973664ab0": "730a57dc3644e3cdb6465834abc4810a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/eb3e804abae0e805879dd9ba9397603bfd32eb": "f296833aec71ad25138a891cadc125dc",
".git/objects/d8/2cfcb14dabf2610ef984569eca8cb51e6c1f8e": "5199c7e2f8775bb893f763ee5c22635e",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e0/84a7733d649379472d37e07b7ee7791404ac5c": "bfedd5a80eab659421f0bb1908e63d28",
".git/objects/ec/0036f38d402d3639131ac92eb42e450fe4d6f0": "f00c34c40bdd480353a923b2b1e853eb",
".git/objects/f3/09b7a7d084dc14048bd3099b938e47788192e7": "c05590b2dc37c225c47c1c260c6b246a",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "bdf9d08613277db4d6f10f4e44e1420a",
".git/refs/heads/gh-pages": "ccad7dab5e205e02af6802b57aa849c2",
".git/refs/heads/master": "44e17d1a1af92df78796d4ee9896c246",
".git/refs/remotes/origin/gh-pages": "ccad7dab5e205e02af6802b57aa849c2",
".git/refs/remotes/origin/master": "44e17d1a1af92df78796d4ee9896c246",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "5caf4c8dfac84ae016604adf57f12098",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "875196f4bff4d6eb03e5e553e99d4793",
"/": "875196f4bff4d6eb03e5e553e99d4793",
"main.dart.js": "2bba5ef0f28b5e2f6d3c9bdf6d6686ea",
"manifest.json": "0bba155b0defdde620e377dffa80ab55",
"README.md": "d0fe24068684bacb9fc78a2a11bc9916"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
