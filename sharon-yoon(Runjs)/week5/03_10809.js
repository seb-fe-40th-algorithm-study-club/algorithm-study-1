const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')


// a가 처음 등장하는 위치 b가 처음 등장하는 위치...z가 처음 등장하는 위치
// 단어에 그 알파벳이 없다면 -1을 출력

// backjoon
// a는 1번째위치에 있고 b는 0번째 위치에 있음 e는 2번째 위치 
// a b c  d   e  f g h i g  j l m n
// 1 0 -1 -1 2  -1 -1 -1 -1 


let str = input.join()
let result = '';
// console.log(str)
let alpha = "abcdefghijklmnopqrstuvwxyz"
// console.log(alpha)
for(let i =0; i<alpha.length; i++) {
    //str에 alpha[i] 포함되어있으면
    // alpha[i]의 인덱스를 반환하라  없으면 -1
  result += str.indexOf(alpha[i]) + ' '
  
} 
console.log(result)
