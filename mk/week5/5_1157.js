//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .toLocaleLowerCase();
// 가장 많이 등장한 알파벳을 출력
// 객체에다 데이터를 저장한다. 키 = 알파벳이 등장한 횟수, 두개 이상이면 ?를 출력한다.
// 오답처리됨.
// function checkStr(str) {
//   let upperStr = input.toUpperCase();
//   let obj = {};
//   let result = "";
//   for (let i = 0; i < upperStr.length; i++) {
//     obj[upperStr[i]] = obj[upperStr[i]] + 1 || 1;
//   }
//   for (let key in obj) {
//     if (obj[key] > (obj[result] === undefined ? 0 : obj[result])) result = key; // 최대 등장 알파벳 찾음
//   }
//   for (let key in obj) {
//     // 값은
//     if (obj[key] === obj[result] && key !== result) { // 값은 같지만 key가 다를경우 -> 같은 알파벳이 두개있다.
//       return "?";
//     }
//   }
//   return result;
// }
// console.log(checkStr(input));
function checkStr(str) {
  let result = Array(26).fill(-1);
  for (let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 97]++;
  }
  let max = Math.max(...result);
  return result.indexOf(max) !== result.lastIndexOf(max)
    ? "?"
    : String.fromCharCode(result.indexOf(max) + 65);
}
console.log(checkStr(input));
