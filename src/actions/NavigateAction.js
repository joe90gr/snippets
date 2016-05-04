import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';
import contentService from 'services/contentService';

export default {
	navigateTo: function (route) {
		RoutingAction.routeTo(route);
		ContentAction.createPage(contentService(route));
	}
};
