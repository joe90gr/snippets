import serviceRepository from 'utils/ServiceRepository';

import { router } from 'utils/express-utils';
import RoutingService from 'platform/services/RoutingService.server';
import SessionService from 'platform/services/SessionService.server';

serviceRepository
	.register(RoutingService, router)
	.register(SessionService);
