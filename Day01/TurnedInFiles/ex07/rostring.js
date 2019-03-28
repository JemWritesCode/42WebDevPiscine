//this works but I was a few minutes late on submission.

arr = [];
if (process.argv[2])
	arr = process.argv[2].trim().replace(/\s+/g,' ').split(/\s+/);

arr.push(arr.shift());
console.log(arr.join(' '));