//25305번 커트라인

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let scores = input[1].split(' ').map(Number);
let sortedScores = scores.sort((a,b)=> b-a); //큰수부터 내림차순 정렬

let k = input[0].split(' ').map(Number)[1]

console.log(sortedScores[k-1])

//N이 주어진 이유가 있을텐데 사용하지 못해서 찜찜하다...