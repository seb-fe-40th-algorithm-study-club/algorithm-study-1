const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력 값 가져오기 + 데이터 정제

let scores = input[1].split(" ").map(Number);
let max = Math.max(...scores);
let mean =
  scores.reduce((acc, cur) => (acc += (cur / max) * 100), 0) / scores.length;

console.log(mean);
