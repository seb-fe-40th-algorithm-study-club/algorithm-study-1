
// 입력 
//두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// 출력 
//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 \n으로 하고 
// 옆에 있을떈 ' '로 하기!! 
const [a, b] =require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력받은 걸 코딩하기 편하게 바꿔서 쓰면 된다
// 입력 값 가져오기 + 데이터 정제

// b의 첫자릿수 10나누고 나머지 38.5 -> 5
const oneNum = b%10;
// b의 십의 자리수 3.85 -> 85 / 10 => 8
const tenNum= Math.floor((b%100)/10);
// b의 천의 자리수 3.85 -> 3
const hundNum = Math.floor(b/100)



//input에 저장된 값을 바꿔서 사용하면 된다


console.log(a*oneNum); // 출력
console.log(a*tenNum); // 출력
console.log(a*hundNum); // 출력
console.log(a*b); // 출력

// 출력




