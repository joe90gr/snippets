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
import { classInheritance } from '../../src/common/esSixFeatures/classes.js';
import { formatMessages } from '../../src/common/formatMessage/formatMessages.js';
import { graphAlgorithm } from '../../src/common/algorithms/algorithms.js';
import { factory } from '../../src/common/patterns/factory.js';
import { examples, example1, example2, example3, example4 } from '../../src/common/reactExamples/examples.js';
import events from '../../src/utils/events';
import router from './utils/router';

import PrimaryContent from '../../src/views/PrimaryContent';
import RoutingAction from '../../src/actions/RoutingAction';

ReactDOM.render(<PrimaryContent title="Home" model= {[]} />, document.getElementsByClassName('content')[0]);

events.on('index', function () {
	RoutingAction.createPage([ examples ]);
});

events.on('examples', function () {
	RoutingAction.createPage([ examples, example1, example2, example3, example4 ]);
});

events.on('iterators', function () {
	RoutingAction.createPage([ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ]);
});

events.on('lists', function () {
	RoutingAction.createPage([ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ]);
});

events.on('promises', function () {
	RoutingAction.createPage([ promises, promisesOne, promisesTwo ]);
});

events.on('classes', function () {
	RoutingAction.createPage([ classInheritance ]);
});

events.on('stack', function () {
	RoutingAction.createPage([ pushToStack, palinDromes ]);
});

events.on('hashmap', function () {
	RoutingAction.createPage([ hashMaps, hashMapIntegers ]);
});

events.on('queue', function () {
	RoutingAction.createPage([ queues, dancers, radixSort, priorityQueue ]);
});

events.on('algorithms', function () {
	RoutingAction.createPage([ graphAlgorithm ]);
});

events.on('linked-lists', function () {
	RoutingAction.createPage([ linkedLists, circularLinkedList ]);
});

events.on('format-messages', function () {
	RoutingAction.createPage([ formatMessages ]);
});

events.on('factory', function () {
	RoutingAction.createPage([ factory ]);
});

router();

