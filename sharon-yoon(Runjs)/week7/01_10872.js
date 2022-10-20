const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
//예제.txt

// console.log(input[0])
// 팩토리얼 
// 0! = 1 1! = 1 2! = 1!*2 3! = 2!*3
function factorial(num) {
// base

if(num <= 1) return 1;

// recursive
// num === 0 ? 1 : num * factorial(num-1)
return num * factorial(num-1)
}

console.log(factorial(input[0]))