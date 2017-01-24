import React from 'react';
import ReactDom from 'react-dom/server';

import Index from 'views/Index';
import { resolveSubPages, transformPathToKey } from 'utils/utilFunctions';
import routes from 'configuration/routes';
import UserAction from 'actions/UserAction';
import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';

class RoutingService {
	constructor(expressRouter) {
		Object.keys(routes).forEach((route) => {
			expressRouter.get(route, this._handleRoute.bind(this));
		});
	}

	_handleRoute(req, res) {
		const path = transformPathToKey(req.path, req.params);
		const { page, id } = resolveSubPages(routes[path], req.params);

		UserAction.initiateUser(req, res);
		RoutingAction.routeTo({
			id,
			path: req.path,
			pathSigniture: path,
			params: req.params
		});
		ContentAction.createPage(page);

		res.send(ReactDom.renderToStaticMarkup(<Index />));
	}

	exec() {}
}

RoutingService.serviceName = 'RoutingService';

export default RoutingService;
