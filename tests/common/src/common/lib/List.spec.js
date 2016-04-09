import { List } from '../../../../../src/common/lib/List.js';

const FIRST_ELEMENT = 43;
const SECOND_ELEMENT = 41;
const THIRD_ELEMENT = 24;
const LAST_ELEMENT = 32;
const NON_EXISTENT_VARIABLE = 65;
const EMPTY = 0;
const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const THIRD_INDEX = 2;
const LAST_INDEX = 3;

var lists = [ FIRST_ELEMENT, SECOND_ELEMENT, THIRD_ELEMENT, LAST_ELEMENT ];

describe('Given the List module', () => {
	let list;

	beforeEach(() => {
		list = new List();

		lists.forEach((val) => {
			list.append(val);
		});
	});

	describe('when the List has been populated with a predefined set of elements', () => {
		it('should have the correct length of elements.', () => {
			expect(list.length()).to.equal(4);
		});

		it('should have the pointer to the front of the list by default', () => {
			expect(list.currentPosition()).to.equal(FIRST_INDEX);
		});

		describe('when moving the pointer', () => {
			it('should move the pointer to the end of the list..', () => {
				list.end();

				expect(list.currentPosition()).to.equal(LAST_INDEX);
			});

			it('should have the pointer to the front of the list', () => {
				list.end();
				list.front();

				expect(list.currentPosition()).to.equal(FIRST_INDEX);
			});

			it('should get the element defined by the set pointer', () => {
				list.moveTo(LAST_INDEX);

				expect(list.getElement()).to.equal(LAST_ELEMENT);
			});
		});

		describe('when getting the next or previous element.', () => {
			it('should get the next element', () => {
				list.moveTo(SECOND_INDEX);

				expect(list.next()).to.equal(SECOND_ELEMENT);
				expect(list.next()).to.equal(THIRD_ELEMENT);
			});

			it('should get the previous element', () => {
				list.moveTo(THIRD_INDEX);

				expect(list.previous()).to.equal(SECOND_ELEMENT);
				expect(list.previous()).to.equal(FIRST_ELEMENT);
			});

			it('should return false if there is no subsequent elements.', () => {
				list.moveTo(4);

				expect(list.hasNext()).to.equal(false);
				expect(list.hasPrevious()).to.equal(true);
			});

			it('should return false if there is no previous elements.', () => {
				list.moveTo(FIRST_INDEX);

				expect(list.hasPrevious()).to.equal(false);
				expect(list.hasNext()).to.equal(true);
			});
		});

		describe('and remove an element from the list', () => {
			it('should remove only that element', () => {
				list.remove(SECOND_ELEMENT);

				expect(list.toString()).to.equal(`${ FIRST_ELEMENT },${ THIRD_ELEMENT },${ LAST_ELEMENT }`);
				expect(list.length()).to.equal(3);
			});
		});

		describe('and find the position of an existing element', () => {
			it('should return the elements index.', () => {
				expect(list.find(THIRD_ELEMENT)).to.equal(THIRD_INDEX);
			});
		});

		describe('and find the position of an NON-existing element', () => {
			it('should return -1.', () => {
				expect(list.find(NON_EXISTENT_VARIABLE)).to.equal(-1);
			});
		});

		describe('and find an element from the list', () => {
			it('should return TRUE if element exists.', () => {
				expect(list.contains(SECOND_ELEMENT)).to.equal(true);
			});

			it('should return FALSE if element does NOT exist.', () => {
				expect(list.contains(NON_EXISTENT_VARIABLE)).to.equal(false);
			});
		});

		describe('and then cleared entirely', () => {
			it('should return an empty array with position reset to 0.', () => {
				list.clear();

				expect(list.length()).to.equal(EMPTY);
				expect(list.currentPosition()).to.equal(FIRST_INDEX);
			});
		});
	});
});
