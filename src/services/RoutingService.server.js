class RoutingService {
	constructor() {}

	bindRoutingActions(callback) {
		this.cb = callback;
	}

	getRouter() {
		return {
			setRoute: (route) => this.cb(route),
			init: () => {}
		};
	}
}

export default RoutingService;
