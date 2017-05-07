import { useService } from 'platform/registry';

export default {
	navigateTo: function (route) {
		let routingService = useService('routingService');

		routingService.exec(route);
	}
};
