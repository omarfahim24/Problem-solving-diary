/* 
Exercise 9: Number Guessing Game (break & continue)
💡 Problem:
Write a simple number guessing game where:

The program randomly selects a number from 1 to 10.
The user has 5 chances to guess it.
If the guess is correct, print "You guessed it!" and break the loop.
If the guess is incorrect, print "Try again!".
If the number is even, use continue to skip one guess attempt.
Example Interaction
Guess a number: 3 Try again!

Guess a number: 6 (Skipped due to continue)

Guess a number: 8 You guessed it!
✅ Solve using for, while, and do-while.

✍️ Hint: Use Math.random() to generate a random number.
*/
const readlineSync = require('readline-sync');

function getUserInput(question) {
    let input = readlineSync.question(question);
    return input;
}
console.log("🎯 Welcome to the Number guessing game!");

let rightGuess = false;
let num = Math.floor(10 * Math.random()) + 1;
let skipped = false;
for(let i = 0; i < 5; i++) {
    if(num % 2 === 0 && skipped === false) {
        console.log("⏭️ ⚠️ The number is an even, skipped a chance!");
        skipped = true;
        continue;
    }
    let guessNum = parseInt(getUserInput("Guess a number: "));
    console.log(guessNum);
    
    if(guessNum === num) {
        console.log("✅🥳 You guessed it right!");
        rightGuess = true;
        break;
    }
    else{
        console.log("❌😓 Wrong guess!! Try Again");
    }
}
if(!rightGuess) console.log("Alas! you could not guessed it, Number was " + num);
console.log("📢🛑 The game is Over!");

