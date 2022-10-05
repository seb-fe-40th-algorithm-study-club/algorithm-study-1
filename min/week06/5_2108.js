const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);

// 평균구하기
function avg(arr) {
  let answer = arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
  return Math.round(answer);
}

// 중앙값 구하기
function mid(arr) {
  // 길이가 1 이상이면 arr배열을 반으로 나눈 후 내림
  // arr에서 그 인덱스를 가진 숫자 찾기
  if (arr.length !== 1) {
    idx = Math.floor(arr.length / 2);
    return arr[idx];
    // arr 길이가 1이면 arr[0]번째 리턴
  } else {
    return arr[0];
  }
}

// 최빈값
function mode(arr) {
  const map = new Map();
  // arr 돌면서
  for (let i = 0; i < arr.length; i++) {
    // map에 없으면 arr[i]추가, 1 추가
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
      // map에 있는 경우 +1 해주기
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  let maxValue = 0;
  let answer = [];

  // element : 개수 key : 숫자
  map.forEach((element, key) => {
    // max가 개수보다 적으면 교체하기
    if (maxValue < element) {
      maxValue = element;
      // 최빈값이 여러개일 수 있으므로 max가 교체되면
      // answer 리셋하고 answer에 push하기
      answer = [];
      answer.push(key);
      // max 값과 key값이 동일한 경우가 있으면
      // answer에 push해주기
    } else if (maxValue === map.get(key)) {
      answer.push(key);
    }
  });
  // answer의 길이가 2 이상이면 2번째 값 출력
  // answer의 길이가 1이면 첫 번째 값 출력
  return answer.length !== 1 ? answer[1] : answer[0];
}

// 범위구하기
function range(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];

  return max - min;
}

function solution(N, arr) {
  // 정렬하기
  arr.sort((a, b) => a - b);

  // 평균은 -0이 아닌 0을 출력해야하므로 문자열로 출력하기
  console.log(`${avg(arr)}`);
  console.log(mid(arr));
  console.log(mode(arr));
  console.log(range(arr));
}

let items = [];

for (let i = 1; i <= input[0]; i++) {
  items.push(+input[i]);
}

solution(+input[0], items);

