
const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
//예제.txt

// console.log(input[0])
// 피보나치
// 피보나치 0 = 0 , 1 = 1 , 2번째부터는 앞 두 피보나치 수의 합
function fibo(num) {
// base
// num이 0이랑 1일때만 자기자신
if(num <= 1) return num;

// recursive
// num<=1 ? num :  fibo(num-1) + fibo(num-2)
return  fibo(num-1) + fibo(num-2)
}

console.log(fibo(input[0]))