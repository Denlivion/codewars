//👀DESCRIPTION:
// Given: a sequence of different type of values (number, string, boolean).
// You should return an object with a separate properties for each of types presented in input.
// Each property should contain an array of corresponding values.
//
//  _keep order of values like in input array
//  _if type is not presented in input, no corresponding property are expected


//🛷EXAMPLES:
//['a', 1, 2, false, 'b']
// -->
//          {
//              number: [1, 2],
//              string: ['a', 'b'],
//              boolean: [false]
//          }

//👨‍💻SOLUTION:
const someArray = ['a', 1, 2, 'b'];

function separateTypes(input) {
    const resultObject =  {};
    for (const item of input) {
        if(typeof item === 'number'){
            (resultObject.number)?resultObject.number.push(item):resultObject.number = [(item)]
        } else if (typeof item === 'boolean'){
            (resultObject.boolean)?resultObject.boolean.push(item):resultObject.boolean = [(item)]
        } else {
            (resultObject.string)?resultObject.string.push(item):resultObject.string = [(item)]
        }
    }
    return resultObject
}
separateTypes(someArray)