const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().split(' ').map(Number)


// 수의 각 자리수를 한자리씩 쪼개기
let arr = input.join().split('')

// 내림차순 정렬 후 배열을 다시 문자열로 합치기 join('')

console.log(arr.sort((a,b)=> b-a).join(''))