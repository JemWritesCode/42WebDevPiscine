//The sum of words contained in all the arguments (except the name of the program itself) are splited, sorted and displayed.
//Sorting Rules: now it will need to be case insensitive and place all the characters in alphabetical order first, then numbers,
//and finally all the other characters, each in the following 3 groups following the ASCII order.

function isAlpha(str) {
	return ((str[0] >= 'a' && str[0] <= 'z') || (str[0] >= 'A' && str[0] <= 'Z'))
};

splitArr = [];

process.argv.forEach(function (param, index) {
	if (index > 1)
	splitArr = splitArr.concat(process.argv[index].trim().replace(/\s+/g,' ').split(/\s+/)); // 
});

alphaArr = [];
numArr = [];
symbolArr = [];

for (var i = 0; i < splitArr.length; i++) {
	if (isAlpha(splitArr[i])) 
		alphaArr.push(splitArr[i])
	else if (isNaN(splitArr[i]))
		symbolArr.push(splitArr[i])
	else
		numArr.push(splitArr[i])
}

alphaArr.sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
});

numArr.sort();

symbolArr.sort(function (a, b) {
	return b.toLowerCase().localeCompare(a.toLowerCase());
});

alphaArr.forEach(ele => console.log(ele));
numArr.forEach(ele => console.log(ele));
symbolArr.forEach(ele => console.log(ele));
