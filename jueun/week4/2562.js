const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number); // 입력 값 가져오기 + 데이터 정제

let max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max) + 1);
