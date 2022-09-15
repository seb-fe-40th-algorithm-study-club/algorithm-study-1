//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split("\n");

let [N, arr] = input;
arr = arr.split(" ").map(Number);
let result = [];
// 작은 수 판별
result.push(arr.reduce((acc, cur) => (acc > cur ? cur : acc)));
// 큰 수 판별
result.push(arr.reduce((acc, cur) => (acc < cur ? cur : acc)));
console.log(result.join(" "));
