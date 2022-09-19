// 최댓값;
// 입력 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
// 3;
// 29;
// 38;
// 12;
// 57;
// 74;
// 40;
// 85;
// 61;

// 출력;
// 85
// 8

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => Number(x));
//[3, 29, 38, 12, 57, 74, 40, 85, 61]

let max = Math.max(...input);

console.log(max); //85
console.log(input.indexOf(max) + 1); //8
