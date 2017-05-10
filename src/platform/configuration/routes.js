import React from 'react';
import ReactDom from 'react-dom/server';
import snippetPages from 'platform/configuration/snippet-routes';
import UserAction from 'platform/actions/UserAction';
import ErrorView from 'platform/views/components/Error';

export default {
	'/': {
		id: 'examples',
		method: 'get',
		page: {
			key: 'examples',
			baseLayout: 'LeftNavLayout'
		}
	},
	'/snippets': {
		id: 'snippets',
		method: 'get',
		page: {
			key: 'testing-url',
			baseLayout: 'RightNavLayout'
		}
	},
	'/snippets/:snippet': {
		id: 'snippets',
		method: 'get',
		pages: snippetPages
	},
	'/pong-game': {
		id: 'pong',
		method: 'get',
		page: {
			key: 'pong-game',
			baseLayout: 'LeftNavLayout'
		}
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
	},
	404: {
		id: 'error404',
		errorPage: function (req, res, next) {
			var err = new Error('Not Found');
			err.status = 404;
			next(err);
		}
	},
	500: {
		id: 'error500',
		errorPage: function (err, req, res, next) {
			res.status(err.status || 500).send(ReactDom.renderToString(<ErrorView message={ err.status || 500 } error={ err } />));
		}
	}
};
