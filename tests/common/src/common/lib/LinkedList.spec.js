import { LinkedList } from '../../../../../src/common/lib/LinkedList.js';

const FOUR_TIMES = 4;

describe('Given the LinkedList module', () => {
	let linkedList;
	let printCallbackSpy = sinon.spy();

	beforeEach(() => {
		linkedList = new LinkedList();

		linkedList.insert('London', 'head');
		linkedList.insert('Oxford', 'London');
		linkedList.insert('Exeter', 'Oxford');
		linkedList.insert('Poole', 'Exeter');
	});

	describe('when the print callback is provided', () => {
		it('should call the print callback for every list item.', () => {
			linkedList.display(printCallbackSpy);

			expect(printCallbackSpy.callCount).to.equal(FOUR_TIMES);
		});
	});
});
