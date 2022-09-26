const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력 값 가져오기

let result = "";
let cases = input.slice(1).map((el) => el.split(" "));
for (let i = 0; i < cases.length; i++) {
  for (let j = 0; j < cases[i][1].length; j++) {
    result += cases[i][1][j].repeat(cases[i][0]);
  }
  result += "\n";
}
console.log(result);
