import serviceRepository from 'utils/ServiceRepository';

import director from 'director';
import ConfigService from 'platform/services/ConfigService';
import RoutingService from 'platform/services/RoutingService.client';
import SessionService from 'platform/services/SessionService.client';

export default function (config) {
	serviceRepository
		.register(ConfigService, config)
		.register(RoutingService, director, serviceRepository.getService('configService'))
		.register(SessionService);
}
