//vscode
const fs = require("fs");
let input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim();
// 문자열을 제외하고 count++해준다.
// 다음 수를 비교해서 있다면 제외하고 한번에 ++해준다
let croaStr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let el of croaStr) {
  // 만약에 el문자열이 포함되어있다면 해당 문자열을 기준으로 문자열을 쪼갬
  // el === c=,  제일 앞에 오면 '','남은 문자열 형태'
  // ddz=z= , el === dz=, ['.d','z='] => 쉼표를 .으로 만들어서 다시 문자열로 합쳐줌 '.d.z='
  // '.d.z='  el === z=, ['.d.',''] => '.d..'
  input = input.split(el).join(".");
}
console.log(input.length);
