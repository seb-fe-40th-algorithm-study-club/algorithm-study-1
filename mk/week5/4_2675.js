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

function repeatStr(str, n) {
  //0을 false한 값으로 이용
  return n ? str + repeatStr(str, n - 1) : "";
}

// 테스트 케이스 C가 주어진다
// 한 줄이 테스트 케이스 하나. 앞에 수 만큼 문자열을 반복해서 출력한다
let testCase = +input[0];
for (let i = 1; i <= testCase; i++) {
  let [repeatN, strs] = input[i].split(" ");
  let result = "";
  for (let j = 0; j < strs.length; j++) {
    result += repeatStr(strs[j], repeatN);
  }
  console.log(result);
}
