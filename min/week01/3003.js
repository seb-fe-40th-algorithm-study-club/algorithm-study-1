//runjs

//성공1
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const origin = [1, 1, 2, 2, 2, 8];
const result = origin.map((el, idx) => el - input[idx]);
console.log(result.join(' '));

//성공2
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(' ').map(Number);

// const input = '0 1 2 2 2 7' //예제입력
// const [a,b,c,d,e,f] = input.split(' ').map(Number);
const [a,b,c,d,e,f] = input;

console.log(1-a, 1-b, 2-c, 2-d, 2-e, 8-f)