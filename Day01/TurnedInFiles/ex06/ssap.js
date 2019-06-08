arr = []; // empty array to start.
process.argv.forEach(function (param, index) {
	if (index > 1)
		arr = arr.concat(process.argv[index].trim().replace(/\s+/g,' ').split(/\s+/)); // 
});

arr = arr.sort();
arr.forEach(ele => console.log(ele));


