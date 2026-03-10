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
        if (key === prop) {
            throw new Error('This property already exists')
        }
    }
    for (const key in obj){
        if (obj[key] !== value)
        {
            obj[key] = value
        }
    }
    obj[prop] = value
    return obj
}

addProperty(car, "brand", "AUDI")
console.log(car)
