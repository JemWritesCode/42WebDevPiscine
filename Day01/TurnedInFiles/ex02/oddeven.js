// Type node oddeven.js in the command line to execute
// We aren't allowed to use readline for this exercise.

var stdin = process.openStdin();
var response = '';

process.stdout.write('Enter a number: ');
stdin.addListener("data", function (d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    response = d.toString().trim();
    if(!response || isNaN(response)){
			console.log(`\'${response}\' is not a number`);
	}else{
		if(response % 2 == 0){
		console.log(`The number ${response} is even`);
		}
		else{
			console.log(`The number ${response} is odd`);
		}
	}
	process.stdout.write('Enter a number: ');
});