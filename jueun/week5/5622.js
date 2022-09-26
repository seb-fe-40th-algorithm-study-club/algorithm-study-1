const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim(); // 입력 값 가져오기 + 데이터 정제

let time = 0;
for (let i = 0; i < input.length; i++) {
  switch (true) {
    case /[ABC]/.test(input[i]):
      time += 3;
      break;
    case /[DEF]/.test(input[i]):
      time += 4;
      break;
    case /[GHI]/.test(input[i]):
      time += 5;
      break;
    case /[JKL]/.test(input[i]):
      time += 6;
      break;
    case /[MNO]/.test(input[i]):
      time += 7;
      break;
    case /[PQRS]/.test(input[i]):
      time += 8;
      break;
    case /[TUV]/.test(input[i]):
      time += 9;
      break;
    case /[WXYZ]/.test(input[i]):
      time += 10;
      break;
  }
}

console.log(time);
