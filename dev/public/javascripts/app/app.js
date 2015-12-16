import { arraysOne } from './dataStructures/arrays.js';
import { iteratorForEach } from './dataStructures/iterators.js';
import { iteratorEvery } from './dataStructures/iterators.js';
import { iteratorSome } from './dataStructures/iterators.js';
import { iteratorReduce } from './dataStructures/iterators.js';

import { adtListAppendRemove } from './dataStructures/lists.js';
import { adtListNextPrevious } from './dataStructures/lists.js';
import { adtListIterateFoward } from './dataStructures/lists.js';
import { adtListIterateBackward } from './dataStructures/lists.js';
import { hashmaps } from './dataStructures/lists.js';

import { pushToStack } from './dataStructures/stacks.js';
import { palinDromes } from './dataStructures/stacks.js';

import { promises } from './esSixFeatures/promises.js';
import { promisesOne } from './esSixFeatures/promises.js';
import { promisesTwo } from './esSixFeatures/promises.js';

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

function esSixFeatures() {
	mainTitle.innerHTML = 'promises';
	welcomeTitle.innerHTML = 'promises';

	renderToDom({
		promises: promises,
		promisesOne: promisesOne,
		promisesTwo: promisesTwo
	});
}

function renderToDom(elements) {
	var key, el, _el;
	var i = 0;

	for (key in elements) {
		_el = document.getElementById('example-' + (i + 1));
		_el.innerHTML = '';
		el = document.createElement('div');
		el.innerHTML = wrapDivBox(key, elements[key]) + '' + wrapDivBox(elements[key](printVals.bind(_el)));
		_el.appendChild(el);
		i++;
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
