//👀DESCRIPTION:
// We need a function that can transform a string into a number.
// What ways of achieving this do you know?


//🛷EXAMPLES:
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//📑NOTES:
// Don't worry, all inputs will be strings,
// and every string is a perfectly valid
// representation of an integral number.

//👨‍💻SOLUTION:

let example = "1234";

const stringToNumber = function(str){
    return Number(str)
}
stringToNumber(example);