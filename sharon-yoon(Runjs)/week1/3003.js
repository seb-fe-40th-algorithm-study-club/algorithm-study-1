// 입력 
//두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// 출력 
//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다

const input = require('fs').readFileSync('dev/stdin').toString().split(" ").map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력받은 걸 코딩하기 편하게 바꿔서 쓰면 된다
// 입력 값 가져오기 + 데이터 정제

const king = input[0];
const queen = input[1];
const look = input[2];
const bishop = input[3];
const knight = input[4];
const phone = input[5];


//input에 저장된 값을 바꿔서 사용하면 된다


console.log(1-king, 1-queen, 2-look, 2-bishop, 2-knight, 8-phone); // 출력


