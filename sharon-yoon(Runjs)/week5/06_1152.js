const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
// split(' ')로 구분해서 input 나오게 하기
//[ 'The', 'Curious', 'Case', 'of', 'Benjamin', 'Button' ]
// trim()으로 앞뒤 공백 자르기 

// 첫줄에 영어 대소문자와 공백으로 이루어진 문자열

// input[0]이 공백('')일때는 0이 나오고 아니면 input 길이 출력 
// console.log(input[0])
// console.log(input.length)

console.log(input[0]==='' ? 0 :input.length)