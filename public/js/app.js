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
import { factory } from '../../src/common/patterns/factory.js';
import { examples, example1, example2, example3, example4 } from '../../src/common/reactExamples/examples.js';
import events from '../../src/utils/events';
import router from './utils/router';

import PrimaryContent from '../../src/views/PrimaryContent';
import RoutingAction from '../../src/actions/RoutingAction';

ReactDOM.render(<PrimaryContent title="Home" model= {[]} />, document.getElementsByClassName('content')[0]);

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
events.on('factory', factoryExample);

router();

function home() {
	RoutingAction.create([ examples ]);
}

function reactExamples() {
	RoutingAction.create([ examples, example1, example2, example3, example4 ]);
}

function iterators() {
	RoutingAction.create([ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ]);
}

function lists() {
	RoutingAction.create([ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ]);
}

function hashTables() {
	RoutingAction.create([ hashMaps, hashMapIntegers ]);
}

function stacksExample() {
	RoutingAction.create([ pushToStack, palinDromes ]);
}

function queuesExample() {
	RoutingAction.create([ queues, dancers, radixSort, priorityQueue ]);
}

function linkedListsExample() {
	RoutingAction.create([ linkedLists, circularLinkedList ]);
}

function esSixFeatures() {
	RoutingAction.create([ promises, promisesOne, promisesTwo ]);
}

function formatMessagesExample() {
	RoutingAction.create([ formatMessages ]);
}

function graphAlgorithmExample() {
	RoutingAction.create([ graphAlgorithm ]);
}

function factoryExample() {
	RoutingAction.create([ factory ]);
}

