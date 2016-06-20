import mysql from 'mysql';

function getDbConnection() {
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'malbork',
		database : 'snippets'
	});

	connection.connect(function (err) {
		if (!err) {
			console.log('Database is connected ... ');
		} else {
			console.log('Error connecting database ... ', err);
		}
	});

	return connection;
}

export function dbQuery(query) {
	var connection = getDbConnection();

	return new Promise(function (resolve, reject) {
		connection.query(query, function (err, rows, fields) {
			connection.end();
			if (!err) {
				resolve({
					err: err,
					rows: rows,
					fields: fields
				});
			} else {
				reject(err);
			}
		});

	});
}
