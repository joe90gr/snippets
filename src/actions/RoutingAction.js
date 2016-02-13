import Dispatcher from'../utils/Dispatcher';
import RoutingConstants from '../constants/RoutingConstants';

export default {
	create: function (data) {
		console.log('routingaction:' + data);
		Dispatcher.dispatch({
			actionType: RoutingConstants.JOE_CREATE,
			data: data
		});
	}
};
