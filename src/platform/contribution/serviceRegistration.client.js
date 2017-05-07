import serviceRepository from 'utils/ServiceRepository';

import director from 'director';
import RoutingService from 'services/RoutingService.client';
import SessionService from 'services/SessionService.client';

serviceRepository
	.register(RoutingService, director)
	.register(SessionService);
