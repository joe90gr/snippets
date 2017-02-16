import serviceRepository from 'utils/ServiceRepository';

import { router } from 'utils/express-utils';
import RoutingService from 'services/RoutingService.server';
import SessionService from 'services/SessionService.server';

serviceRepository
	.register(RoutingService, router)
	.register(SessionService);
