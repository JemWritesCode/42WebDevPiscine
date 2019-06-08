function do_op (x, op, y) {
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

if (process.argv.length == 5) { //0 is node, 1 is do_op.js. So params start at 2.
    do_op(parseInt(process.argv[2].trim()), process.argv[3].trim(), parseInt(process.argv[4].trim()));
}
else{
    console.log("Incorrect Parameters");
}