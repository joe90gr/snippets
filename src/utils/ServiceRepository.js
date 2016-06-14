class ServiceRepository {
	constructor() {
		this.services = {};
	}

	register(Service) {
		this.services[this.serviceInstanceName(Service.name)] = new Service();

		return this;
	}

	getService(serviceName) {
		return this.services[serviceName];
	}

	getRegisteredServices() {
		return this.services;
	}

	serviceInstanceName(storeName) {
		return `${storeName.charAt(0).toLowerCase()}${storeName.slice(1)}`;
	}
}

export default new ServiceRepository();
