const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
	'/',
	'/logout',
	'/snippets/algorithms',
	'/styles/style.css',
	'/js/three.min.js',
	'/sw.js',
	'/js/bundles/bundle.js'
];

self.addEventListener('install', event => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			console.log('Opened cachee');

			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('sync', event => {
	console.log('THIS IS A SYNC EVENT', event);
});

self.addEventListener('fetch', event => {
	const val = caches.match(event.request).then(response => {
		// Cache hit - return response
		if (response) {
			return response;
		}

		// IMPORTANT: Clone the request. A request is a stream and
		// can only be consumed once. Since we are consuming this
		// once by cache and once by the browser for fetch, we need
		// to clone the response.
		let fetchRequest = event.request.clone();

		return fetch(fetchRequest).then(response => {
			// Check if we received a valid response
			if (!response || response.status !== 200 || response.type !== 'basic') {
				return response;
			}

			// IMPORTANT: Clone the response. A response is a stream
			// and because we want the browser to consume the response
			// as well as the cache consuming the response, we need
			// to clone it so we have two streams.
			let responseToCache = response.clone();

			caches.open(CACHE_NAME).then(cache => {
				cache.put(event.request, responseToCache);
			});

			return response;
		});
	});

	let val1 = async function asyncFunction() {
		let response = await caches.match(event.request);

		if (!response) {
			let fetchRequest = event.request.clone();

			response = await fetch(fetchRequest);

			if ((response && response.status === 200 && response.type !== 'basic')) {
				let responseToCache = response.clone();
				let cache = await caches.open(CACHE_NAME);

				cache.put(event.request, responseToCache);
			}
		}

		return response;
	};

	event.respondWith(val1());
});

self.addEventListener('activate', event => {
	const cacheWhitelist = [ 'CACHE_NAME' ];

	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						console.log('DELETEING CACHES');
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
