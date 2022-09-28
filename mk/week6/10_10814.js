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
console.log(
  input
    .map((x) => x.split(" "))
    .sort((a, b) => +a[0] - +b[0])
    .map((x) => x.join(" "))
    .reduce((acc, cur) => acc + "\n" + cur)
);
