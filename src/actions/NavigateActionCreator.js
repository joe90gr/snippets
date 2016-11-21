import { useService } from 'src/registry';

export default {
	navigateTo: function (route) {
		let routingService = useService('routingService');

		routingService.exec(route);
	}
};
