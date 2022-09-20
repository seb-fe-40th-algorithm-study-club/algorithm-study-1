//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim();
// 각 다이얼에 대한 자리 배치가 필요, if문으로 걸러내기 , 해당 번호 +1이 걸리는 시간
let obj = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
let dial = Object.keys(obj);
let time = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < dial.length; j++) { // dial을 순회해가면서 문자열의 걸리는 시간을 확인함
    if (dial[j].includes(input[i])) {
      time += obj[dial[j]];
    }
  }
}
console.log(time);
