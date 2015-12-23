import { arraysOne } from './dataStructures/arrays.js';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from './dataStructures/iterators.js';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward, hashmaps } from './dataStructures/lists.js';
import { queues } from './dataStructures/queues.js';
import { pushToStack, palinDromes } from './dataStructures/stacks.js';
import { promises, promisesOne, promisesTwo } from './esSixFeatures/promises.js';
import { formatMessages } from './formatMessage/formatMessages.js';
import examples from './reactExamples/examples.js';

var events = require('../utils/events');

var mainTitle = document.getElementsByClassName('main-title')[0];
var welcomeTitle = document.getElementsByClassName('welcome-title')[0];

events.on('root', function () {
	mainTitle.innerHTML = 'Home Page';
	welcomeTitle.innerHTML = 'Home Page';
});

events.on('examples', function () {
	mainTitle.innerHTML = 'ReactJS examples';
	welcomeTitle.innerHTML = 'ReactJS examples';
	examples();
});

events.on('iterators', iterators);
events.on('lists', lists);
events.on('promises', esSixFeatures);
events.on('stack', stacksExample);
events.on('hashmap', hashTables);
events.on('queue', queuesExample);
events.on('format-messages', formatMessagesExample);

require('../utils/router');

function iterators() {
	mainTitle.innerHTML = 'Iterators';
	welcomeTitle.innerHTML = 'Iterators';

	renderToDom({
		iteratorForEach: iteratorForEach,
		iteratorEvery: iteratorEvery,
		iteratorSome: iteratorSome,
		iteratorReduce: iteratorReduce
	});
}

function lists() {
	mainTitle.innerHTML = 'lists';
	welcomeTitle.innerHTML = 'lists';

	renderToDom({
		adtListAppendRemove: adtListAppendRemove,
		adtListNextPrevious: adtListNextPrevious,
		adtListIterateFoward: adtListIterateFoward,
		adtListIterateBackward: adtListIterateBackward
	});
}

function hashTables() {
	mainTitle.innerHTML = 'hashmap';
	welcomeTitle.innerHTML = 'hashmap';

	renderToDom({
		hashmaps: hashmaps
	});
}

function stacksExample() {
	mainTitle.innerHTML = 'stacks Example';
	welcomeTitle.innerHTML = 'Stack example';

	renderToDom({
		pushToStack: pushToStack,
		palinDromes: palinDromes
	});
}

function queuesExample() {
	mainTitle.innerHTML = 'queues Example';
	welcomeTitle.innerHTML = 'queues example';

	renderToDom({
		queues: queues
	});
}

function esSixFeatures() {
	mainTitle.innerHTML = 'promises';
	welcomeTitle.innerHTML = 'promises';

	renderToDom({
		promises: promises,
		promisesOne: promisesOne,
		promisesTwo: promisesTwo
	});
}

function formatMessagesExample() {
	mainTitle.innerHTML = 'format messages example';
	welcomeTitle.innerHTML = 'format messages example';

	renderToDom({
		formatMessages: formatMessages
	});
}

function renderToDom(elements) {
	var key, el, _el;
	var i = 0;

	clearAll();

	for (key in elements) {
		_el = document.getElementById('example-' + (i + 1));
		el = document.createElement('div');
		el.innerHTML = wrapDivBox(key, elements[key]) + '' + wrapDivBox(elements[key](printVals.bind(_el)));
		_el.appendChild(el);
		i++;
	}
}

function clearAll() {
	var i;
	var elements = document.getElementsByClassName('example');

	for (i = 0; i < elements.length; i++) {
		elements[i].innerHTML = '';
	}
}

function printVals(val) {
	var el = document.createElement('p');
	el.innerHTML = val;
	this.appendChild(el);
}

function wrapDivBox() {
	var args = Array.prototype.slice.call(arguments);
	var str;

	if (args.length > 1) {
		str = '<h2>'+args[0]+'</h2><div class="example">'+args[1]+'</div>';
	} else {
		str = '<div class="example">'+args[0]+'</div>';
	}

	return str;
}
