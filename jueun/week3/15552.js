const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 입력 값 가져오기 + 데이터 정제

const count = +input[0];
const ab = input.slice(1);
let answer = "";
for (let i = 0; i < count; i++) {
  ab[i] = ab[i].split(" ").map(Number);
  answer += String(ab[i][0] + ab[i][1]) + "\n";
}
console.log(answer.slice(0, answer.length - 1));
