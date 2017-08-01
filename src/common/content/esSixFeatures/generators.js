import 'babel-polyfill';

const fetchAsync = (id, delay) => new Promise((resolve) => {
	setTimeout(() => resolve('future value from: ' + id), delay);
});

export function generators(printHTML) {
	function *generate() {
		yield 1;
		yield 2;
		yield 99;
	}

	let it = generate();

	printHTML(it.next().value);
	printHTML(it.next().value);
	printHTML(it.next().value);

	return 'wow';
}

export function generatorsWithPromises() {
	function *generate() {
		const one = yield fetchAsync('generatorsWithPromises 1', 1000);
		const two = yield fetchAsync('generatorsWithPromises 2', 2000);
		const three = yield fetchAsync('generatorsWithPromises 3', 3000);
		console.log(one, two, three);
	}

	let it = generate();

	console.log(it.next(10).value.then(message => console.log(message)));
	console.log(it.next(20).value.then(message => console.log(message)));
	console.log(it.next(40).value.then(message => console.log(message)));
	console.log(it.next(40));

	return 'should return first';
}

export function asyncAwait() {
	async function asyncFunction() {
		const result = await fetchAsync('asyncAwait 1', 2000); // returns promise
		const result1 = await fetchAsync(result + '& asyncAwait 2', 2000); // returns promise

		// waits for promise and uses promise result
		return result1;
	}

	asyncFunction().then(result => console.log(result));

	return 'should return first';
}

