const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 입력 값 가져오기 + 데이터 정제

let scores;

for (let i = 1; i <= input[0]; i++) {
  scores = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      scores.length === 0
        ? scores.push(1)
        : scores.push(scores[scores.length - 1] + 1);
    } else {
      scores.push(0);
    }
  }
  console.log(scores.reduce((acc, cur) => acc + cur));
}
