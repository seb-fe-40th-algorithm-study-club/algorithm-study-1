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
let [ea, scores] = input;
let max = Math.max(...scores.split(" "));
scores =
  scores
    .split(" ")
    .map((el) => (+el / max) * 100)
    .reduce((acc, cur) => acc + cur, 0) / ea; //평균값 구하기
console.log(scores % 1 !== 0 ? scores : (scores += ".0")); //정수로 나눠떨어지지 않는다면 : 정수로 나눠떨어진다면
