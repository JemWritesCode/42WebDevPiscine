if (process.argv.length > 2){ // 0 is node, 1 is agent_stats.js. Make sure we're getting a command.
    var evaluations = [];
    var scoreObject = {};
    var temp;
    
    var readline = require('readline');

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    
    rl.on('line', function (line) {
        temp = line.split(";");
        scoreObject["user"] = temp[0];
        scoreObject["score"] = temp[1];
        scoreObject["grader"] = temp[2];
        scoreObject["feedback"] = temp[3];
        
        evaluations.push(scoreObject);
        
    });
    console.log(evaluations);
}

