import { arraysOne } from './dataStructures/arrays.js';
import { iteratorForEach } from './dataStructures/iterators.js';
import { iteratorEvery } from './dataStructures/iterators.js';
import { iteratorSome } from './dataStructures/iterators.js';
import { iteratorReduce } from './dataStructures/iterators.js';
import examples from './reactExamples/examples.js';

var events = require('../utils/events');

var mainTitle = document.getElementsByClassName('main-title')[0];
var welcomeTitle = document.getElementsByClassName('welcome-title')[0];

var example1 = document.getElementById('example-1');
var example2 = document.getElementById('example-2');
var example3 = document.getElementById('example-3');
var example4 = document.getElementById('example-4');
var example5 = document.getElementById('example-5');
var example6 = document.getElementById('example-6');
var example7 = document.getElementById('example-7');
var example8 = document.getElementById('example-8');

events.on('root', function (args) {
    mainTitle.innerHTML = 'Home Page';
    welcomeTitle.innerHTML = 'Home Page';
    clearElements();
});

events.on('examples', function (args) {
    mainTitle.innerHTML = 'ReactJS examples';
    welcomeTitle.innerHTML = 'ReactJS examples';
    clearElements();
    examples();
});

events.on('iterators', function (args) {
    mainTitle.innerHTML = 'Iterators';
    welcomeTitle.innerHTML = 'Iterators';
    clearElements();
    iterators();
});

require('../utils/router');

function iterators() {
	var _iteratorForEach = iteratorForEach;
	var _iteratorEvery = iteratorEvery;
	var _iteratorSome = iteratorSome;
	var _iteratorReduce = iteratorReduce;


	var el = document.createElement('div');
	el.innerHTML = wrapDivBox('iteratorForEach', _iteratorForEach) + '' + wrapDivBox(_iteratorForEach());
	example1.appendChild(el);
	var el = document.createElement('div');
	el.innerHTML = wrapDivBox('iteratorEvery', _iteratorEvery) + '' + wrapDivBox(_iteratorEvery());
	example2.appendChild(el);
	var el = document.createElement('div');
	el.innerHTML = wrapDivBox('_iteratorSome', _iteratorSome) + '' + wrapDivBox(_iteratorSome());
	example3.appendChild(el);
	var el = document.createElement('div');
	el.innerHTML = wrapDivBox('_iteratorReduce', _iteratorReduce) + '' + wrapDivBox(_iteratorReduce(printVals.bind(example4)));
	example4.appendChild(el);
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

function clearElements() {
    example1.innerHTML = '';
    example2.innerHTML = '';
    example3.innerHTML = '';
    example4.innerHTML = '';
    example5.innerHTML = '';
    example6.innerHTML = '';
    example7.innerHTML = '';
    example8.innerHTML = '';
}

