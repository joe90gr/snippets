import {} from 'contribution/serviceRegistration.server';
import {} from 'contribution/storeRegistration';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import { express, router } from './utils/express-utils';
import createServer from './createServer';

var app = express();
createServer(app);

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
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
app.use('/', router);
app.use(router['404']);
app.use(router['500']);
