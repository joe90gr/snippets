import { dbQuery } from 'src/services/mysqlConnectionService';

export function isAuthenticated(submittedCredentials) {
	const ERROR_INVALID_CREDENTIALS = { error: 'Invalid Credentials' };

	let userName = submittedCredentials.userName;
	let password = submittedCredentials.password;
	let loginSqlQuery = `SELECT * FROM users WHERE userName="${userName}" AND password="${password}"`;

	return new Promise(function (resolve, reject) {
		function authenticationSuccess(dbResponse) {
			if (dbResponse.rows.length === 1) {
				let isAuthenticated = userName === dbResponse.rows[0].userName && password === dbResponse.rows[0].password;

				if (isAuthenticated) {
					resolve({
						userID: dbResponse.rows[0].userID,
						userName: dbResponse.rows[0].userName
					});
				} else {
					reject(ERROR_INVALID_CREDENTIALS);
				}
			} else {
				reject(ERROR_INVALID_CREDENTIALS);
			}
		}

		function authenticationError(err) {
			reject({ error: err.code });
		}

		dbQuery(loginSqlQuery).then(authenticationSuccess, authenticationError);
	});
}
