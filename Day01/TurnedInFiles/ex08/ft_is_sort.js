function ft_is_sort(myArray){
    for (var i = 1; i < myArray.length; i++) {
        if (myArray[i] < myArray[i - 1])
            return (false);
    }
    return (true);
}

/* // Testing Main
 

// Should say sorted.
var arr = ["!/@#;^", "42", "Hello World", "hi", "zZzZzZz"];
if (ft_is_sort(arr))
    console.log("The array is sorted"); 
else
    console.log("The array is not sorted");

// Should say not sorted.
var arr = ["Hello World", "42", "!/@#;^", "hi", "zZzZzZz"];
if (ft_is_sort(arr))
    console.log("The array is sorted"); 
else
    console.log("The array is not sorted");
 
*/