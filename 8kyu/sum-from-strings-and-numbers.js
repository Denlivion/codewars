//👀DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//Return your answer as a number.

//👨‍💻SOLUTION:
const givenArray = ['7', '3', 9, 3,];

function sumMix(x){
    let answerAsSum = 0;
    x = (x.map(item => Number(item)))
    for (let i = 0; i < x.length; i++){
        answerAsSum = answerAsSum + x[i];
    }
    return answerAsSum
}

sumMix(givenArray)