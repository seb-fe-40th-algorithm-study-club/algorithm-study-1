/*
문제
산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이

입력
5
1
3
8
-2
2

출력
2
2
1
10

*/

const { sign } = require("crypto");

let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");
// ['5', '1', '3', '8', '-2', '2']

const num = input.shift(); //수의 개수

//산술평균
let sum = 0;
for (let i = 0; i < num; i++) {
  sum = sum + input[i];
}
let average = Math.round(sum / num); //평균값 후 반올림

//마이너스 숫자 조건으로 처리
if (average === -0) {
  console.log(0);
} else {
  console.log(average);
}

//중앙값
input.sort((a, b) => a - b);
let index = Math.floor(num / 2);
console.log(input[index]);

//-------------------------------------------참고
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const iter = input.shift();

// 산술평균 //
// 모든 원소의 합을 구한 뒤 배열의 길이로 나누면 된다.
let sum = 0;

for (let i = 0; i < iter; i++) {
  sum += input[i];
}

const avg = Math.round(sum / iter);

// 굳이 분기 처리를 하는 이유는 문제에도 나와있다.
// Math.round(-1/3)을 하면 0이 아니라, -0이 나온다.
// 이 때 0이 출력되어야하므로, 이 부분을 예외처리 해줘야한다.
if (avg === -0) {
  console.log(0);
} else {
  console.log(avg);
}

// 중앙값 //
// input을 오름차순 or 내림차순으로 정렬 후 가운데 값을 구하면 된다.
input.sort((a, b) => a - b);

// input의 길이는 홀수이기 때문에, floor를 통해 중앙에 있는 인덱스 값으로 변경해준다.
// 예를들어, input의 길이가 5라면 5/2 = 2.5이므로 인덱스로 사용할 수 없다.
// 또한 1,2,3,4,5 중 3에 해당하는 값을 얻어야하므로, 인덱스는 2가 된다.
// 따라서, Math.floor() 처리를 해야지 알맞은 인덱스 값을 얻을 수 있다.
let idx = Math.floor(iter / 2);

console.log(input[idx]);

// 최빈값 //
// Map 객체의 key-value를 생성하는 것으로 최대 개수를 가지는 원소를 찾아낼 것.
let map = new Map();

// 초기 최대 개수를 1로 설정해놓음.
// input의 모든 원소가 한 번씩만 나온다면 최대 개수는 1이됨.
let max = 1;

// input 배열에 있는 값들이 차례대로 number 변수로 사용된다.
for (let number of input) {
  // 만약 map에 number라는 key가 이미 존재한다면...
  // 즉, 같은 number가 두 번 이상 나올 때부터는...
  if (map.has(number)) {
    // max와 map.get(number) + 1 중 더 큰 숫자를 새로운 max로 지정
    // map.get(number) + 1을 하는 이유?
    // 이미 존재하는 number이므로 최소 1개는 존재하는데,
    // 같은 number가 1개가 더 발견됐기 때문에 1 증가시킨다.
    max = Math.max(max, map.get(number) + 1);

    // number를 key로 갖는 것의 value를 1 증가시킨다.
    map.set(number, map.get(number) + 1);
  } else {
    // 만약 map에 number라는 key가 없다면...
    // value를 1로 설정한다.
    map.set(number, 1);
  }
}

let maxArr = [];

// map 변수의 key와 value가 변수로써 사용된다.
for (let [key, value] of map) {
  // value가 max와 같다면
  if (value === max) {
    // maxArr에 후보로 넣어준다. 여러 key들이 같은 최대 개수를 가질 수 있기 때문.
    maxArr.push(key);
  }
}

// 만약 maxArr의 길이가 1이라면, 하나의 key만이 최대 개수를 가지고 있는 것이고
// 그게 아니라면, 여러 key가 최대 개수를 가지고 있는 것이므로,
// 후자의 경우 두 번째로 작은 숫자를 출력한다.
// 이는 input을 오름차순으로 정렬해놨기 때문에 가능한 것.
console.log(maxArr.length === 1 ? maxArr[0] : maxArr[1]);

// 범위 //
// input 배열의 최댓값과 최솟값의 차이를 구하면 된다.
// 위에서 sort로 인하여 배열이 오름차순 정렬이 되었으므로,
// 가장 앞에 있는 값이 최솟값, 가장 뒤에 있는 값이 최댓값이 된다.
let maxNum = input[input.length - 1];
let minNum = input[0];

console.log(maxNum - minNum);
