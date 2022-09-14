// run.js
// 입력 !
//첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

// 출력 !
//점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!!
 
///dev/stdin 하면 런타임에러나서 0 으로 바꿔줘야함!
const [x, y] =require('fs').readFileSync(0)
.toString().split('\n').map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력 값 가져오기 + 데이터 정제

// 1. x >0 && y>0 둘다 양수면 1 사분면 
// 2. x <0 && y>0  2 사분면 
// 3. x <0 && y<0  3 사분면 
// 4. x >0 && y<0 면 4 사분면 
if(x> 0 && y >0) {
  console.log(1)
} else if(x <0 && y>0) {
  console.log(2)
} else if( x <0 && y<0 ) {
  console.log(3)
} else if( x >0 && y<0){
  console.log(4)
}





