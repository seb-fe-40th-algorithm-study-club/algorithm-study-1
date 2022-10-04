//1427번 소트인사이드
//주어진 수(문자열)을 내림차순으로 정렬(문자열)


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = input.split('').map(Number).sort((a,b)=> b-a).join('');

console.log(result);

