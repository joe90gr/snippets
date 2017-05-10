import { CArray } from 'common/content/lib/CArray.js';

describe('Given the CArray module', () => {
	const LENGTH_OF_FIVE = 5;
	const FIRST_INSERTED_VALUE = 100;
	const SECOND_INSERTED_VALUE = 105;
	const FIRST_ELEMENT = 0;
	const SECOND_ELEMENT = 1;
	const FIFTH_ELEMENT = 4;
	const ARR = [ 10, 5, 6, 18, 14, 9 ];

	let carray;

	beforeEach(() => {
		carray = new CArray(LENGTH_OF_FIVE);
	});

	describe('when setting up sample data', () => {
		it('should return a string of elements of predefined length.', () => {
			carray.setData();

			expect(carray.toString().split(' ')).to.have.length(LENGTH_OF_FIVE);
		});
	});

	describe('when clearing up sample data', () => {
		it('should return a string containing zeros.', () => {
			carray.setData();
			carray.clear();

			let arr = carray.toString().split(' ');
			let result = arr.every((val) => {
				return val === '0';
			});

			expect(result).to.equal(true);
		});
	});

	describe('when inserting into sample data', () => {
		it('should return a string of elements of predefined length', () => {
			carray.setData();
			carray.insert(FIRST_INSERTED_VALUE);

			expect(carray.toString().split(' ')).to.have.length(5);
		});

		it('should return a string of values with the first element inserted', () => {
			carray.setData();
			carray.insert(FIRST_INSERTED_VALUE);

			expect(carray.toString().split(' ')[FIRST_ELEMENT]).to.be.equal(FIRST_INSERTED_VALUE + '');
		});

		it('should return a string of values with the second element inserted', () => {
			carray.setData();
			carray.insert(FIRST_INSERTED_VALUE);
			carray.insert(SECOND_INSERTED_VALUE);

			expect(carray.toString().split(' ')[SECOND_ELEMENT]).to.be.equal(SECOND_INSERTED_VALUE + '');
		});
	});

	describe('when swapping two elements in the sample data', () => {
		it('should return a string of elements with the swapped elements.', () => {
			carray.swap(ARR, SECOND_ELEMENT, FIFTH_ELEMENT);

			expect(ARR[SECOND_ELEMENT]).to.equal(14);
			expect(ARR[FIFTH_ELEMENT]).to.equal(5);
		});
	});

	describe('when bubble sort is applied', () => {
		it('should return a string of sorted elements.', () => {
			carray.setData();
			carray.bubbleSort();

			let arr = carray.toString().split(' ');
			let result = arr.every((val, index, arr) => {
				return val <= (arr[index + 1] || val);
			});

			expect(result).to.equal(true);
		});
	});
});
