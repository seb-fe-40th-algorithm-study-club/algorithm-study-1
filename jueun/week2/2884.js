const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number); // 입력 값 가져오기 + 데이터 정제

if (input[0] === 0) input[0] = 24;
let hm = input[0] * 60 + input[1] - 45;
let h = parseInt(hm / 60);
if (h === 24) h = 0;
let m = hm % 60;
console.log(h, m);
