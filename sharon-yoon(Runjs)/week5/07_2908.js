const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
// 734 893
// 437 398 중에 큰 수를 출력


let [A, B] = input

// console.log(Math.floor(A/100)) 100자리
// console.log(Math.floor(A%100/10)) 10자리
// console.log(Math.floor(A%10)) 1자리 

// 734 자리수 추출해서 newA에 437 거꾸로 된 숫자 할당

let newA = Math.floor(A%10)*100 + Math.floor(A%100/10)*10 + Math.floor(A/100)

let newB =  Math.floor(B%10)*100 + Math.floor(B%100/10)*10 + Math.floor(B/100)

console.log(newA >= newB ? newA : newB)