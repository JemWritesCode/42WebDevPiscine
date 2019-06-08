function do_op_two () {
    if (process.argv.length == 3) { //0 is node, 1 is do_op.js. So the param is 2. But length starts at 1, so needs to be 3 total (0, 1, 2).
        try {
            console.log(eval(process.argv[2].trim())); 
        } catch (e) {
                console.log("Syntax Error");
        }
    }
    else{
        console.log("Incorrect Parameters");
    }
}

do_op_two();