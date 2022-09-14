// runjs
const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다

const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let a = input[0]
let b = input[1]

//input에 저장된 값을 바꿔서 사용하면 된다

console.log(a - b); // 출력