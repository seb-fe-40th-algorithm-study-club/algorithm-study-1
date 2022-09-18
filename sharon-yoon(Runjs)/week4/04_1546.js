const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')


// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

let num = input[0]
let arr = input[1].split(' ').map(Number)

let max = Math.max(...arr)
let result = 0;


for(let i =0; i < num; i++) {
    result = result + arr[i]/max*100
}


console.log(result/num)



