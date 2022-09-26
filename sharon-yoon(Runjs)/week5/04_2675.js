const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().split('\n')


// 첫째줄 테스트케이스 개수 T
// 각 테스트케이스 반복 횟수 , 문자열 S가 공백으로 주어짐

let result ='';

for(let i =1; i<= input[0]; i++) {
    // [A,B]가 반복문 안에 들어와서 A만큼 문자 B가 반복
    let [A, B] = input[i].split(' ')
    result = ''; // 반복문 돌때 result 리셋

   for(let j=0; j < B.length ; j++){
    result += B[j].repeat(A) 

     }
   console.log(result)
  }
