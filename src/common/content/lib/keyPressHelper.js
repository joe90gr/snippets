const arr = [];

function registerKeyPress(key) {
	if (arr.indexOf(key) === -1) {
		arr.push(key);
	}
}

export function hasPressedKey(keyCode, key) {
	registerKeyPress(keyCode);

	return arr[arr.indexOf(key)] === key;
}

export function unregisterKeyPress(key) {
	const keyCodeIndex = arr.indexOf(key);

	if (keyCodeIndex !== -1) {
		arr.splice(keyCodeIndex, 1);
	}
}

export function registerHandlers(keyHandlerUp, keyHandlerDown) {
	document.addEventListener('keyup', keyHandlerUp, false);
	document.addEventListener('keydown', keyHandlerDown, false);
}

export function unregisterHandlers(keyHandlerUp, keyHandlerDown) {
	document.removeEventListener('keyup', keyHandlerUp, false);
	document.removeEventListener('keydown', keyHandlerDown, false);
}
