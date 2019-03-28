// for each argv, if the index is greater than 1 (which is the application name), then log it to the console.
process.argv.forEach(function (param, index) {
	if (index > 1)
		console.log(param);
});