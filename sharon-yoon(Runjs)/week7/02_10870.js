
const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
//예제.txt

// console.log(input[0])
// 팩토리얼 
// 0! = 1 1! = 1 2! = 1!*2 3! = 2!*3
function fibo(num) {
// base
// num이 0이랑 1일때만 자기자신
if(num <= 1) return num;

// recursive
return fibo(num-1) + fibo(num-2)
}

console.log(fibo(input[0]))