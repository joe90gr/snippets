export default class A {
	constructor(printHTML) {
		this.printHTML = printHTML;
		this.printHTML('CONSTRUCTOR A');
	}

	aMethod() {
		this.printHTML('SUPER aMethod');
	}

}
