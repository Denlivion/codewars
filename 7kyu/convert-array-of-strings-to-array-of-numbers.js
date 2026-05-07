//👀DESCRIPTION:
// Create the function that takes as a parameter
// a sequence of numbers represented as strings and outputs a sequence of numbers.


//🛷EXAMPLES:
// input: ["1", "2", "3"]
// -->
// output: [1, 2, 3]

//📑NOTES:
// You can receive floats as well

//👨‍💻SOLUTION:

const someArray = ["1.4", "2.6", "0.3"];

function toNumberArray(stringarray){
    return  stringarray.map(item => Number(item))
    }
console.log(toNumberArray(someArray))