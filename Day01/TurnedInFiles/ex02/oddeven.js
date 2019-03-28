// Type node oddeven.js in the command line to execute

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

function AskQuestion(){
	readline.question('Enter a number: ', (response) =>{
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
		AskQuestion();
	});
}

AskQuestion();