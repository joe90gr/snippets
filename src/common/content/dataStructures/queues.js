import { Queue } from '../lib/Queue.js';

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

	printHTML('------------------');
	printHTML(queues.toString());

	printHTML('Front of the queue: ' + queues.front());
	printHTML('Back of the queue: ' + queues.back());

	return dequeuedValue;
}

export function dancers(printHTML) {
	function Dancer(name, sex) {
		this.name = name;
		this.sex = sex;
	}

	function getDancers(males, females) {
		var names = [
			[ 'F', 'Allison McMillan' ],
			[ 'M', 'Frank Opitz' ],
			[ 'M', 'Mason McMillan' ],
			[ 'M', 'Clayton Ruff' ],
			[ 'F', 'Cheryl FerenBack' ],
			[ 'M', 'Raymond Willaims' ],
			[ 'F', 'Jennefer Ingram' ],
			[ 'M', 'Bryan Frazer' ],
			[ 'M', 'David Durr' ],
			[ 'M', 'Danny Martin' ],
			[ 'F', 'Aurora Adney' ]
		];

		for (let i = 0; i < names.length; ++i) {
			let dancer = names[i];
			let sex = dancer[0];
			let name = dancer[1];

			if (sex === 'F') {
				females.enqueue(new Dancer(name, sex));
			} else {
				males.enqueue(new Dancer(name, sex));
			}

		}
	}

	function dance(males, females) {
		printHTML('The dance partners are: \n');
		while (!females.empty() && !males.empty()) {
			let femalePerson = females.dequeue();
			let malePerson = males.dequeue();
			printHTML('Female dancer is ' + femalePerson.name + ' and the male dancer is ' + malePerson.name);
		}
	}

	function main() {
		var maleDancers = new Queue();
		var femaleDancers = new Queue();
		getDancers(maleDancers, femaleDancers);
		dance(maleDancers, femaleDancers);

		if (!femaleDancers.empty()) {
			printHTML(femaleDancers.front().name + ' is waiting to dance');
		}

		if (!maleDancers.empty()) {
			printHTML(maleDancers.front().name + ' is waiting to dance');
		}

		if (femaleDancers.count() > 0) {
			printHTML('There are ' + femaleDancers.count() + ' female dancers waiting to dance');
		}

		if (maleDancers.count() > 0) {
			printHTML('There are ' + maleDancers.count() + ' male dancers waiting to dance');
		}
	}

	main();

	return '';
}

export function radixSort(printHTML) {
	let queues = [];
	let nums = [];

	function distribute(nums, queues, n, digit) {
		for (let i = 0; i < n; ++i) {
			if (digit === 1) {
				queues[nums[i]%10].enqueue(nums[i]);
			} else {
				queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
			}
		}
	}

	function collect(queues, nums) {
		let i = 0;
		for (let digit = 0; digit < 10; ++digit) {
			while (!queues[digit].empty()) {
				nums[i++] = queues[digit].dequeue();
			}
		}
	}

	function dispArray(arr) {
		let str = '';
		for (let i = 0; i < arr.length; ++i) {
			str += arr[i] + ' ';
		}

		printHTML(str);
	}

	function main() {
		let digits = 20;
		for (let i = 0; i < digits; ++i) {
			queues[i] = new Queue();
			nums[i] = Math.floor(Math.floor(Math.random() * 101));
		}

		printHTML('Before radix sort');
		dispArray(nums);
		distribute(nums, queues, digits, 1);
		collect(queues, nums);
		distribute(nums, queues, digits, 10);
		collect(queues, nums);
		printHTML('\nAfter radix sort: ');
		dispArray(nums);
	}

	main();

	return '';
}

export function priorityQueue(printHTML) {
	function Patient(name, code) {
		this.name = name;
		this.code = code;
	}

	function nextPatent(ed) {
		let seen = ed.dequeuePriority();
		printHTML('----------------------------------------');
		printHTML('Patient being treated: ' + seen[0].name);
		printHTML('Patient waiting to be seen');
		printHTML(ed.toStringPriority());
	}

	function main() {
		var ed = new Queue();

		ed.enqueue(new Patient('Smith', 5));
		ed.enqueue(new Patient('Jones', 4));
		ed.enqueue(new Patient('Fehrenback', 6));
		ed.enqueue(new Patient('Brown', 1));
		ed.enqueue(new Patient('Ingram', 1));
		printHTML(ed.toStringPriority());

		nextPatent(ed);
		nextPatent(ed);
		nextPatent(ed);
		nextPatent(ed);

	}

	main();
	return '';
}
