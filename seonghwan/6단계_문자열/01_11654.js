const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim()

const ascii = input.charCodeAt(); //인자가 없으면 기본적으로 0이 들어감
console.log(ascii)

/**
 * 문제
 * 아스키 코드
 * 
 * 입력
 * A
 * 
 * 출력
 * 65
 * 
 * 내용
 * 주어진 글자의 아스키 코드값을 출력
 */