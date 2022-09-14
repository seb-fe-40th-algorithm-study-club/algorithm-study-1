const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().trim();
//require('fs').readFileSync('dev/stdin')



// 1의 자리 구하기 
// num % 10
// 10의 자리 구하는 식
// Math.floor(num/10)
//  1의 자리 -> 10의 자리 수로 만들기
// (num%10)*10

let result = Number(input);
let count = 0;

while (true) {
    // 10의 자리수 + 1의 자리수 
    let sum = Math.floor(result / 10) + result % 10;
    // result의 10의자리 + add의 1의 자리 
    result = (result % 10) * 10 + sum % 10;
    count++;
    // input값이랑 result가 같으면 탈출
    if (Number(input) === result) {
        break;
    }
}

console.log(count);

