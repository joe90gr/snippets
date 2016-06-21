import Dispatcher from 'utils/Dispatcher';
import UserConstants from 'constants/UserConstants';
import { useService } from 'src/registry';

export default {
	initiateUser: function (req, res) {
		this._checkUserSessionValid(req, res);

		Dispatcher.dispatch({
			actionType: UserConstants.INIT_SESSION_DATA,
			data: req.session.user
		});
	},

	authenticateUser: function (_req, _res) {
		var sessionService = useService('sessionService');

		sessionService.loginRequest(_req, _res, (err, res) => {
			let action = UserConstants.AUTHENTICATE_USER;

			if (err) {
				action = UserConstants.AUTHENTICATION_ERROR;
			}

			Dispatcher.dispatch({
				actionType: action,
				data: err || res
			});
		});
	},

	invalidateUser: function (_req, _res) {
		var sessionService = useService('sessionService');

		sessionService.logoutRequest(_req, _res, (err, res) => {
			Dispatcher.dispatch({
				actionType: UserConstants.INVALIDATE_USER,
				data: err || res
			});
		});
	},

	_checkUserSessionValid: function (req, res) {
		if (!req.session.isAuthenticated) {
			req.overide = true;
			this.invalidateUser(req, res);
		}
	}
};
