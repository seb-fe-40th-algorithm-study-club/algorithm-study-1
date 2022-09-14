// 입력 
//두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// 출력 
//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다

const input = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력받은 걸 코딩하기 편하게 바꿔서 쓰면 된다
// 입력 값 가져오기 + 데이터 정제

let a = input[0]
let b = input[1]

//input에 저장된 값을 바꿔서 사용하면 된다
 //a/b는 나머지 나오면 떨어트리기 위해서 Math.floor 써야함

console.log(a + b); // 출력
console.log(a - b); 
console.log(a * b); 
console.log(Math.floor(a / b));
console.log(a % b); 

