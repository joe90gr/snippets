import { Stack } from 'common/lib/Stack.js';

const STACK_ONE = '10';
const STACK_TWO = '12';
const STACK_THREE = '15';
const STACK_FOUR = '23';
const STACK_FIVE = '20';

describe('Given the Stack module', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
		stack.push(STACK_ONE);
		stack.push(STACK_TWO);
		stack.push(STACK_THREE);
	});

	describe('when the stack has pushed a predefined amount of elements', () => {
		it('should have the correct length of elements.', () => {
			expect(stack.length()).to.equal(3);
		});
	});

	describe('when the stack has pushed a predefined amount (5) elements and popped one', () => {
		beforeEach(() => {
			stack.push(STACK_FOUR);
			stack.push(STACK_FIVE);
		});

		it('should have the predefined length of elements minus one.', () => {
			stack.pop();

			expect(stack.length()).to.equal(4);
		});

		it('should return the last element on the stack.', () => {
			let element = stack.pop();

			expect(element).to.equal(STACK_FIVE);
		});

	});

	describe('when peeking into the stack', () => {
		it('should provide the last element of the stack.', () => {
			let element = stack.peek();

			expect(element).to.equal(STACK_THREE);
		});
	});

	describe('and popped from the stack', () => {
		it('should provide the last element of the stack', () => {
			stack.pop();
			let element = stack.peek();

			expect(element).to.equal(STACK_TWO);
		});
	});

	describe('when clearing the stack', () => {
		it('should provide NO elements.', () => {
			stack.clear();

			expect(stack.toString()).to.be.empty;
			expect(stack.length()).to.equal(0);
		});
	});
});
