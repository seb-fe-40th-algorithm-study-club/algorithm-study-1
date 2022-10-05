//수 정렬하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, ...numbers] = input

const result = numbers.sort((a, b) => a - b);
console.log(result.join('\n'));
//console.log가 느린친구라 정렬된값 하나마다 호출하시면 최대 100만번 호출된다고 한다!