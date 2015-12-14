export function promises(printHTML) {
	var promise = new Promise(resolver);
	var clicked = true;

	function resolver(resolve, reject) {
		setTimeout(function () {
			if (clicked) {
				resolve('success message!');
			} else {
				reject('error message!');
			}

		}, 2000);
	}

	promise.then(function (success) {
		printHTML(success);
	}, function (err) {
		printHTML(err);
	});
}

export function promisesOne(printHTML) {
	var promise = new Promise(resolver);
	var clicked = true;

	function resolver(resolve, reject) {
		setTimeout(function () {
			if (clicked) {
				resolve('success message!');
			} else {
				reject('error message!');
			}
		}, 2000);
	}

	promise.then(function (success) {
		printHTML('first thenable: ' + success);
		return new Promise(resolver);
	}).then(function (success) {
		printHTML('second thenable: ' + success);
	});
}

export function promisesTwo(printHTML) {
	var now = new Date();
	printHTML('time absolutely now: ' + now);

	getTimeIn(1000).then(function (success) {
		printHTML('first thenable: ' + success);
		return getTimeIn(5000);
	}).then(function (success) {
		printHTML('second thenable: ' + success);
	});
}

function getTimeIn(delay) {
	var promise = new Promise(resolver);

	function resolver(resolve) {
		setTimeout(function () {
			resolve(new Date());
		}, delay);
	}

	return promise;
}

