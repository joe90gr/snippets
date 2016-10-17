import serviceRepository from 'utils/ServiceRepository';

import RoutingService from 'services/RoutingService.client';
import SessionService from 'services/SessionService.client';

serviceRepository
	.register(RoutingService)
	.register(SessionService);
