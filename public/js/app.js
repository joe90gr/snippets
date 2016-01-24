import React from 'react';
import ReactDOM from 'react-dom';
import { arraysOne } from '../../src/common/dataStructures/arrays.js';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from '../../src/common/dataStructures/iterators.js';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from '../../src/common/dataStructures/lists.js';
import { hashMaps, hashMapIntegers } from '../../src/common/dataStructures/hashMaps.js';
import { queues, dancers, radixSort, priorityQueue } from '../../src/common/dataStructures/queues.js';
import { linkedLists, circularLinkedList } from '../../src/common/dataStructures/linkedLists.js';
import { pushToStack, palinDromes } from '../../src/common/dataStructures/stacks.js';
import { promises, promisesOne, promisesTwo } from '../../src/common/esSixFeatures/promises.js';
import { formatMessages } from '../../src/common/formatMessage/formatMessages.js';
import { graphAlgorithm } from '../../src/common/algorithms/algorithms.js';
import { examples, example1, example2, example3, example4 } from '../../src/common/reactExamples/examples.js';

import events from '../../src/utils/events';

var PrimaryContent = require('../../src/views/PrimaryContent');
var reactWrapper = document.getElementsByClassName('content')[0];

events.on('index', home);
events.on('examples', reactExamples);
events.on('iterators', iterators);
events.on('lists', lists);
events.on('promises', esSixFeatures);
events.on('stack', stacksExample);
events.on('hashmap', hashTables);
events.on('queue', queuesExample);
events.on('algorithms', graphAlgorithmExample);
events.on('linked-lists', linkedListsExample);
events.on('format-messages', formatMessagesExample);

import router from './utils/router';

function home() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="Home" model= {[ examples ]}/>, reactWrapper);
}

function reactExamples() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="REACT JS example" model= {[ examples, example1, example2, example3, example4 ]}/>, reactWrapper);
}

function iterators() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="Iterators" model= {[ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ]}/>, reactWrapper);
}

function lists() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="Lists" model= {[ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ]}/>, reactWrapper);
}

function hashTables() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="HashTables" model= {[ hashMaps, hashMapIntegers ]}/>, reactWrapper);
}

function stacksExample() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="Stacks" model= {[ pushToStack, palinDromes ]}/>, reactWrapper);
}

function queuesExample() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="Queues" model= {[ queues, dancers, radixSort, priorityQueue ]}/>, reactWrapper);
}

function linkedListsExample() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="LinkedLists" model= {[ linkedLists, circularLinkedList ]}/>, reactWrapper);
}

function esSixFeatures() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="Promises" model= {[ promises, promisesOne, promisesTwo ]}/>, reactWrapper);
}

function formatMessagesExample() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title="FormatMessages" model= {[ formatMessages ]}/>, reactWrapper);
}

function graphAlgorithmExample() {
	ReactDOM.unmountComponentAtNode(reactWrapper);
	ReactDOM.render(<PrimaryContent title='Algorithms' model= {[ graphAlgorithm ]}/>, reactWrapper);
}

