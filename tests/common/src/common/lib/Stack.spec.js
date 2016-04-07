import { Stack } from '../../../../../src/common/lib/Stack.js';

describe('Given the Stack module', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
		stack.push('10');
		stack.push('12');
		stack.push('15');
	});

	describe('when the stack has pushed a predefined amount of elements', () => {
		it('should have the correct length of elements.', () => {
			expect(stack.length()).to.equal(3);
		});
	});

	describe('when the stack has pushed a predefined amount (5) elements and popped one', () => {
		beforeEach(() => {
			stack.push('23');
			stack.push('20');
		});

		it('should have the predefined length of elements minus one.', () => {
			stack.pop();

			expect(stack.length()).to.equal(4);
		});

		it('should return the last element on the stack.', () => {
			let element = stack.pop();

			expect(element).to.equal('20');
		});

	});

	describe('when peeking into the stack', () => {
		it('should provide the last element of the stack.', () => {
			let element = stack.peek();

			expect(element).to.equal('15');
		});
	});

	describe('when clearing the stack', () => {
		it('should provide NO elements.', () => {
			stack.clear();

			expect(stack.toString().length).to.equal(0);
			expect(stack.length()).to.equal(0);
		});
	});
});
