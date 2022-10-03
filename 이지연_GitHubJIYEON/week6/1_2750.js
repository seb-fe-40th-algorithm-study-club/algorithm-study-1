const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

input.shift();
input.sort((a, b) => a - b);
input.forEach((e) => console.log(e));
