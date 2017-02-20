import React from 'react';
import ReactDom from 'react-dom/server';
import snippetPages from 'configuration/snippet-routes';
import UserAction from 'actions/UserAction';
import ErrorView from 'views/Error';

export default {
	'/': {
		id: 'examples',
		method: 'get',
		page: {
			type: 'Snippets',
			title: 'Examples',
			layout: 'LeftNavLayout',
			content: 'examples'
		}
	},
	'/snippets': {
		id: 'snippets',
		method: 'get',
		page: {
			type: 'ExternalContent',
			title: 'Testing',
			layout: 'RightNavLayout',
			content: '/testing-url'
		}
	},
	'/snippets/:snippet': {
		id: 'snippets',
		method: 'get',
		pages: snippetPages
	},
	'/login': {
		id: 'login',
		method: 'post',
		type: 'xhrRequest',
		action: UserAction.authenticateUser
	},
	'/logout': {
		id: 'logout',
		method: 'get',
		type: 'xhrRequest',
		action: UserAction.invalidateUser
	}, 404: {
		id: 'error404',
		errorPage: function (req, res, next) {
			var err = new Error('Not Found');
			err.status = 404;
			next(err);
		}
	}, 500: {
		id: 'error500',
		errorPage: function (err, req, res, next) {
			res.status(err.status || 500).send(ReactDom.renderToString(<ErrorView message={ err.status || 500 } error={ err } />));
		}
	}
};
