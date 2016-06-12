import Dispatcher from 'utils/Dispatcher';
import UserConstants from 'constants/UserConstants';
import { useService } from 'src/registry';

export default {
	initiateUser: function (session) {
		Dispatcher.dispatch({
			actionType: UserConstants.INIT_SESSION_DATA,
			data: session
		});
	},

	authenticateUser: function (_req, _res) {
		let loginRequest = useService('loginRequest');

		loginRequest(_req, _res, (err, res) => {
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
		let logoutRequest = useService('logoutRequest');

		logoutRequest(_req, _res, (err, res) => {
			Dispatcher.dispatch({
				actionType: UserConstants.INVALIDATE_USER,
				data: err || res
			});
		});
	}
};
