export function devError(err, req, res, next) {
	res.status(err.status || 500);
	res.render('Error', {
		message: err.message,
		error: err
	});
}

export function error(err, req, res, next) {
	res.status(err.status || 500);
	res.render('Error', {
		message: err.message,
		error: {}
	});
}

