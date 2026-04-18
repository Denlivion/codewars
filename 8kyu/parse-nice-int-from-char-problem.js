//👀DESCRIPTION:
// You ask a small girl "How old are you?"
// She always says "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.


//🛷EXAMPLES:
// input: "1 year old" or "5 years old"
// -->
// output: 1 or 5

//📑NOTES:
// The test input string is always a valid string.

//👨‍💻SOLUTION:

const answer = "5 years old";

function getAge(inputString){
    const stringItemsArray = [...inputString];
    numberArray = stringItemsArray.filter(item => {
        return  parseFloat(item)
        })
    return numberArray.join();
}
getAge(answer)