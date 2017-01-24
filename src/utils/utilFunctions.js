export function getUrlSuffix(data) {
	var arr= data.split('/');

	return `/${arr[arr.length - 1]}`;
}

export function deCapitalise(string) {
	return `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
}

export function hyphenate(string) {
	return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

export function resolveSubPages(routes, params) {
	const { id, page, pages } = routes;
	let _id = id;

	if (pages) {
		const param = Object.keys(params)[0];
		const page = pages[params[param]].page;
		const id = pages[params[param]].id ? pages[params[param]].id : _id;

		return { page, id };
	}

	return { page, id };
}

export function transformPathToKey(path, params) {
	let _path = path;

	Object.keys(params)
		.forEach(key => {
			_path = _path.replace(new RegExp(params[key] + '\\b', 'g'), ':' + key);
		});

	return _path;
}

export function transformKeyToPath(path, params) {
	let _path = path;

	path.split('/')
		.filter(key => key.charAt(0) === ':')
		.forEach((key, index) => {
			_path = _path.replace(new RegExp(key+'\\b', 'g'), params[index]);
		});

	return _path;
}

export function transformPathValueWithKeys(path, params) {
	let pathsparams = {};

	path.split('/')
		.filter(key => key.charAt(0) === ':')
		.forEach((key, index) => {
			pathsparams[key.substring(1, key.length)] = params[index];
		});

	return pathsparams;
}
