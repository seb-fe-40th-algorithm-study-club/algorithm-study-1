// run.js

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split('\n')


// 테스트케이스 개수 total
let total = parseInt(input[0])



// 테스트케이스 0번째 값 제외 1부터 시작! 
for(let i =1; i<= total; i++) {
  let [A, B] = input[i].split(' ').map(Number)
  console.log(`Case #${i}: ${A} + ${B} = ${A+B}`);
}
