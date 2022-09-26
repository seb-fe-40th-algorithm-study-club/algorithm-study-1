//숫자의 합
//11720번
//N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let numbers = input[1].split('').map(Number);
let sum = numbers.reduce((a,b)=> a+b);

console.log(sum);