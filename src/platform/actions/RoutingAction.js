import Dispatcher from 'utils/Dispatcher';
import RoutingConstants from 'constants/RoutingConstants';

export default {
	routeTo: function (data) {
		Dispatcher.dispatch({
			actionType: RoutingConstants.NAVIGATE_INTERNAL,
			data: data
		});
	}
};
