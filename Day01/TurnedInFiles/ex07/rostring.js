arr = [];
if (process.argv[2])
	arr = process.argv[2].trim().replace(/\s+/g,' ').split(/\s+/);

console.log(arr.join(' '))