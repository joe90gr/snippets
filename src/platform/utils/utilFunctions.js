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
	console.warn('resolveSubPages: deprecated, please use resolveDeepPages');

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

export function extractParamsPreserved(pathSigniture) {
	return pathSigniture.split('/')
		.filter(key => key.charAt(0) === ':'); // [':snippetA', ':snippetB']
}

export function extractParamKeys(pathSigniture) {
	return pathSigniture.split('/')
		.filter(key => key.charAt(0) === ':')
		.map(key => key.substring(1)); // ['snippetA', 'snippetB']
}

export function splitPathSignitureToArray(pathSigniture) {
	let result = pathSigniture.replace(/\//g, '').split(':'); // ["snippets", "snippetA", "snippetB"]

	result[0] = pathSigniture;

	return result;
}

export function buildRequestedPathParams(pathSigniture, keyValueParams) {
	let result = {};

	result[pathSigniture] = pathSigniture;

	Object.keys(keyValueParams).forEach((key) => {
		result[key] = keyValueParams[key];
	});

	return result;
}

export function resolveDeepPages(routes, pathSigniture, keyValueParams) {
	var _page;
	var params = splitPathSignitureToArray(pathSigniture);
	var _params = buildRequestedPathParams(pathSigniture, keyValueParams);

	function resolve(routes, params) {
		Object.keys(routes).some((path) => {
			const { page, pages } = routes[path];
			const firstParamValue = _params[params[0]];
			const pathEqualCurrentParam = path === firstParamValue;
			const isLastParam = params.length <= 1;
			const nextParams = params.slice(1);

			if (page && pathEqualCurrentParam && isLastParam) {
				_page = routes[firstParamValue];
				return;
			}

			if (pages && pathEqualCurrentParam) {
				_page = resolve(pages, nextParams);
				return;
			}
		});

		return _page;
	}

	return resolve(routes, params);
}
