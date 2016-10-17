import serviceRepository from 'utils/ServiceRepository';

import RoutingService from 'services/RoutingService.server';
import SessionService from 'services/SessionService.server';

serviceRepository
	.register(RoutingService)
	.register(SessionService);
