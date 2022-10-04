const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = Number(input[0]);

const arr = input[1].split(" ").map((item) => Number(item));

// 중복 제거 및 배열로 타입 변환
let coord = Array.from(new Set(arr));

// coord 배열 원소 오름차순 정렬
coord.sort((a, b) => a - b);

let obj = {};

coord.forEach((item, index) => {
  // key - value로 객체 생성
  obj[item] = index;
});

let ans = [];

arr.forEach((item) => {
  ans.push(obj[item]);
});

console.log(ans.join(" "));
