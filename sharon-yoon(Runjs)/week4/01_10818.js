const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')

// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.



let A = parseInt(input[0]) // 정수의 개수 
// arr를 오름차순으로 정렬
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b)

console.log(arr[0] + ' ' + arr[arr.length-1])
