import fs from'fs';
import _debug from 'debug';
import http from 'http';
import https from 'https';

export default function (app) {
	const debug = _debug('gulp-browserify-react:server');
	const https_options = {
		key: fs.readFileSync('./certificates/14961049-localhost.key'),
		cert: fs.readFileSync('./certificates/14961049-localhost.cert')
	};
	const port = normalizePort(process.env.PORT || '3000');
	app.set('port', port);

	const server = http.createServer(app);
	const httpsServer = https.createServer(https_options, app);

	server.listen(port);
	httpsServer.listen(3443, 'localhost');
	server.on('error', onError);
	server.on('listening', onListening);

	function normalizePort(val) {
		const port = parseInt(val, 10);

		if (isNaN(port)) {
			return val;
		}

		if (port >= 0) {
			return port;
		}

		return false;
	}

	function onError(error) {
		const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

		if (error.syscall !== 'listen') {
			throw error;
		}

		switch (error.code) {
			case 'EACCES':
				console.error(bind + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.error(bind + ' is already in use');
				process.exit(1);
				break;
			default:
				throw error;
		}
	}

	function onListening() {
		const addr = server.address();
		const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

		debug('Listening on ' + bind);
	}
}
