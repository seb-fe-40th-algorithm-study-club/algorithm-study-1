const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number)

// indexof() 배열에서 특정값이 처음으로 나타나는 인덱스를 리턴
// 수는 중복되지 않는다.
// 시간 줄이기 ! 

// 맨 앞줄만 떼기 ! 
let N = input.shift()

// console.log(input)
let str = input.sort((a,b) => a-b)

//sort로 오름차순 정렬
//for문으로 console.log 찍으면 시간이 더 걸리니 
// result에 담아놓고 console.log로 출력 
let result = ''
for(let el of str) {
   result += `${el}\n`
}
console.log(result)