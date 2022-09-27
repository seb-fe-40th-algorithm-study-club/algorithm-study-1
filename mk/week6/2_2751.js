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
input.shift();
function quicksort(arr) {
  // 퀵 정렬
  // 첫번째 인자를 기준으로 나머지 배열을 정의한다.(피벗)
  // 기준인자보다 낮은 수를 왼쪽, 큰수를 오른쪽에 배치한다.
  // 배치가 완료되었다면 해당 피벗을 기준으로 작은수 , 피벗, 큰 수의 배열로 return 한다
  // 횟수는 배열 전체를 순회한다.
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  const Lsorted = quicksort(left); // left를 기준으로 다시 실행한다
  const Rsorted = quicksort(right); // right를 기준으로 다시 실행한다.
  return [...Lsorted, pivot, ...Rsorted];

  // n.shift();
  // let str = "";
  // let result = n
  //   .map(Number)
  //   .sort((a, b) => a - b)
  //   .forEach((x) => (str += `${x}\n`));
  // console.log(str.slice(0, str.length - 1));
}

console.log(quicksort(input).join("\n"));
