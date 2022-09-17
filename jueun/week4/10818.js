const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 입력 값 가져오기 + 데이터 정제

let nums = input[1].split(" ").map(Number);
console.log(Math.min(...nums), Math.max(...nums));
