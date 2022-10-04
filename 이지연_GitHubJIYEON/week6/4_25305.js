// 입력
// 5 2
// 100 76 85 93 98
// 출력
// 98

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
//['5, 2', '100, 76, 85, 93, 98']

let input1 = input[0].split(" "); //['5', '2']
const num = input1[0]; //응시자 숫자
const num2 = input1[1]; // 수상자 커트라인 숫자

const grade = input[1].split(" "); // ['100', '76', '85', '93', '98']

grade.sort((a, b) => b - a); //내림차순으로 정렬 [ '100', '98', '93', '85', '76' ]

console.log(grade[num2 - 1]);
