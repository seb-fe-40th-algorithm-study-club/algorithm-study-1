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
function bubblesort(n) {
  n.shift();
  let result = n
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((x) => console.log(x));
  //   let empty = [];
  //   let result = n
  //     .map(Number)
  //     .sort((a, b) => a - b)
  //     .filter((x) => (empty.indexOf(x) === -1 ? empty.push(x) : ""));
  //   for (let i = 0; i < n.length; i++) {
  //     console.log(empty[i]);
  //   }
  //   let arr = [...n].map(Number);
  //   //중복되지 않은 수  검출
  //   let empty = [];
  //   let result = arr.filter((x) =>
  //     empty.indexOf(x) === -1 ? empty.push(x) : ""
  //   );

  //   let flag = true; // 만약에 수가 바뀌지 않는다면 정렬이 끝났기 때문에 종료
  //   for (let i = result.length; i > 0; i--) {
  //     for (let j = 0; j < i - 1; j++) {
  //       // 정렬이 끝날 때  마다 제일 끝에 제일 큰 수가 배치된다.
  //       if (result[j] > result[j + 1]) {
  //         [result[j], result[j + 1]] = [result[j + 1], result[j]];
  //         flag = false;
  //       }
  //     }
  //     if (flag) break;
  //   }
  //   result.forEach((x) => console.log(x));
}

bubblesort(input);
