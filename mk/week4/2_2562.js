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
  .split("\n")
  .map(Number);
// 몇번째 수인지다 문제 잘읽고 풀어야겠따..
// let obj = { max: input[0], idx: 0 };
// for (let key in input) {
//   obj.max < input[key] ? (obj = { max: input[key], idx: +key }) : "";
// }
// let { max, idx } = obj;
// console.log(`${max}\n${idx + 1}`);

// 인풋에 대한 출력은 맞게 나오는 데 정답이 안나옴 화가남; => 인덱스가 아니고 몇번쨰 수인지임... 되는 정답
const result = input.reduce(
  (acc, cur, idx) => (acc.max > cur ? acc : { max: cur, idx: idx }),
  { max: input[0], idx: 0 }
);
console.log(result.max + "\n" + (result.idx + 1));
