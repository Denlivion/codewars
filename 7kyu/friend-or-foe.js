//👀DESCRIPTION:
// Make a program that filters a list of strings
// and returns a list with only your friends name in it.
//
// If a name has exactly 4 letters in it,
// you can be sure that it has to be
// a friend of yours! Otherwise, you can be sure he's not...

//🛷EXAMPLES:
// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
//
// Input = ["Peter", "Stephen", "Joe"]
// Output = []

//📑NOTES:
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

//👨‍💻SOLUTION:
const input = ['Pete', 'Joe', 'Marta','Dolly','Gill']
function friend(friends){
    let makeArrayFromName = friends.map((element) => {
        let addRightName;
        let newArray = [];
        newArray.push(element);
        let expandLettersToArray = newArray.flatMap(str => [...str]);
        if((expandLettersToArray.length) === 4) {
            addRightName = expandLettersToArray.join('');
         }
        return addRightName
    });
    return (makeArrayFromName.filter(element => element !== undefined));
}
friend(input)