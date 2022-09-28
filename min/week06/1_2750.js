//수 정렬하기
//2750번
//N개의 수가 주어졌을 때, 이를 오름차순으로 정렬

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n"); //입력값이 줄바꿈으로 들어옴
const [N, ...numbers] = input //첫번째 줄의 값은 수의 갯수 N
let sortedNumbers = numbers.sort((a,b)=> a-b); //오름차순 정렬

for(i=0; i < Number(N); i++){
    console.log(sortedNumbers[i])
}