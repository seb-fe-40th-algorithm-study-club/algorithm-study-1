const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력 값 가져오기 + 데이터 정제

let cut = input[0].split(" ").map(Number)[1];
let scores = input[1].split(" ").map(Number);

console.log(scores.sort((a, b) => b - a)[cut - 1]);
