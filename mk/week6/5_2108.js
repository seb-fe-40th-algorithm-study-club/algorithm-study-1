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
let N = Number(input[0]);
let scores = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// 평균 구하기 함수

const ave = (arr, n) =>
  Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n) === -0
    ? 0
    : Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
// console.log(ave(scores, N));
const middle = (arr, n) => arr[Math.floor(n / 2)];
// console.log(middle(scores, N));
// 빈도수 구하기
function getFrequency(arr) {
  let frequency = {};
  for (let i = 0; i < scores.length; i++) {
    frequency[scores[i]] = frequency[scores[i]] + 1 || 1;
  }
  let max = Object.keys(frequency)[0]; // 최대 빈도수를 찾을 것

  for (let key in frequency) {
    if (frequency[key] > frequency[max]) {
      max = +key;
    }
  }
  let freArr = []; // 빈도수의 배열을 넣을 것
  for (let key in frequency) {
    if (frequency[max] === frequency[key]) {
      freArr.push(key); // 빈도수가 같은 것을 배열에 담기
    }
  }
  let frequencyNum = 0;
  // 빈도수가 같은 것들이 존재
  // console.log(max);
  freArr.length > 1
    ? (frequencyNum = freArr.map(Number).sort((a, b) => a - b)[1])
    : (frequencyNum = max);

  return frequencyNum;
}
// console.log(getFrequency(scores));
// 범위 출력
const scoreRange = (arr) => Math.max(...scores) - Math.min(...scores);
// console.log(scoreRange(scores));
const solution = (sc, n) => {
  let str =
    ave(sc, n) +
    "\n" +
    middle(sc, n) +
    "\n" +
    getFrequency(sc) +
    "\n" +
    scoreRange(sc);
  return str;
};
console.log(solution(scores, N));

// 카운팅 정렬 방식은 수들의 범위가 작을 때 유용, 4000까지 입력들어오는 것을 확인했으니깐 패스
// let frequency = new Array(Math.max(...scores) + 1).fill(0);
// for (let i = 0; i < scores.length; i++) {
//   frequency[scores[i]]++;
// }
// console.log(frequency);
// 첫번쨰 줄에 수의 갯수
// 그이후에는 점수의 갯수가 나옴
// 산술 평균 : 전체 갯수의 총합의 평균
// 중앙값 출력
// 최빈 제일 많은 빈도수? 빈도수가 많은것이 여러개라면? 값 두번째로 작은값 오름차순 배열의 [1] 없으면 0
// 범위를 출력? 최댓값과 최솟값의 차이를 출력해야함
