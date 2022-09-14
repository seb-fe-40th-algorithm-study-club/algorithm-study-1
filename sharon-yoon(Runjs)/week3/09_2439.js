// run.js

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split(' ')


// 5가 입력됐을때 *이 오른쪽 정렬로 1,2,3,4,5 가 찍혀야한다.
let result = ' '; 
let star = '*'

//i를 1부터 시작하려고 result에 ' ' 줌
for(let i = 1; i<input; i++) {
  result = result + ' '
}

for(let i =1; i<= input; i++) {
  // result 1번째부터 마지막 인덱스까지 나오게 하기 
  result = result.substring(1)
  result = result.concat(star)
  console.log(result);
}
