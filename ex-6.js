/* Exercise 6: Find First Multiple of 7 using break
💡 Problem:
Write a program to find and print the first number divisible by 7 from a given range (e.g., 10 to 50).
Use break to exit when the first multiple is found.

Example Output
First multiple of 7: 14
✅ Solve using for, while, and do-while.
*/
function findFirstMultiple (start, end) {
    let firstMultiple = 0;
    for(let i = start; i <= end; i++) {
        if(i % 7 === 0) {
            firstMultiple = i;
            break;
        }
    }
    return firstMultiple;
}
let start = 14;
let end = 50;
let result = findFirstMultiple(start, end);
console.log(result);