import React from 'react';
import { string, object } from 'prop-types';

import userAction from 'platform/actions/UserAction';

import AccessControl from './AccessControl';

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

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.user !== this.props.user;
	}

	render() {
		const { user: { name }, errors } = this.props;

		return (
			<div>
				<AccessControl loggedIn={ false }>
					<div>
						<h1>Hello Guest</h1>
						<form method="get" action="/login" onSubmit={ (e) => this._onSubmitLogin(e) }>
							<input type="text" ref={(value) => {
								this._username = value;
							}} defaultValue="joe" />
							<input type="text" ref={(value) => {
								this._password = value;
							}} defaultValue="1234" />
							<button type="submit">Login</button>
						</form>
					</div>
				</AccessControl>
				<AccessControl loggedIn>
					<div>
						<h1>Hello { name }</h1>
						<form method="get" action="/logout" onSubmit={ (e) => this._onSubmitLogout(e) }>
							<button type="submit">Logout</button>
						</form>
					</div>
				</AccessControl>
				<p>{ errors }</p>
			</div>
		);
	}
}

LoginForm.displayName ='LoginForm';
LoginForm.propTypes = {
	user: object,
	errors: string
};

export default LoginForm;
