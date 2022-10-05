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
// 첫번째 줄에 응시자 수와 상을 받을 수 있는 사람의 수가 주어짐
// 두번째 줄에 해당 점수가 나옴
// 사람 수가 2번째라면 끝에 걸친 두번째 사람이 나와야함
let [N, cutLine] = input[0].split(" ").map(Number);
let [...score] = input[1].split(" ").map(Number);
console.log(score.sort((a, b) => a - b).slice(-cutLine)[0]);

// // 퀵 쇼트로 우선적으로 사람을 구분
// function quicksort(arr) {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < arr.length; i++) {
//     pivot >= arr[i] ? left.push(arr[i]) : right.push(arr[i]);
//   }
//   let Lsort = quicksort(left); // 왼쪽 정렬을 끝냄
//   let Rsort = quicksort(right); // 오른쪽 정렬을 끝냄
//   return [...Lsort, pivot, ...Rsort];
// }

// console.log(quicksort(score).slice(-cutLine)[0]);
