import Dispatcher from 'utils/Dispatcher';
import events from'event-emitter';

class AbstractStore {
	constructor() {
		this.dispatcher = Dispatcher;
		this.event = events({});
		this.CHANGE_EVENT = 'change';
	}

	emitChange() {
		this.event.emit(this.CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.event.on(this.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.event.off(this.CHANGE_EVENT, callback);
	}
}

export default AbstractStore;
