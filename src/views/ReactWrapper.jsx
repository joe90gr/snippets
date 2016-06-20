import React from 'react';
import ReactDOM from 'react-dom';

import userAction from 'actions/userAction';

import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import router from 'services/routingService';
import snippets from 'common/snippets';

import { use } from 'mixins/use';

export default React.createClass({
	displayName: 'reactWrapper',

	mixins: [ use('contentStore'), use('userSessionStore') ],

	componentDidMount: function () {
		router.init();
	},

	getInitialState: function () {
		let state = this.extractPageContent();
		state.user = this.userSessionStore.getUserInfo();

		return state;
	},

	extractPageContent: function () {
		var { title, content } = this.contentStore.getPageContent();
		var page = { title: title, content: [] };

		content.forEach((content, index) => {
			page.content[index] = snippets[content];
		});

		return page;
	},

	render: function () {
		return (
			<div className="react-wrapper">
				<LoggedOut>
					<div>
						<h1>Hello Guest</h1>
						<form method="get" action="/login" onSubmit={ this._onSubmitLogin }>
							<input type="text" ref="username" defaultValue="joe" />
							<input type="text" ref="password" defaultValue="1234" />
							<button type="submit">Login</button>
						</form>
					</div>
				</LoggedOut>
				<LoggedIn>
					<div>
						<h1>Hello {this.state.user.name}</h1>
						<form method="get" action="/logout" onSubmit={ this._onSubmitLogout }>
							<button type="submit">Logout</button>
						</form>
					</div>
				</LoggedIn>
				<p>{ this.userSessionStore.getErrors() }</p>
				<Navigation />
				<div className="content">
					<PrimaryContent title={ this.state.title } model= { this.state.content } />
				</div>
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
	},

	_onContentStoreChange: function () {
		this.setState(this.extractPageContent());
	},

	_onUserSessionStoreChange: function () {
		this.setState({ user: this.userSessionStore.getUserInfo() });
	}
});
