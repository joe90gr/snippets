export function registerSW() {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function () {
			navigator.serviceWorker.register('/sw.js', {}).then(function (registration) {
				// Registration was successful
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}, function (err) {
				// registration failed :(
				console.log('ServiceWorker registration failed: ', err);
			});

			window.addEventListener('online', event => console.log('online', event));
			window.addEventListener('offline', event => console.log('offline', event));
		});
	}
}
