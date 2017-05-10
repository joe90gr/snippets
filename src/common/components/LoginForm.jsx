import React from 'react';

import userAction from 'platform/actions/UserAction';

import AccessControl from './AccessControl';

function LoginForm({ user: { name }, errors }) {
	let username, password;

	function _onSubmitLogin(e) {
		e.preventDefault();

		userAction.authenticateUser({
			body: {
				userName: username.value,
				password: password.value
			}
		});
	}

	function _onSubmitLogout(e) {
		e.preventDefault();

		userAction.invalidateUser();
	}

	return (
		<div>
			<AccessControl loggedIn={ false }>
				<div>
					<h1>Hello Guest</h1>
					<form method="get" action="/login" onSubmit={ (e) => _onSubmitLogin(e) }>
						<input type="text" ref={(value) => {
							username = value;
						}} defaultValue="joe" />
						<input type="text" ref={(value) => {
							password = value;
						}} defaultValue="1234" />
						<button type="submit">Login</button>
					</form>
				</div>
			</AccessControl>
			<AccessControl loggedIn>
				<div>
					<h1>Hello { name }</h1>
					<form method="get" action="/logout" onSubmit={ (e) => _onSubmitLogout(e) }>
						<button type="submit">Logout</button>
					</form>
				</div>
			</AccessControl>
			<p>{ errors }</p>
		</div>
	);
}

LoginForm.displayName ='LoginForm';
LoginForm.propTypes = {
	user: React.PropTypes.object,
	errors: React.PropTypes.string
};

export default LoginForm;
