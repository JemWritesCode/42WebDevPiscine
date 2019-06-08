if (process.argv.length > 2){
    var jsonObject = {};
    var temp;

    process.argv.forEach((param, index) => {
        if (index > 2){
            temp = param.split(":");
            jsonObject[temp[0]] = temp[1];
        }
    });
    if (jsonObject[process.argv[2]]) // if the key exists
        console.log(jsonObject[process.argv[2]]); // print it's value.
}
