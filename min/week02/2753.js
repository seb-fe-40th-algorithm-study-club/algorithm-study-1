//runJs

//윤년
//입력 유형: 숫자 1개

//4의 배수 && 100의 배수가 아닐 때 
//4의 배수 && 400의 배수
//윤년이면 return 1, 아니면 return 0

const input = require('fs').readFileSync('/dev/stdin').toString();
const year = parseInt(input);

if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
    console.log(1)
} else{console.log(0)};