//👀DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.
//
//🛷EXAMPLES:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345


//👨‍💻SOLUTION:

const givenArray = [34, -345, -1, 100];

function findSmallestInt(arr) {

    let smallest = arr[(0)]

    for (let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }

    return smallest;
}
findSmallestInt(givenArray)