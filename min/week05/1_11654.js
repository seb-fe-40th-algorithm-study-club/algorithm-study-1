//아스키코드 구하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//인풋 값을 스트링으로 재변환해야 런타임에러가 안난다.
let str = input.toString();

//아스키코드값 구하기
result = str.charCodeAt(0);

console.log(result);