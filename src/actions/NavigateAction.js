import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';

export default {
	navigateTo: function (route) {
		RoutingAction.routeTo(route);
		ContentAction.createPage(route);
	}
};
