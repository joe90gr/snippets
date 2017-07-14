import React from 'react';
import { string, object, bool } from 'prop-types';

import userAction from 'platform/actions/UserAction';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}

	_onSubmitLogin(e) {
		e.preventDefault();

		userAction.authenticateUser({
			body: {
				userName: this._username.value,
				password: this._password.value
			}
		});
	}

	_onSubmitLogout(e) {
		e.preventDefault();

		userAction.invalidateUser();
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.user !== this.props.user;
	}

	login() {
		return (
			<div>
				<h1>Hello Guest</h1>
				<form method="get" action="/login" onSubmit={ (e) => this._onSubmitLogin(e) }>
					<input type="text" ref={(value) => {
						this._username = value;
					}} defaultValue="joe90" />
					<input type="text" ref={(value) => {
						this._password = value;
					}} defaultValue="1q2w3e4r" />
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}

	logout() {
		const { user: { name } } = this.props;

		return (
			<div>
				<h1>Hello { name }</h1>
				<form method="get" action="/logout" onSubmit={ (e) => this._onSubmitLogout(e) }>
					<button type="submit">Logout</button>
				</form>
			</div>
		);
	}

	render() {
		const { isAuthenticated, errors } = this.props;

		return (
			<div>
				{ !isAuthenticated && this.login() }
				{ isAuthenticated && this.logout() }
				<p>{ errors }</p>
			</div>
		);
	}
}

LoginForm.displayName ='LoginForm';
LoginForm.propTypes = {
	user: object,
	errors: string,
	isAuthenticated: bool
};

export default LoginForm;
