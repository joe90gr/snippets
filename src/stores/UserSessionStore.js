import userConstants from 'constants/userConstants';
import AbstractStore from './AbstractStore';

class UserSessionStore extends AbstractStore {
	constructor(deserializedState) {
		super();
		// this.use = [ 'routingStore' ];

		this.user = {
			userId: null,
			name: null,
			surname: null,
			email: null,
			accessLevel: null
		};

		this.user = deserializedState.user || this.user;
	}

	getUserInfo() {
		return this.user;
	}

	isAuthenticated() {
		return 'boolean';
	}

	hasErrors() {
		return 'boolean';
	}

	authenticateUser(user) {
		this.user = user;
	}

	invalidateUser() {
		this.user.userId = null;
		this.user.name = null;
		this.user.surname = null;
		this.user.email = null;
		this.user.accessLevel = null;

		return this.user;
	}

	serialize() {
		return { user: this.user };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case userConstants.AUTHENTICATE_USER:
				this.authenticateUser(action.data);
				this.emitChange();
				break;
			case userConstants.INVALIDATE_USER:
				this.invalidateUser({
					userId: null,
					name: null,
					surname: null,
					email: null,
					accessLevel: null
				});
				this.emitChange();
				break;
			default:
				console.log('UserSessionStore none found', action.actionType);
		}
	}
}

export default UserSessionStore;
