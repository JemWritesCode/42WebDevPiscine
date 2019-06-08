function do_op_two (arg) {
    
    switch (op) {
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '/':
            console.log(x / y);
            break;
        case '%':
            console.log(x % y);
            break;
        case '*':
            console.log(x * y);
            break;
    }
}

if (process.argv.length == 3) { //0 is node, 1 is do_op.js. So the param is 2. But length starts at 1, so needs to be 3 total (0, 1, 2). 
    console.log(process.argv[2].trim()); //testing only
    do_op_two(process.argv[2].trim());
}
else{
    console.log("Incorrect Parameters");
}