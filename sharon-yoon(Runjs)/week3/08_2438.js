// run.js

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString()



// 5가 입력됐을때 *이 1,2,3,4,5 가 찍혀야한다.
let result = ''; 
let star = '*'

for(let i =1; i<= input; i++) {
  result = result.concat(star)
  console.log(result)
}
