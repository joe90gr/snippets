import { LinkedList } from 'common/content/lib/LinkedList.js';

const FOUR_TIMES = 4;
const BY_TWO = 2;
const BY_THREE = 3;
const CITY_ONE = 'London';
const CITY_TWO = 'Oxford';
const CITY_THREE = 'Exeter';
const CITY_FOUR = 'Poole';

describe('Given the LinkedList module', () => {
	var linkedList;
	var printCallbackSpy = sinon.spy();

	beforeEach(() => {
		linkedList = new LinkedList();

		linkedList.insert(CITY_ONE, 'head');
		linkedList.insert(CITY_TWO, CITY_ONE);
		linkedList.insert(CITY_THREE, CITY_TWO);
		linkedList.insert(CITY_FOUR, CITY_THREE);
	});

	describe('when the print callback is provided', () => {
		it('should call the print callback for every list item.', () => {
			linkedList.display(printCallbackSpy);

			expect(printCallbackSpy.callCount).to.equal(FOUR_TIMES);
		});
	});

	describe('when traversing', () => {
		it('should find the requested element.', () => {
			let node = linkedList.find(CITY_TWO);

			expect(node.element).to.equal(CITY_TWO);
		});

		it('should find the element by nth places in advance.', () => {
			let node = linkedList.advance(BY_THREE);

			expect(node.element).to.equal(CITY_THREE);
		});

		it('should find the element by nth places back', () => {
			let node = linkedList.back(BY_TWO);

			expect(node.element).to.equal(CITY_THREE);
		});

		it('should find the last element.', () => {
			let node = linkedList.findLast();

			expect(node.element).to.equal(CITY_FOUR);
		});

		it('should display the remaining items in order after 1 has been removed.', () => {
			printCallbackSpy.reset();
			linkedList.remove(CITY_TWO);
			linkedList.display(printCallbackSpy);

			expect(printCallbackSpy.callCount).to.equal(3);

			expect(printCallbackSpy.firstCall).calledWith(CITY_ONE);
			expect(printCallbackSpy).not.calledWith(CITY_TWO);
			expect(printCallbackSpy.secondCall).calledWith(CITY_THREE);
			expect(printCallbackSpy.thirdCall).calledWith(CITY_FOUR);
		});

		it('should advance by nth number of places and display the nth node.', () => {
			let node = linkedList.advance(BY_TWO);

			linkedList.show(printCallbackSpy);

			expect(printCallbackSpy).calledWith('The current node is: ' + node.element);
		});

		it('should display the Linklist in reverse order.', () => {
			printCallbackSpy.reset();
			linkedList.displayReverse(printCallbackSpy);

			expect(printCallbackSpy.firstCall).calledWith(CITY_FOUR);
			expect(printCallbackSpy.secondCall).calledWith(CITY_THREE);
			expect(printCallbackSpy.thirdCall).calledWith(CITY_TWO);
			expect(printCallbackSpy.lastCall).calledWith(CITY_ONE);
		});
	});
});
