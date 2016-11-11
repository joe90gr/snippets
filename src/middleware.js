import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import routesServer from './routes/index';
import error404 from './routes/404';
import { devError, error } from './routes/error';

export default function () {
	var app = express();

	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'js');

	app.engine('js', require('express-react-views').createEngine());

	// uncomment after placing your favicon in /public
	// app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, '../public')));
	app.use(session({
		name: 'JOEID',
		cookie: {
			path: '/',
			httpsOnly: true,
			maxAge: null,
			secure: true
		},
		'saveUninitialized': false,
		secret: '1234567890QWERTY',
		resave: false
	}));
	app.use('/', routesServer);
	app.use(error404);
	if (app.get('env') === 'development') {
		app.use(devError);
	}
	app.use(error);

	return app;
}
