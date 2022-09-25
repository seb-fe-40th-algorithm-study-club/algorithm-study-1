const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" "); // 입력 값 가져오기 + 데이터 정제

let weird = input.map((el) => +el.split("").reverse().join(""));
console.log(Math.max(...weird));
