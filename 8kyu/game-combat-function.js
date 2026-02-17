//👀DESCRIPTION
// Create a combat function that takes the player's current health and the amount of damage received,
// and returns the player's new health. Health can't be less than 0.


//👨‍💻SOLUTION
let receiveDamage
let leftHealth
function combat(health, damage) {
    // Write your code here
    receiveDamage = (health - damage);
    leftHealth = (receiveDamage>=0)?receiveDamage:0;
    return(leftHealth)
}
combat(100, 0)