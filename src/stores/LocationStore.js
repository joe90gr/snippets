import AbstractStore from './AbstractStore';

import routes from 'configuration/routes';

class LocationStore extends AbstractStore {
	constructor() {
		super();

		this._routes = routes;
	}

	registeredRoutes() {
		return this._routes;
	}

	_onDispatch() {
		console.log('Locations none found');
	}
}

export default LocationStore;
