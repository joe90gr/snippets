import React from 'react';
import ReactDOM from 'react-dom';
import SubscribeToStores from 'utils/SubscribeToStores';

import userAction from 'actions/userAction';

import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import AccessControl from './components/AccessControl';

const storeManifest = {
	userSessionStore: [ 'user', 'errors' ],
	contentStore: [ 'page' ]
};

export default SubscribeToStores(React.createClass({
	displayName: 'reactWrapper',

	propTypes: {
		userSessionStore: React.PropTypes.object,
		contentStore: React.PropTypes.object
	},

	render: function () {
		let { contentStore, userSessionStore } = this.props;
		let { page } = contentStore;
		let { user, errors } = userSessionStore;

		return (
			<div className="react-wrapper">
				<AccessControl loggedIn={ false }>
					{ this._loggedOutForm() }
				</AccessControl>
				<AccessControl loggedIn>
					{ this._loggedInForm(user) }
				</AccessControl>
				<p>{ errors }</p>
				<Navigation />
				<div className="content">
					<PrimaryContent title={ page.title } model= { page.content } />
				</div>
			</div>
		);
	},

	_loggedInForm: function (user) {
		return (
			<div>
				<h1>Hello { user.name }</h1>
				<form method="get" action="/logout" onSubmit={ this._onSubmitLogout }>
					<button type="submit">Logout</button>
				</form>
			</div>
		);
	},

	_loggedOutForm: function () {
		return (
			<div>
				<h1>Hello Guest</h1>
				<form method="get" action="/login" onSubmit={ this._onSubmitLogin }>
					<input type="text" ref="username" defaultValue="joe" />
					<input type="text" ref="password" defaultValue="1234" />
					<button type="submit">Login</button>
				</form>
			</div>
		);
	},

	_onSubmitLogin: function (e) {
		e.preventDefault();

		userAction.authenticateUser({
			body: {
				userName: ReactDOM.findDOMNode(this.refs.username).value,
				password: ReactDOM.findDOMNode(this.refs.password).value
			}
		});
	},

	_onSubmitLogout: function (e) {
		e.preventDefault();

		userAction.invalidateUser();
	}
}), storeManifest);
