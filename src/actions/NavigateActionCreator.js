import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';
import { useService } from 'src/registry';

export default {
	navigateTo: function (route) {
		let routingService = useService('routingService');

		routingService.bindRoutingActions(function (_route) {
			RoutingAction.routeTo(_route);
			ContentAction.createPage(_route);
		});

		let router = routingService.getRouter();
		router.setRoute(route);
	}
};
