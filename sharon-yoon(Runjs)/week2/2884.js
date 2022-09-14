// run.js
// 입력 !
//첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.

// 출력 !
// 첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const [H, M] =require('fs').readFileSync('dev/stdin')
.toString().split(' ').map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력 값 가져오기 + 데이터 정제

// 조건은 범위가 좁은것부터 넓게 우선순위 두기 
// 1. H가 0시고 M이 45분보다 작으면 H=23 60-(45-M)
// 2. M분이 45분보다 작으면 H-1 이고 60-(45-M)
// 3. M분이 45분보다 같거나 크면 H는 같고 M-45
if(H===0 && M<45) {
  console.log(23, 60-(45-M))
} else if(M<45) {
  console.log(H-1, 60-(45-M))
} else if( M >=45 ) {
  console.log(H, M-45)
} 





