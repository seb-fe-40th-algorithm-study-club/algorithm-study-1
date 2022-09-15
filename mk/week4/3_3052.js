//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
let arr = [];
input.forEach((el) => (arr.indexOf(el % 42) === -1 ? arr.push(el % 42) : ""));
console.log(arr.length);

// //각 수를 42로 나눈 나머지를 배열에 저장한다. 단 해당 수가 있으면 제외해서 구하는게 좋을 것 같다
// function Remainder(input) {
//   let arr = [];
//   function check(inputCheck) {
//     if (inputCheck.length === 0) return;
//     arr.indexOf(inputCheck[0] % 42) === -1 ? arr.push(inputCheck[0] % 42) : "";
//     return check(inputCheck.slice(1));
//   }
//   check(input);
//   return arr.length;
// }
// console.log(Remainder(input));
