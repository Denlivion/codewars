//👀DESCRIPTION:
//Get the sum of two arrays... Actually the sum of all their elements.

//📑NOTES:
//Each array includes only integer numbers. Output is a number too.

//👨‍💻SOLUTION:

const someArray1 = [1, 2, 3];
const someArray2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
    const combined = arr1.concat(arr2);
    let sum = 0;
    for (let e = 0; e < combined.length; e++) {
        sum += combined[e];
    }
    return sum
}

arrayPlusArray(someArray1, someArray2)