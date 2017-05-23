class ConfigService {
	constructor(config) {
		this._configs = config;
	}

	fetchConfigs() {
		return this._configs;
	}
}

ConfigService.serviceName = 'ConfigService';

export default ConfigService;
