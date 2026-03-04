//👀DESCRIPTION:
//Give you a function animal, accept 1 parameter:obj like this: *****{name:"dog",legs:4,color:"white"}*****
//and return a string like this: ****"This white dog has 4 legs."*****
//🛷EXAMPLES:
//{name:"dog",legs:4,color:"white"}  =>  "This white dog has 4 legs."


//👨‍💻SOLUTION:

const human = {
    name: "woman",
    legs: 2,
    color: "white",
}

const pet = {
    name: "dog",
    legs: 4,
    color:"white",
}

function animal(obj){

    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

animal(pet)
console.log(animal(pet))