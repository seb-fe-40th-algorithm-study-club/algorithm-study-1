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
const arr = input
  .map((x) => x.split(" ").map(Number))
  .sort((x, y) => {
    if (x[0] > y[0]) return 1;
    if (x[0] < y[0]) return -1;
    if (x[0] === y[0]) return x[1] > y[1] ? 1 : -1;
  })
  .map((x) => `${x[0]} ${x[1]}`)
  .reduce((acc, cur) => acc + "\n" + cur);

console.log(arr);
