//vscode
const fs = require("fs");
let input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
//각자 단어를 순회한다
//순회를 하면서 처음 발견된 단어는 넣어둔다
//새로운 글자가 발견됐을 때 해당 글자가 저장한 글자의 마지막이 아니면? 그건 false다
let [n, ...strs] = input;
let count = 0; //연속적으로 나열된 배열을 여기에 체크해줄 것임
for (let i = 0; i < n; i++) {
  let word = [];
  let flag = true;
  for (let j = 0; j < strs[i].length; j++) {
    if (word.indexOf(strs[i][j]) === -1) {
      word.push(strs[i][j]);
    } else {
      if (word[word.length - 1] !== strs[i][j]) {
        //마지막에 추가된 배열과 현재 값이 다르다면 연속된 배열이 아니다
        flag = false;
      }
    }
  }
  if (flag) count++; // 단어들이 다 연속적이라면?
}
console.log(count);
