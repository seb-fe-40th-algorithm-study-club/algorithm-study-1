// run.js

const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split('\n')


// 10 5
let N = parseInt(input[0].split(' ')[0]);
let X = parseInt(input[0].split(' ')[1]);
// arr에 두번째 예제 입력 담기
let arr = input[1].split(' ').map(Number)
let result = ''

// arr[i] 랑 X 비교
for(let i = 0; i<N ; i++) {
    if(arr[i] < X){
        result = result + arr[i] + ' '
    } 
}

console.log(result)

