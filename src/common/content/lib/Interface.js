export function Interface(name, methods) {
	var args = Array.prototype.slice.call(arguments);
	var i;

	this.name = name;
	this.methods = [];

	if (args.length != 2) {
		throw new Error('Interface constructor called with ' + args.length + ' arguments, but expected exactly 2');
	}

	for (i = 0; i < methods.length; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error('Interface constructor expects method names to be passed in as a string');
		}
		this.methods.push(methods[i]);
	}
}

Interface.ensureImplements = function (object) {
	var args = Array.prototype.slice.call(arguments);
	var i, j, _interface, method;

	if (args.length < 2) {
		throw new Error('Function Interface.ensureImplements called with ' + args.length + 'arguments, but expected at least 2');
	}

	for (i = 1; i < args.length; i++) {
		_interface = args[i];
		if (_interface.constructor !== Interface) {
			throw new Error('Function Interface.ensureImplements expects arguments two and above to be instances of Interfaces');
		}

		for (j = 0; j < _interface.methods.length; j++) {
			method = _interface.methods[j];
			if (!object[method] || typeof object[method] !== 'function') {
				throw new Error('Function Interface.ensureImplements: object does not implement the ' + _interface.name + ' interface. method ' + method + ' was not found');
			}
		}
	}
};
