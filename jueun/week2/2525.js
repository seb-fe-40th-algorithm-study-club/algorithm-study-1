const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 입력 값 가져오기 + 데이터 정제
let clock = input[0].split(" ").map(Number);
let time = Number(input[1]);

let hm = clock[0] * 60 + clock[1] + time;
let h = parseInt(hm / 60);
if (h >= 24) {
  h -= 24;
}
let m = hm % 60;
console.log(h, m);
