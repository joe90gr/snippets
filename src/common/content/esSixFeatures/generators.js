import 'babel-polyfill';

export function generators(printHTML) {
	function *foo() {
		yield 1;
		yield 2;
		yield 99;
	}

	let it = foo();

	printHTML(it.next().value);
	printHTML(it.next().value);
	printHTML(it.next().value);

	return 'wow';
}

