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

input.shift();
let str = "";
const result = input.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
});
//set은 중복되지 않은 수만 객체에 넣어준것?
console.log([...new Set(result)].join("\n"));
// 메모리 초과
// console.log(
//   input
//     .sort((a, b) => {
//       if (a.length > b.length) return 1;
//       if (a.length < b.length) return -1;
//       if (a.length === b.length) {
//         return a > b ? 1 : -1;
//       }
//     })
//     .reduce((acc, cur) => (acc.includes(cur) ? acc : acc + "\n" + cur))
// );
