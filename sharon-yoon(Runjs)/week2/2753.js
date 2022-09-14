
// run.js
// 입력 !
//첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.
// 출력 !
// 첫째 줄에 윤년이면 1, 아니면 0을 출력한다.
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// 4의배수 && (100의 배수 x || 400의 배수)

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input =require('fs').readFileSync('dev/stdin')
.toString().split(' ').map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력 값 가져오기 + 데이터 정제

if(input % 4 === 0 && (input % 100 !== 0 || input % 400 ===0)) {
  console.log(1)
} else {
  console.log(0)
}




