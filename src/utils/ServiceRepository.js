import { deCapitalise } from 'utils/utilFunctions';

class ServiceRepository {
	constructor() {
		this.services = {};
	}

	register(Service, ...params) {
		this.services[deCapitalise(Service.serviceName)] = new Service(...params);

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
