//나머지
//입력 예시: 5 8 4

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const [a, b, c] = input

console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)