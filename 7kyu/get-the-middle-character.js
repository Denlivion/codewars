//👀DESCRIPTION:
// You are going to be given a non-empty string.
// Your job is to return the middle character(s) of the string.
//
//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.


//🛷EXAMPLES:
//"test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//👨‍💻SOLUTION:
function getMiddle(s) {
    const workflowArray = [];
    let result
    let item = [...s];
    if((item.length % 2) === 0){
        let midElement = item.length / 2;
        workflowArray.push(item[midElement-1]);
        workflowArray.push(item[midElement]);
        result = workflowArray.join('');
    } else {
        let midElement = Math.ceil(item.length / 2);
        workflowArray.push(item[midElement-1]);
        result = workflowArray.join('');
    }
    return result;
}

console.log(getMiddle(example))
