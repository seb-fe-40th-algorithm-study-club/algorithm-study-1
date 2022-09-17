const fs = require("fs"); // fs 모듈 선언
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number); // 입력 값 가져오기 + 데이터 정제

let remainders = [],
  remainder;

for (let i = 0; i < input.length; i++) {
  remainder = input[i] % 42;
  if (!remainders.includes(remainder)) remainders.push(remainder);
}

console.log(remainders.length);
