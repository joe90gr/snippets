import serviceRepository from 'utils/ServiceRepository';

import { router } from 'utils/express-utils';
import ConfigService from 'platform/services/ConfigService';
import RoutingService from 'platform/services/RoutingService.server';
import SessionService from 'platform/services/SessionService.server';

export default function (config) {
	serviceRepository
		.register(ConfigService, config)
		.register(RoutingService, router, serviceRepository.getService('configService'))
		.register(SessionService);
}
