//👀DESCRIPTION:
//It's the academic year's end, fateful moment of your school report.
// The averages must be calculated. All the students come to you
// and entreat you to calculate their average for them.
// Easy ! You just need to write a script.

//Return the average of the given array rounded !!****DOWN****!! to its nearest integer.

//📑NOTES:
//The array will never be empty.

//👨‍💻SOLUTION:

const marksOfNick = [1,1,1,1,1,1,1,2];


function getAverage(marks){

    let sum = 0;
    let average;

    for (let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    average = Math.floor(sum / (marks.length))

    return average
}

getAverage(marksOfNick)