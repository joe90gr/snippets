import serviceRepository from 'utils/ServiceRepository';

import director from 'director';
import RoutingService from 'platform/services/RoutingService.client';
import SessionService from 'platform/services/SessionService.client';

serviceRepository
	.register(RoutingService, director)
	.register(SessionService);
