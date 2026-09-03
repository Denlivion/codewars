//👀DESCRIPTION:
// write a function that sums a list, but ignores any duplicated items in the list.

//🛷EXAMPLES:
// for the list [3, 4, 3, 6] the function should return 10
//
// for the list [1, 10, 3, 10, 10] the function should return 4


//👨‍💻SOLUTION:

const numArr = [5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]

function sumNoDuplicates(numList) {
    let firstArr = [];
    let secondArr = [];
    let finalArr = [];
    for(let i = 0; i < numList.length; i++) {
        let num2 = numList[i]
        let box
        if (firstArr.includes(num2)) {
            box = num2
            secondArr.push(box)
        } else if (num2 !== box) {
            firstArr.push(num2)
        }
    }
    for (let i = 0; i < firstArr.length; i++) {
        let uniqNum = firstArr[i];
        if (!(secondArr.includes(uniqNum))) {
            finalArr.push(uniqNum)
        }
    }
    console.log(finalArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    return finalArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
sumNoDuplicates(numArr)