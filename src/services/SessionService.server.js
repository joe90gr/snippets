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

function populateUserSession(req) {
	let userSession = req.session.user;

	userSession.userId = 'userId';
	userSession.name = req.body.userName;
	userSession.password = req.body.password;
	userSession.surname = 'surname';
	userSession.email = 'email';
	userSession.accessLevel = 'accessLevel';
	userSession.status.loggedIn = true;
	userSession.error = null;
}

function sanatiseSessionData(userSession) {
	var sanatisedCopy = assign({}, userSession);
	delete sanatisedCopy.password;

	return sanatisedCopy;
}

class SessionService {
	constructor() {
	}

	loginRequest(req, res, cb) {
		let isCredentialsVerified = isAuthenticated(req.body.userName, req.body.password);

		if (!req.session.user) {
			req.session.user = invalidatedUserSession();
		}

		if (isCredentialsVerified) {
			req.session.isAuthenticated = true;
			populateUserSession(req);

			cb(null, sanatiseSessionData(req.session.user));
		} else {
			req.session.user = invalidatedUserSession();

			cb({ error: 'invalidcredentials' }, null);
		}

		res.json(sanatiseSessionData(req.session.user));
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

export default SessionService;
