// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')
// 꼭 바꿔주기

let total = Number(input[0])
let count = Number(input[1])

let result = 0; 

for(let i =1; i<= count; i++) {
  let [A, B] = input[i+1].split(' ').map(Number)
  result = result + A*B
}
if(result === total) {
    console.log('Yes')
} else {
    console.log('No')
}