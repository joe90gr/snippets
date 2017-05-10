import { dbQuery } from 'platform/services/mysqlConnectionService';

export function authenticateUser(credentials) {
	const ERROR_INVALID_CREDENTIALS = { error: 'Invalid Credentials' };

	return new Promise(function (resolve, reject) {
		dbQuery(constructLoginSQLQuery(credentials)).then(_onSuccess, _onFail);

		function _onSuccess(dbResponse) {
			if (dbResponse.rows.length === 1) {
				const { userID, userName, password } = dbResponse.rows[0];

				if (isAuthenticated(credentials, { userName, password })) {
					resolve({ userID, userName });
				} else {
					reject(ERROR_INVALID_CREDENTIALS);
				}
			} else {
				reject(ERROR_INVALID_CREDENTIALS);
			}
		}

		function _onFail(err) {
			reject({ error: err.code });
		}
	});

	function constructLoginSQLQuery(credentials) {
		const { userName, password } = credentials;

		return `SELECT * FROM users WHERE userName="${userName}" AND password="${password}"`;
	}

	function isAuthenticated(credentials, dbResponse) {
		const { userName, password } = dbResponse;

		return credentials.userName === userName && credentials.password === password;
	}
}
