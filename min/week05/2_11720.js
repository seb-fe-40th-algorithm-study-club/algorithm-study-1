//숫자의 합
//11720번

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let numbers = input[1].split('').map(Number);
let sum = numbers.reduce((a,b)=> a+b);

console.log(sum);