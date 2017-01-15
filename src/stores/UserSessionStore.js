import userConstants from 'constants/UserConstants';
import AbstractStore from './AbstractStore';

class UserSessionStore extends AbstractStore {
	constructor(deserializedState) {
		super();

		this.blankUser = {
			userId: null,
			name: null,
			surname: null,
			email: null,
			accessLevel: null,
			status: { loggedIn: false },
			error: null
		};

		this.user = deserializedState.user || this.blankUser;
	}

	user() {
		return this.user;
	}

	isAuthenticated() {
		return this.user.status.loggedIn;
	}

	hasErrors() {
		return !!this.user.error;
	}

	errors() {
		return this.user.error;
	}

	_setInitialSessionData(userSession) {
		this.user = userSession || this.blankUser;
	}

	_updateUserInfo(user) {
		this.user = user.text ? JSON.parse(user.text) : user;
	}

	_updateUserError(user) {
		this.user.error = user;
	}

	serialize() {
		return { user: this.user };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case userConstants.INIT_SESSION_DATA:
				this._setInitialSessionData(action.data);
				break;
			case userConstants.AUTHENTICATE_USER:
				this._updateUserInfo(action.data);
				this.emitChange();
				break;
			case userConstants.INVALIDATE_USER:
				this._updateUserInfo(action.data);
				this.emitChange();
				break;
			case userConstants.AUTHENTICATION_ERROR:
				this._updateUserError(action.data);
				this.emitChange();
				break;
			default:
				console.log('UserSessionStore none found');
		}
	}
}

UserSessionStore.storeName = 'userSessionStore';

export default UserSessionStore;
