const fs = require("fs"); // fs 모듈 선언
const num = Number(fs.readFileSync("/dev/stdin").toString()); // 입력 값 가져오기 + 데이터 정제

let str = num < 10 ? "0" + num : "" + num;
let count;

for (count = 0; count === 0 || num !== +str; count++) {
  str = str[1] + String(+str[0] + +str[1]).slice(-1);
}

console.log(count);
