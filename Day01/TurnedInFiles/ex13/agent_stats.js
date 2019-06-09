if (process.argv.length > 2){ // 1 is node, 2 is agent_stats.js. (argv.length is 1-indexed)
    var readline = require('readline');

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    
    var linecounter = 0;
    var numberOfGrades = 0;
    var averageTotal = 0;
    rl.on('line', function (line) {
        linecounter++; 
        if (linecounter > 1){ // skip the column headers.
          if (process.argv[2] == "average" || process.argv[2] == "moyenne"){
            var temp;
            temp = line.split(";"); // temp[0] = user, temp[1] = note/grade, temp[2] = Grader, temp[3] = Feedback
            if (temp[2] != "moulinette" && temp[1] !== ''){
              averageTotal += parseInt(temp[1]);
              numberOfGrades++;
            }
          } else if(process.argv[2] == "average_user" || process.argv[2] == "moyenne_user"){
        
          } else if(process.argv[2] == "moulinette_variance" || process.argv[2] == "ecart_moulinette"){
        
          }
        }
    });

    rl.on('close', function(){
      if (process.argv[2] == "average" || process.argv[2] == "moyenne"){
        console.log((averageTotal / numberOfGrades).toFixed(13));
      }
    })
}