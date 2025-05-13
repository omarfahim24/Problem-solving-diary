function findSum(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
let number = 10;
let result = findSum(5);
console.log(result);