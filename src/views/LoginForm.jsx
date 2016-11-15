import React from 'react';
import ReactDOM from 'react-dom';

import userAction from 'actions/userAction';

import AccessControl from './components/AccessControl';

class LoginForm extends React.Component {
	constructor() {
		super();
	}

	render() {
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
	}

	_loggedInForm(name) {
		return (
			<div>
				<h1>Hello { name }</h1>
				<form method="get" action="/logout" onSubmit={ (e) => this._onSubmitLogout(e) }>
					<button type="submit">Logout</button>
				</form>
			</div>
		);
	}

	_loggedOutForm() {
		return (
			<div>
				<h1>Hello Guest</h1>
				<form method="get" action="/login" onSubmit={ (e) => this._onSubmitLogin(e) }>
					<input type="text" ref="username" defaultValue="joe" />
					<input type="text" ref="password" defaultValue="1234" />
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}

	_onSubmitLogin(e) {
		e.preventDefault();

		userAction.authenticateUser({
			body: {
				userName: ReactDOM.findDOMNode(this.refs.username).value,
				password: ReactDOM.findDOMNode(this.refs.password).value
			}
		});
	}

	_onSubmitLogout(e) {
		e.preventDefault();

		userAction.invalidateUser();
	}
}

LoginForm.displayName ='LoginForm';

LoginForm.propTypes = {
	user: React.PropTypes.object,
	errors: React.PropTypes.string
};

export default LoginForm;
