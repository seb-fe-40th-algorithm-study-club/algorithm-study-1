
const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number)


// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.


// spread 로 펼쳐서 그중 가장 큰숫자 반환
let max = Math.max(...input)

let index;

for(let i = 0; i<input.length; i++){
        // i는 0부터 시작하니까 순서 구하려면 +1 해주기
   if(input[i] === max ) {
    index = i+1 
   }
}
console.log(max, index)