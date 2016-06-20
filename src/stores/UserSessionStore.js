import userConstants from 'constants/userConstants';
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

	setSessionData(userSession) {
		this.user = userSession || this.blankUser;
	}

	getUserInfo() {
		return this.user;
	}

	isAuthenticated() {
		return this.user.status.loggedIn;
	}

	hasErrors() {
		return !!this.user.error;
	}

	getErrors() {
		return this.user.error;
	}

	updateUserInfo(user) {
		this.user = user.text ? JSON.parse(user.text) : user;
	}

	updateUserError(user) {
		this.user.error = user;
	}

	serialize() {
		return { user: this.user };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case userConstants.INIT_SESSION_DATA:
				this.setSessionData(action.data);
				break;
			case userConstants.AUTHENTICATE_USER:
				this.updateUserInfo(action.data);
				this.emitChange();
				break;
			case userConstants.INVALIDATE_USER:
				this.updateUserInfo(action.data);
				this.emitChange();
				break;
			case userConstants.AUTHENTICATION_ERROR:
				this.updateUserError(action.data);
				this.emitChange();
				break;
			default:
				console.log('UserSessionStore none found');
		}
	}
}

export default UserSessionStore;
