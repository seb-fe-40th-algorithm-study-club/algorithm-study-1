let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("");

input.sort((a, b) => b - a);
console.log(input.join(""));
