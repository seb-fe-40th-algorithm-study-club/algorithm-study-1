let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const totalnum = input.shift();

//['21, Junkyu', '21 Dohyun', '20 Sunyoung']

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]); //숫자만 비교 나열

console.log(input.join("\n"));
