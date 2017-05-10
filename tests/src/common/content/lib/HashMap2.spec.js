import { HashMap } from 'common/content/lib/HashMap2.js';

const FOUR_TIMES = 4;
const FIRST_ELEMENT = 'name1';
const SECOND_ELEMENT = 'name2';
const THIRD_ELEMENT = 'name3';
const LAST_ELEMENT = 'name4';

var lists = [ FIRST_ELEMENT, SECOND_ELEMENT, THIRD_ELEMENT, LAST_ELEMENT ];
var printCallbackSpy = sinon.spy();

describe('Given the HashMap module', () => {
	let hashMap;

	beforeEach(() => {
		hashMap = new HashMap();

		lists.forEach((val) => {
			hashMap.put(val);
		});
	});

	describe('when the List has been populated with a predefined set of elements', () => {
		it('should have the correct length of elements.', () => {
			hashMap.showDistro(printCallbackSpy);

			expect(printCallbackSpy.callCount).to.equal(FOUR_TIMES);

		});

		it('should call the printCallback with the stringified output.', () => {
			let firstElement = hashMap.betterHash(FIRST_ELEMENT);

			hashMap.showDistro(printCallbackSpy);

			expect(printCallbackSpy).calledWith(`${firstElement}: ${FIRST_ELEMENT}`);
		});

		describe('and the simple hash algorithm is used', () => {
			it('should yeald a result from the hash algorithm', () => {
				expect(hashMap.simpleHash(FIRST_ELEMENT)).to.equal(55);
				expect(hashMap.simpleHash(SECOND_ELEMENT)).to.equal(56);
			});
		});

		describe('and the better hash algorithm is used', () => {
			it('should yeald a result from the hash algorithm', () => {
				expect(hashMap.betterHash(FIRST_ELEMENT)).to.equal(96);
				expect(hashMap.betterHash(SECOND_ELEMENT)).to.equal(97);
			});
		});
	});
});

