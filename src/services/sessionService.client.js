import request from 'superagent';

export function loginRequest(req, res, cb) {
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

export function logoutRequest(req, res, cb) {
	request
		.get('/logout')
		.end(cb);
}
