import React from 'react';
import ReactDom from 'react-dom/server';

import Index from 'views/Index';
import { getUrlSuffix } from 'utils/utilFunctions';
import routes from 'configuration/routes';
import UserAction from 'actions/UserAction';
import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';

class RoutingService {
	constructor(expressRouter) {
		Object.keys(routes).forEach((route) => {
			expressRouter.get(route, this._handleRoute);
		});
	}

	_handleRoute(req, res) {
		const { id, external } = routes[req.path];

		UserAction.initiateUser(req, res);
		RoutingAction.routeTo({ path: req.path, id, external });
		ContentAction.createPage(routes[getUrlSuffix(req.path)].page);

		res.send(ReactDom.renderToStaticMarkup(<Index />));
	}

	exec() {}
}

RoutingService.serviceName = 'RoutingService';

export default RoutingService;
