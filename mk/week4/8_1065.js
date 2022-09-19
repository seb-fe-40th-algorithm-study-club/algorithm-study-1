//vscode
const fs = require("fs");
const input = Number(
  fs
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : __filename.split("/").pop().slice(0, -3) + ".txt"
    )
    .toString()
);
//자릿수사이의 일정한 수열 : 등차수열
// 89는 각자릿수가 동일하기 떄문에? 3자리 수부터 검사를 해야한다
// 124 1,2 => 1차이 2,4는 2차이기 때문에 등차수열이 아니다
let count = 0;
for (let i = 1; i <= input; i++) {
  if (i < 100) {
    count++;
    continue;
  }
  let stri = String(i);
  let a = Number(stri[0]) - Number(stri[1]),
    b = Number(stri[1]) - Number(stri[2]);
  if (a === b) count++;
}
console.log(count);
