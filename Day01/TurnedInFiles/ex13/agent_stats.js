var evaluations = [];

function readAndCreateObjectArray(){
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
    
    var linecounter = 0;
    rl.on('line', function (line) {
        linecounter++;
        if (linecounter > 1){
          temp = line.split(";");
          var currentScore = new scoreObject(temp[0], temp[1], temp[2], temp[3]);
          evaluations.push(currentScore);
        }
    });
    
    /*Print the evaluations array of ScoreObjects.*/
    rl.on('close', function () {
        console.dir(evaluations, {'maxArrayLength': null} );
    });
}

function averageGrades(){
  var usersScores = [];
  for(var i=0; i<evaluations.length; i++) {
    for(user in evaluations[i]) {
      if(evaluations[i][key].indexOf(toSearch)!=-1) {
        usersScores.push(evaluations[i]);
      }
    }
  }
  console.log("here we go");
}

if (process.argv.length > 2){ // 1 is node, 2 is agent_stats.js. (argv.length is 1-indexed)
  readAndCreateObjectArray();
  if (process.argv[2] == "average" || process.argv[2] == "moyenne"){
    averageGrades();
  } else if(process.argv[2] == "average_user" || process.argv[2] == "moyenne_user"){

  } else if(process.argv[2] == "moulinette_variance" || process.argv[2] == "ecart_moulinette"){

  }
}