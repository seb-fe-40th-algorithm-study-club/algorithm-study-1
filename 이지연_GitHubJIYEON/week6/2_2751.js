// 입력;
// 5;
// 5;
// 4;
// 3;
// 2;
// 1;

// 출력;
// 1;
// 2;
// 3;
// 4;
// 5;

let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");
//['5', '5', '4', '3', '2', '1']

input.shift(); //첫째줄 수의 개수 제거

let answer = input.sort((a, b) => a - b); //오름차순 정렬

console.log(answer.join("\n"));
