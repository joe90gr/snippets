import { authenticateUser } from 'platform/services/authService';

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
	constructor() {}

	loginRequest(req, res, cb) {
		const { userName, password } = req.body;

		if (!req.session.user) {
			req.session.user = invalidatedUserSession();
		}

		authenticateUser({ userName, password }).then(_onSuccess, _onFail);

		function _onSuccess(userData) {
			req.session.isAuthenticated = true;
			populateUserSession(req, userData);

			cb(null, req.session.user);

			res.json(req.session.user);
		}

		function _onFail(userData) {
			req.session.user = invalidatedUserSession();
			req.session.user.error = userData.error;

			cb({ error: userData.code }, null);

			res.json(req.session.user);
		}
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
}

SessionService.serviceName = 'SessionService';

export default SessionService;
