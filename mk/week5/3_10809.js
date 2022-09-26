//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString();

// 알파벳 위치에 해당 알파벳이 나오면 +1 해주는 프로그램 , 한번 나오면 0 , 한번도 안나오면 -1
// 알파벳 갯수만큼 array를 세팅, a = 0번째 인덱스, 처음 등장하는 위치를 배열에 표시
// 새로운 방법 객체에 해당 알파벳을 담고, 만약에 등장한 인덱스라면 해다
let result = Array(26).fill(-1);
function countAlphabet(str) {
  // 해당 알파벳 자리를 +1 해줌, indexOf는 제일 앞쪽에 위치한 인덱스
  if (result[`${str[0]}`.charCodeAt() - 97] === -1)
    // if문 없어도 indexOf 특성으로 넘길수 있는데,, 백준에서는 그게 싫나봄...
    result[`${str[0]}`.charCodeAt() - 97] = input.indexOf(str[0]);

  return str.length ? countAlphabet(str.slice(1)) : null;
}
countAlphabet(input);
console.log(result.join(" ") + " ");

// let result = Array(26).fill(-1);
// function countAlphabet(str) {
//   if (str.length === 0) return;
//   // 해당 알파벳 자리를 +1 해줌
//   result[str[0].charCodeAt() - 97] += 1;
//   return countAlphabet(str.slice(1));
// }
// countAlphabet(input);
// console.log(result);
