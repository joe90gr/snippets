import { Interface } from '../lib/Interface';

export function factory(printHTML) {
	class JuristictionFactory {
		constructor() {
		}

		create(type) {
			switch (type) {
				case 'SPAIN':
					return new Module1();
					break;
				case 'UKGC':
					return new Module2();
					break;
				default:
					return null;
					break;
			}
		}
	}

	class Module1 {
		getOnGameLoadOverlay() {
			return 'Module1';
		}
	}

	class Module2 {
		getOnGameLoadOverlay() {
			return 'im a Module2';
		}
	}

	let juristiction = new JuristictionFactory();
	let regulation = juristiction.create('SPAIN');

	Interface.ensureImplements(regulation, new Interface('test', [
		'getOnGameLoadOverlay'
	]));

	printHTML(regulation.getOnGameLoadOverlay());

}
