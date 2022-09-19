//vscode
const { sign } = require("crypto");
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

//prev에다가 이전키를 저장한다. 이전키가 만약에 o고 현재키도 o라면 point는 1씩 올라가고 해당 수를 더한다
// O => 1
// OO => 1+2
// OOO => 1+2+3

let [n] = input,
  i = 0;
// for (let i = 1; i <= n; i++) {
//   let sum = 0;
//   let count = 0;
//   for (let j = 0; j <= input[i].length; j++) {
//     if (input[i][j] === "O") {
//       sum += ++count;
//     } else {
//       count = 0;
//     }
//   }
//   console.log(sum);
//}
while (i < +n) {
  let sum = 0;
  let score = 0;
  `${input[i + 1]}`.split("").forEach((cur) => {
    if (cur === "O") {
      // 만약 O라면 score++ -> 1 연속이라면 1+1
      score++;
      sum = sum + score;
    } else {
      score = 0; //x가 나오면 0으로 돌아감
    }
  });
  console.log(sum);
  i++;
}
