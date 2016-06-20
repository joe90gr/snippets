import assign from 'object-assign';
import { isAuthenticated } from 'services/authenticationService';

function invalidatedUserSession() {
	return {
		userId: null,
		name: null,
		surname: null,
		email: null,
		accessLevel: null,
		status: { loggedIn: false },
		error: null
	};
}

function populateUserSession(req, userData) {
	let userSession = req.session.user;

	userSession.userId = userData.userID;
	userSession.name = req.body.userName;
	userSession.surname = 'surname';
	userSession.email = 'email';
	userSession.accessLevel = 'accessLevel';
	userSession.status.loggedIn = true;
	userSession.error = null;
}

class SessionService {
	constructor() {
	}

	loginRequest(req, res, cb) {
		let submittedCredentials = {
			userName: req.body.userName,
			password: req.body.password
		};
		let _onSuccess = this._onSuccess.bind(this, req, res, cb);
		let _onFail = this._onFail.bind(this, req, res, cb);

		if (!req.session.user) {
			req.session.user = invalidatedUserSession();
		}

		isAuthenticated(submittedCredentials).then(_onSuccess, _onFail);
	}

	logoutRequest(req, res, cb) {
		req.session.isAuthenticated = false;
		req.session.regenerate(() => {});
		req.session.user = invalidatedUserSession();
		cb(null, req.session.user);

		if (!req.overide) {
			res.json(req.session.user);
		}
	}

	_onSuccess(req, res, cb, userData) {
		req.session.isAuthenticated = true;
		populateUserSession(req, userData);

		cb(null, req.session.user);

		res.json(req.session.user);
	}

	_onFail(req, res, cb, userData) {
		req.session.user = invalidatedUserSession();
		req.session.user.error = userData.error;

		cb({ error: userData.code }, null);

		res.json(req.session.user);
	}
}

export default SessionService;
