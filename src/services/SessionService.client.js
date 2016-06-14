import request from 'superagent';

class SessionService {
	constructor() {
	}

	loginRequest(req, res, cb) {
		request
			.post('/login')
			.send({
				userName: req.body.userName,
				password: req.body.password
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Accept', 'application/json')
			.end(cb);
	}

	logoutRequest(req, res, cb) {
		request
			.get('/logout')
			.end(cb);
	}
}

export default SessionService;
