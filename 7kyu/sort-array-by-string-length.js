//👀DESCRIPTION:
// Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings,
// ordered from shortest to longest.

//🛷EXAMPLES:
//  if this array were passed as an argument:
//
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Your function would return the following array:
//
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

//📑NOTES:
// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

//👨‍💻SOLUTION:
const words = ["Telescopes", "Glasses", "Eyes", "Monocles"];

function sortByLength (array) {
    return (array.sort((prev, next) => prev.length - next.length))
    }
sortByLength(words)