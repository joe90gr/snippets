import React from 'react';
import ReactDom from 'react-dom/server';

import Index from 'platform/views/components/Index';
import { resolveDeepPages, transformPathToKey } from 'utils/utilFunctions';
import routes from 'platform/configuration/routes';
import UserAction from 'platform/actions/UserAction';
import RoutingAction from 'platform/actions/RoutingAction';
import ContentAction from 'platform/actions/ContentAction';

class RoutingService {
	constructor(expressRouter) {
		Object.keys(routes).forEach((route) => {
			const { method, page, pages, action, errorPage } = routes[route];

			if (page || pages) {
				expressRouter[method](route, this._handleRoute.bind(this));
			} else if (action) {
				expressRouter[method](route, action);
			} else {
				console.log('server 404 and 500', method);
				expressRouter[route] = errorPage;
			}
		});
	}

	_handleRoute(req, res) {
		const path = transformPathToKey(req.path, req.params);
		const { page, id } = resolveDeepPages(routes, path, req.params);

		UserAction.initiateUser(req, res);
		RoutingAction.routeTo({
			id,
			path: req.path,
			pathSigniture: path,
			params: req.params
		});
		ContentAction.createPage(page);

		res.send('<!doctype html>\n' + ReactDom.renderToStaticMarkup(<Index />));
	}

	exec() {}
}

RoutingService.serviceName = 'RoutingService';

export default RoutingService;
