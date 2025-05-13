function reverseNum (num) {
    let len = num.toString().length;
    let newNum = "";
    for(let i = 0; i < len; i++) {
        newNum += (num % 10).toString();
        num = Math.floor(num / 10);
    }
    return newNum;
}
let num = 12345;
let result = parseInt(reverseNum(num));
console.log(result);
