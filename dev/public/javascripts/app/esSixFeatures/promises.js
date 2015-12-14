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
			return promise;
		}, 2000);
	}

	promise.then(function (success) {
		printHTML(success);
	}, function (err) {
		printHTML(err);
	}).then(function (success) {
		printHTML(success);
	});
}

