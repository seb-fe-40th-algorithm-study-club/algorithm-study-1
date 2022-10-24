const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
  .toString().trim().split('\n')

const totalNum = input[0];
const seriesNum = input[1];
let sum = 0;

for (let i = 0; i < totalNum; i++) {
  sum += +seriesNum[i];
}

console.log(sum);




/**
 * 문제
 * 숫자의 합
 * 
 * 입력
 * 1
 * 1
 * 
 * 출력
 * 1
 * 
 * 내용
 * N개 숫자 전부의 합 출력
 */