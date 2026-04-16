//👀DESCRIPTION:
//Your task is to make a function that can take any non-negative integer as an
//argument and return it with its digits in descending order. Essentially,
//rearrange the digits to create the highest possible number.

//🛷EXAMPLES:
//input: 42145 Output: 54421;
//input: 145263 Output: 654321;
//input: 123456789 Output: 987654321;

//👨‍💻SOLUTION:

let ourNumber = 111;
function descendingOrder(n){
    let result;
    const temporaryArray = [];
    const temporaryArray2 = ([...String(n)]);
    for (let i = 0; i < temporaryArray2.length; i++) {
        let reduce = parseInt(temporaryArray2[i]);
        temporaryArray.push(reduce)
    }
    temporaryArray.sort((prev, next) => {
        return next - prev
    })
    temporaryArray.join('');
    result = Number(temporaryArray.join(''))
    return result
}
console.log(descendingOrder(ourNumber))

// const countLetters =[];
//    if((newArray.length) === 4) {
//          let countLetters = ((newArray) => {
//              addRightName = [...makeArrayFromName];
//              console.log(addRightName)
//              return (addRightName)
//          })
//    }
// console.log(addRightName)