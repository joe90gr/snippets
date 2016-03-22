import Dispatcher from '../utils/Dispatcher';
import EventEmitter from 'events';

class AbstractStore {
	constructor() {
		this.CHANGE_EVENT = 'change';
		this._data = null;
	}

	eventEmitter() {
		return EventEmitter.prototype;
	}

	getData() {
		return this._data;
	}

	emitChange() {
		this.eventEmitter().emit(this.CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.eventEmitter().on(this.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.eventEmitter().removeListener(this.CHANGE_EVENT, callback);
	}

	dispatcher() {
		return Dispatcher;
	}
}

export default AbstractStore;
