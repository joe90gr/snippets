export function getUrlSuffix(data) {
	var arr= data.split('/');

	return `/${arr[arr.length - 1]}`;
}

export function deCapitalise(string) {
	return `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
}
