import A from './baseClass';

export function classInheritance(printHTML) {
	var a;

	class B extends A {
		constructor() {
			super(printHTML);
			printHTML('CONSTRUCTOR B');
		}

		// aMethod() {
		// 	printHTML('SUB aMethod');
		// }
	}

	a = new B();

	return a.aMethod();
}
