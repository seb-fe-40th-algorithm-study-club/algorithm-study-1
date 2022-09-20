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

// N개의 숫자가 공백없이 쓰여있음. 이 숫자들을 모두 합해서 출력하는 프로그램
function solution(n, numbers) {
  return n === 0 ? 0 : +numbers[0] + solution(n - 1, numbers.slice(1));
}
console.log(solution(...input));
