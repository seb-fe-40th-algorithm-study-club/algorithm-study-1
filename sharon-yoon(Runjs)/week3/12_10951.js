// run.js

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')


// 1 1
// 2 3...

let i = 0

// input[i]가 있을때만
while(input[i]) {
    // Number로 A,B에 담기
    let [A, B] = input[i].split(' ').map(Number)
    console.log(A + B)
    i++;
}

