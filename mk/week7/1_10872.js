//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString();
let ans = Number(input);
const fac = (num) => (num === 0 ? 1 : num * fac(num - 1));

console.log(fac(ans));
