class ServiceRepository {
	constructor() {
		this.services = {};
	}

	register(Service, ...params) {
		this.services[this.serviceInstanceName(Service.name)] = new Service(...params);

		return this;
	}

	getService(serviceName) {
		return this.services[serviceName];
	}

	getRegisteredServices() {
		return this.services;
	}

	serviceInstanceName(serviceName) {
		return `${serviceName.charAt(0).toLowerCase()}${serviceName.slice(1)}`;
	}
}

export default new ServiceRepository();
