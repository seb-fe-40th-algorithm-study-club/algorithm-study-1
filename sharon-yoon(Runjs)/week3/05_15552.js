// run.js
// 빠른 A+B
// 더 빨리 결과 추출하는 코드 

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split('\n')


let total = Number(input[0])
 let result = ''

// 시간을 줄이기 위한 코드 
for(let i =1; i<= total; i++) {
  temp = input[i].split(' ')
  result += parseInt(temp[0]) + parseInt(temp[1]) + "\n"
}
console.log(result);