import request from 'superagent';

export function loginRequest(cb) {
	request
		.post('/login')
		.send({ userName: 'joe', password: '1234' })
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.set('Accept', 'application/json')
		.end(function (err, res) {
			cb(err, res);
		});
}
