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
  .split(" ");
// 단어의 개수는 공백으로 결정
// let n1 = "",
//   n2 = "";

// for (let i = input[0].length - 1; i >= 0; i--) {
//   n1 += input[0][i];
//   n2 += input[1][i];
// }
// console.log(+n1 > +n2 ? +n1 : +n2);
// 2회차 풀이
let n1 = input[0].split("").reverse().join("");
let n2 = input[1].split("").reverse().join("");
console.log(+n1 > +n2 ? +n1 : +n2);
