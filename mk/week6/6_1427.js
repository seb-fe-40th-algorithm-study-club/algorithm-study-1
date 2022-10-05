//vscode
const fs = require("fs");
console.log(
  fs
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : __filename.split("/").pop().slice(0, -3) + ".txt"
    )
    .toString()
    .trim()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
