if (process.argv.length > 2){ // 0 is node, 1 is agent_stats.js. Make sure we're getting a command.
    var evaluations = [];
    function scoreObject(user, score, grader, feedback) {
        this.user = user;
        this.score = score;
        this.grader = grader;
        this.feedback = feedback;
      }
      
    var temp;
    var readline = require('readline');

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    
    rl.on('line', function (line) {
        temp = line.split(";");
        var currentScore = new scoreObject(temp[0], temp[1], temp[2], temp[3]);
        evaluations.push(currentScore);
    });

    rl.on('close', function () {
        console.dir(evaluations, {'maxArrayLength': null} );
    });
}

