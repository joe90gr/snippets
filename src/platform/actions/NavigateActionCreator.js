import { useService } from 'utils/registry';

export default {
	navigateTo: function (route) {
		let routingService = useService('routingService');

		routingService.exec(route);
	}
};
