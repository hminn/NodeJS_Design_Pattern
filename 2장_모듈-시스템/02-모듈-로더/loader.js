function loadModule(filename, module, require) {
	const wrappedSrc = `(function (module, exports, require) {
    ${fs.readFileSync(filename, "utf8")}
  })(module, module.exports, require)`;
	eval(wrappedSrc);
}

function require(moduleName) {
	console.log(`Require invoked for module: ${moduleName}`);
	const id = require.resolve(moduleName);
	if (require.cache[id]) {
		return require.cache[id].exports;
	}

	// module metadate
	const module = {
		exports: {},
		id,
	};

	// Update the cache
	require.cache[id] = module;

	// load the module
	loadModule(id, module, require);

	// return expected variables
	return module.exports;
}

require.cache = {};
require.resolve = (moduleName) => {
	// reuse the original resolving algorithm for simplicity
	return originalRequire.resolve(moduleName);
};

require(process.argv[2]);
