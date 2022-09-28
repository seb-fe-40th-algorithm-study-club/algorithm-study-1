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

// 좌표 압축?? 해당 좌표의 값을 그 값보다 작은 좌표값들의 갯수로 대체한다는 의미?
// [2,4,-10,4,-9]의 배열이 존재한다면 해당 배열의 중복을 제거
// [-10,-9,2,4]해당 각 수에서 해당 수보다 작은 수를 인덱스 위치에다가 리턴해야한다?
// 오름차순으로 배치하면 해당 숫자에 인덱스가 다른 숫자보다 몇번쨰로 큰지 알 수 있음
input.shift();
let origin = input[0].split(" ").map(Number);
let arr = [
  ...new Set(
    input
      .join(" ")
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  ),
];
let obj = {};
for (let key in arr) {
  obj[arr[key]] = key;
}

let str = "";
for (let i = 0; i < origin.length; i++) {
  // indexof때문에 시간초과가 나오는 듯함 . 검색결과 obj에 떠줘야함
  str += obj[origin[i]] + " ";
}
console.log(str.slice(0, str.length - 1));
