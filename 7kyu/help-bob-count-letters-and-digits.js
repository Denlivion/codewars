//👀DESCRIPTION:
//Bob is a lazy man.
// He needs you to create a method that can determine how many letters
// (both uppercase and lowercase ASCII letters) and digits are in a given string.
//🛷EXAMPLES:
//"hel2!lo" --> 6
//
// "wicked .. !" --> 6
//
// "!?..A" --> 1

//👨‍💻SOLUTION:

let someString = "!?..A";

function countLettersAndDigits(input) {
    let result
    let letters
    let numbersCount = 0;
    let convert = [...input];
    convert.filter(item => {
            if (typeof item === 'string') {
                let par = parseFloat(item);
                if(!isNaN(par)) {
                    numbersCount++
                }
                letters = convert.filter((char) => {
                    return /[a-z]/i.test(char);
                })
            }
            result = numbersCount + letters.length
        })
    return result;
}
console.log(countLettersAndDigits(someString))
countLettersAndDigits(someString)