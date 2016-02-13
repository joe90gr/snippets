import Dispatcher from '../utils/Dispatcher';
import EventEmitter from 'events';
import RoutingConstants from '../constants/RoutingConstants';

var CHANGE_EVENT = 'change';

var _data = null;

var RoutingStore = Object.assign({}, EventEmitter.prototype, {
	getData: function () {
		return _data;
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

function create(data) {
	console.log('text: ' + data);
	_data = data;
}

Dispatcher.register(function (action) {
	switch (action.actionType) {
		case RoutingConstants.JOE_CREATE:
			create(action.data);
			RoutingStore.emitChange();
			break;
		default:
			console.log('none found');
	}
});

export default RoutingStore;
