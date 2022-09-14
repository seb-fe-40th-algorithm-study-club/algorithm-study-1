//알람시계
//입력 유형: 한 줄에 입력값 2개

// 성공
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const [H, M] = input;
    if ((H === 0) && (M < 45)){console.log(23,M+15)} 
    else if ((M < 45)){console.log(H-1,M+15)} 
    else if ((M >= 45)){console.log(H,M-45)} 