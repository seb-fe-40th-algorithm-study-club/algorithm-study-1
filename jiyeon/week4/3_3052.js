//나머지
//입력1
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
//출력1
// 10
// -> 각 수를 42로 나눈 나머지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 10이고
//     서로 다른 나머지는 10개가 있다.

//입력2
// 42
// 84
// 252
// 420
// 840
// 126
// 42
// 84
// 420
// 126
//출력2
// 1
// -> 모든 수를 42로 나눈 나머지는 0이다.

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr = new Set(input.map((x) => x % 42));
newArr = [...newArr];
//map로 나머지값으로 바꾸고 [...newArr] 중복값을 제거하기

console.log(newArr.length); //길이를 반환
