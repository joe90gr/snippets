import React from 'react';
import ReactDom from 'react-dom/server';

import Error from 'views/Error';

export function devError(err, req, res, next) {
	res.status(err.status || 500);
	res.send(ReactDom.renderToString(<Error message={ error.message } error={ err } />));
}

export function error(err, req, res, next) {
	res.status(err.status || 500);
	res.send(ReactDom.renderToString(<Error message={ error.message } error={ err } />));
}

