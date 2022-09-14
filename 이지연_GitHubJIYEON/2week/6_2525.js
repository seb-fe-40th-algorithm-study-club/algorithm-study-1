var fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let a = parseInt(input[0].split(" ")[0]);
let b = parseInt(input[0].split(" ")[1]);
let c = parseInt(input[1]);

let hour = 0;
let minute = 0;

//1. 모두 분으려 변경 후 더하기 2. 1에서 더한 값에서 60을 나누어 몫을 시간, 분, 나머지를 분으로 출력
//3. 24시가 넘을 경우 -24 후 출력
hour = Math.floor((a * 60 + b + c) / 60);
minute = (a * 60 + b + c) % 60;

if (hour >= 24) {
  hour -= 24;
}

console.log(`${hour} ${minute}`);
