//👀DESCRIPTION:
//A function is pure when:
//It always return the same value given the same arguments
// (it doesn't update or depend on out of the scope variables);
//Evaluation of the result does not cause side effect (mutations...) or output
//Task:
// You are given a function that is impure, and your job is to purify it.
// This function must return a new array
// where each value is itself plus 2 times the "modifier",
// which is provided as a property of the options object.

//🛷EXAMPLES:
//Array = 1, 2, 3
// Modifier = 5
//
// Should return = 11, 12, 13
// const state = {
//   modifier: 2,
// }

//👨‍💻SOLUTION:

const Array = [1, 2, 3];
const state = {
  modifier: 5,
};

function solution(arr, options) {
  let itemResult = arr.map(i => i += 2 * options.modifier
  );
 return itemResult;
}
solution(Array, state);