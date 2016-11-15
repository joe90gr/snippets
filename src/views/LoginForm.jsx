import React from 'react';
import ReactDOM from 'react-dom';

import userAction from 'actions/userAction';

import AccessControl from './components/AccessControl';

export default React.createClass({
	displayName: 'LoginForm',

	propTypes: {
		user: React.PropTypes.object,
		errors: React.PropTypes.string
	},

	render: function () {
		let { name } = this.props.user;
		let errors = this.props.errors;

		return (
			<div>
				<AccessControl loggedIn={ false }>
					{ this._loggedOutForm() }
				</AccessControl>
				<AccessControl loggedIn>
					{ this._loggedInForm(name) }
				</AccessControl>
				<p>{ errors }</p>
			</div>
		);
	},

	_loggedInForm: function (name) {
		return (
			<div>
				<h1>Hello { name }</h1>
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
});
