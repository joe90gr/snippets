import { Queue } from '../lib/Queue.js';

//Stacks
export function queues(printHTML) {
	var queues = new Queue();
	var dequeuedValue;

	queues.enqueue('Joe');
	queues.enqueue('Simon');
	queues.enqueue('Chris');
	queues.enqueue('Bharathy');
	queues.enqueue('Emanuele');
	queues.enqueue('Murali');
	queues.enqueue('Sai');
	queues.enqueue('Leila');

	printHTML(queues.toString());

	dequeuedValue = queues.dequeue();

	printHTML('____________');
	printHTML(queues.toString());

	printHTML('Front of the queue: ' + queues.front());
	printHTML('Back of the queue: ' + queues.back());

	return dequeuedValue;
}
