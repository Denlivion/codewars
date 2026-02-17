//👀DESCRIPTION
// Create a combat function that takes the player's current health and the amount of damage received,
// and returns the player's new health. Health can't be less than 0.
// In this game, the hero moves from left to right. The player rolls the die
// and moves the number of spaces indicated by the die two times.
//
//Create a function for the terminal game that takes the current position of the hero
// and the roll (1-6) and return the new position.

//🛷EXAMPLE:
// move(3, 6) should equal 15


//👨‍💻SOLUTION:
function move (position, roll) {
    return(position + (roll * 2));
}
move (2,4)