class ServiceRepository {
	constructor() {
		this.services = {};
	}

	register(Service) {
		this.services[Service.name] = Service;

		return this;
	}

	getService(serviceName) {
		return this.services[serviceName];
	}

	getRegisteredServices() {
		return this.services;
	}
}

export default new ServiceRepository();
