import Dispatcher from'../utils/Dispatcher';
import RoutingConstants from '../constants/RoutingConstants';

export default {
	createPage: function (data) {
		Dispatcher.dispatch({
			actionType: RoutingConstants.CREATE_PAGE,
			data: data
		});
	}
};
