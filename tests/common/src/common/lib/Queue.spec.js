import { Queue } from '../../../../../src/common/lib/Queue.js';

const NUMBER_1 = 'number 1';
const NUMBER_2 = 'number 2';
const NUMBER_3 = 'number 3';
const NUMBER_4 = 'number 4';
const STR_OUT = `${NUMBER_1} code: 43\n${NUMBER_2} code: 41\n${NUMBER_3} code: 24\n${NUMBER_4} code: 32\n`;

var pojos = [
	new Pojo(NUMBER_1, 43),
	new Pojo(NUMBER_2, 41),
	new Pojo(NUMBER_3, 24),
	new Pojo(NUMBER_4, 32)
];

function Pojo(val1, val2) {
	this.name = val1;
	this.code = val2;
}

describe('Given the Stack module', () => {
	let queue;

	beforeEach(() => {
		queue = new Queue();

		pojos.forEach((obj) => {
			queue.enqueue(obj);
		});
	});

	describe('when the queue has enqueued a predefined set of elements', () => {
		it('should have the correct length of elements.', () => {
			expect(queue.count()).to.equal(pojos.length);
		});

		it('should have the correct element at the front of the queue.', () => {
			let { name } = queue.front();

			expect(name).to.equal(NUMBER_1);
		});

		it('should have the correct element at the back of the queue.', () => {
			let { name } = queue.back();

			expect(name).to.equal(NUMBER_4);
		});

		describe('and a dequeue is performed', () => {
			it('should dequeue and return the first element.', () => {
				let { name } = queue.dequeue();

				expect(name).to.equal(NUMBER_1);
			});

			it('should shift so that the previous element moves to the front.', () => {
				queue.dequeue();

				expect(queue.front().name).to.equal(NUMBER_2);
			});
		});

		describe('and the queue is dequeued entirely', () => {
			it('should empty the queue.', () => {
				expect(queue.empty()).to.equal(false);

				for (let i = 0; i < pojos.length; i++) {
					queue.dequeue();
				}

				expect(queue.empty()).to.equal(true);
			});
		});

		describe('and the queue is dequeued entirely in order of priority', () => {
			it('should empty the queue by priority.', () => {
				let previous = 0;

				for (let i = 0; i < pojos.length; i++) {
					let val = queue.dequeuePriority();
					let currentCodeVal = val[0].code;

					expect(currentCodeVal).to.be.above(previous);

					previous = currentCodeVal;
				}
			});

			it('should output the entire contents as a formatted string.', () => {
				expect(queue.toStringPriority()).to.equal(STR_OUT);
			});
		});
	});
});
