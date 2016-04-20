import Dispatcher from 'utils/Dispatcher';
import EventEmitter from 'events';

class AbstractStore {
	constructor() {
		this.dispatcher = Dispatcher;
		this.eventEmitter = EventEmitter.prototype;
		this.CHANGE_EVENT = 'change';
	}

	emitChange() {
		this.eventEmitter.emit(this.CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.eventEmitter.on(this.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.eventEmitter.removeListener(this.CHANGE_EVENT, callback);
	}
}

export default AbstractStore;
