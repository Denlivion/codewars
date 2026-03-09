// 👀DESCRIPTION: Write a function that adds a named property to an object.
// It must be possible to set the property to a new value.
// If the property already exists on the object, and error should be thrown.


//👨‍💻SOLUTION:

let car = {
    brand:"AUDI",
    engine:"Gasoline",
    millage:"200000",
}


function addProperty(obj, prop, value) {
    for (const key in obj) {
        if ((key === prop) && (obj[key] === value)) {
            throw new Error('This property already exists')
        }
         else if ((key === prop) && (obj[key] !== value))
         {
        obj[prop] = value
    }
    else
    {
            obj[prop] = value
        }
    }

    return obj
}




addProperty(car, "millage", "202000")
console.log(car)


// function includesElement(array, element) {
//     let isInArray = false
//     for (let i = 0; i < array.length; i++) {
//         let argument = array[i];
//         if (argument === element){
//             isInArray = true
//         }
//     }
//     return isInArray
// }
