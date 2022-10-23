const fs = require("fs"); // fs 모듈 선언
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number); // 입력 값 가져오기 + 데이터 정제
let nums = input.slice(1);

// Counting Sort (계수 정렬)
let maxValue = Math.max(...nums);
let result = new Array(input[0]);

// Counting Array 생성
let countingArray = new Array(maxValue + 1).fill(0);
for (let i = 0; i < nums.length; i++) countingArray[nums[i]]++;

// Counting Array 누적합 배열로 바꿔줌
for (let i = 1; i < countingArray.length; i++)
  countingArray[i] += countingArray[i - 1];

// sort
for (let i = 0; i < nums.length; i++) {
  result[countingArray[nums[i]]] = nums[i];
  countingArray[nums[i]] -= 1;
}

console.log(result.join("\n"));
