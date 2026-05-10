//👀DESCRIPTION:
// Background
//
// You're modelling the interaction between a large number of quarks
// and have decided to create a Quark class so you can generate your own quark objects.
//
// Quarks are fundamental particles and the only fundamental particle
// to experience all four fundamental forces.


// Your task
// Your Quark class should allow you to create quarks
// of any valid color ("red", "blue", and "green")
// and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').
// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.
// Every quark should have an .interact() (.Interact() in C#) method that allows
// any quark to interact with another quark via the strong force.
// When two quarks interact they exchange colors.

//🛷EXAMPLES:
// >>> q1 = Quark("red", "up")
// >>> q1.color
// "red"
// >>> q1.flavor
// "up"
// >>> q2 = Quark("blue", "strange")
// >>> q2.color
// "blue"
// >>> q2.baryon_number
// 0.3333333333333333
// >>> q1.interact(q2)
// >>> q1.color
// "blue"
// >>> q2.color
// "red"

//👨‍💻SOLUTION:



class Quark{
    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 0.3333333333333333;
    }
    interact(anotherQuark){
        let temporaryColor = this.color
        this.color = anotherQuark.color
        anotherQuark.color = temporaryColor
    }
}



class Q1 extends Quark{
    constructor(color, flavor, baryon_number) {
        super(baryon_number);
        this.color = color;
        this.flavor = flavor;
    }
    interact(anotherQuark){
        let temporaryColor = this.color
        this.color = anotherQuark.color
        anotherQuark.color = temporaryColor
    }
}

let q1 = new Quark("red", "up");

class Q2 extends Quark{
    constructor(color, flavor, baryon_number) {
        super(baryon_number);
        this.color = color;
        this.flavor = flavor;
    }
    interact(anotherQuark){
        let temporaryColor = this.color
        this.color = anotherQuark.color
        anotherQuark.color = temporaryColor
    }
}

let q2 = new Quark("blue", "strange")

class Q3 extends Quark{
    constructor(color, flavor, baryon_number) {
        super(baryon_number);
        this.color = color;
        this.flavor = flavor;
    }
    interact(anotherQuark){
        let temporaryColor = this.color
        this.color = anotherQuark.color
        anotherQuark.color = temporaryColor
    }
}

let q3 = new Quark('green', 'top');

console.log(q1.color, q1.flavor);
q1.interact(q2);
console.log(q1.color, q1.flavor);
console.log(q2.color);
