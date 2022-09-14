//사분면 고르기
//입력 유형: 두줄 
//출력 유형: 한줄

//실패1 - 런타임에러2
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [x,y] = input
if ((x > 0) && (y > 0)){console.log(1)} 
else if ((x < 0) && (y > 0)){console.log(2)} 
else if ((x < 0) && (y < 0)){console.log(3)} 
else if ((x > 0) && (y < 0)){console.log(4)} 

//성공

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
    
    const [x, y] = input;
    if ((x > 0) && (y > 0)){console.log(1)} 
    else if ((x < 0) && (y > 0)){console.log(2)} 
    else if ((x < 0) && (y < 0)){console.log(3)} 
    else if ((x > 0) && (y < 0)){console.log(4)} 
    
    process.exit();
});