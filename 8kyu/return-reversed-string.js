//👀DESCRIPTION:
//Complete the solution so that it reverses the string passed into it.

//🛷EXAMPLES:
//'world'  =>  'dlrow'
//'word'   =>  'drow'

//👨‍💻SOLUTION:

const someString = 'word';

function solution(str){

    str = str.split('')
    let reversedString
    let temporaryArray = [];

    for (let i = str.length-1; i >= 0 ; i--){
        temporaryArray.push(str[i])
    }
    reversedString = temporaryArray.join('')
    return reversedString
}

solution(someString)
