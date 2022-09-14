// run.js

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')


// 1 1
// 0 0

let i = 0

// '0'이 아닐때까지 
while(input[i][0]!== '0') {
    // Number로 A,B에 담기
    let [A, B] = input[i].split(' ').map(Number)
    console.log(A + B)
    i++;
}

