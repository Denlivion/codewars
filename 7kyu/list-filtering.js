//👀DESCRIPTION:

//In this kata you will create a function that takes a list of non-negative

//integers and strings and returns a new list with the strings filtered out.

//🛷EXAMPLES:

//filter_list([1, 2, 'a', 'b']) == [1, 2]

//filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 5]

//filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

//👨‍💻SOLUTION:

const list = [1, 2, 'aasf', '1', '123', 123];

function filter_list(l) {
    const newArray = []
    for (let i = 0; i < l.length; i++) {
        if (typeof (l[i]) === 'number'){
            newArray.push(l[i])
        }
    }
    return newArray;
}k

filter_list(list);