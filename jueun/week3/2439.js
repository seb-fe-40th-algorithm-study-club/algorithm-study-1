const fs = require("fs"); // fs 모듈 선언
const num = Number(fs.readFileSync("/dev/stdin").toString()); // 입력 값 가져오기 + 데이터 정제
let answer = "";

for (let i = 1; i <= num; i++) {
  for (let j = num - i; j > 0; j--) {
    answer += " ";
  }
  for (let j = 1; j <= i; j++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);
