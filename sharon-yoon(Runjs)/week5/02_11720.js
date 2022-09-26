const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')


// 첫째줄에 숫자의 개수 둘재줄에 숫자 N개가 공백없이 주어짐
// 입력으로 주어진 숫자 N개의 합을 출력

let num = input[0]
let str = input[1]
let result = 0;


for(let i =0; i<num; i++){
    // str -> 배열로  -> 문자열배열을 숫자 배열로 
   let arr = [...str].map(Number)
   result += arr[i]
}    
console.log(result)