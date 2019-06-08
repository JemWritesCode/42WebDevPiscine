//The sum of words contained in all the arguments (except the name of the program itself) are splited, sorted and displayed.

arr = []; // empty array to start.
process.argv.forEach(function (param, index) {
	if (index > 1)
		arr = arr.concat(process.argv[index].trim().replace(/\s+/g,' ').split(/\s+/)); // 
});

arr = arr.sort();
arr.forEach(ele => console.log(ele));


