const fs = require("fs"); // fs 모듈 선언
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase(); // 입력 값 가져오기

let frequency = {};

for (let i = 0; i < input.length; i++) {
  if (frequency[input[i]] !== undefined) frequency[input[i]]++;
  else frequency[input[i]] = 0;
}

let values = Object.values(frequency);
let max = Math.max(...values);
if (values.filter((el) => el === max).length > 1) {
  console.log("?");
} else {
  console.log(Object.keys(frequency).find((key) => frequency[key] === max));
}
