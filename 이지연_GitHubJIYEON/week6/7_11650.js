let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const totalnum = input.shift();

let newArr = Array.from(new Set(input)); //중복 값을 제외한 새로운 배열 만들어줌

newArr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)); //사전 순서로 정렬

newArr.sort((a, b) => a.length - b.length); //길이 순서로 정렬

console.log(newArr.join("\n"));

/* 참고
let newArr = [...input]; 
같은 값 중복해서 출력됨

.localeCompare()
문자열끼리 비교를 해주는 함수

*/
