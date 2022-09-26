const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim(); // 입력 값 가져오기 + 데이터 정제

let result = "";
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  result += input.indexOf(String.fromCharCode(i)) + " ";
}

console.log(result.trim());
