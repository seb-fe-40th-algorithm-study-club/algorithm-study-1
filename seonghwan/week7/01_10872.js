const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
  .toString().trim();

function factorial(num) {
  if (num <= 1) return 1;

  return (num * factorial(num - 1));
}
console.log(factorial(+input));

/**
 * 2! -> 2*1!
 * 3! -> 3*2*1 -> 3*2!
 * 4! -> 4*3*2*1 -> 4*3!
 */






/**
 * 문제
 * 팩토리얼
 * 
 * 입력
 * 10
 * 
 * 출력
 * 3628800
 * 
 * 내용
 * 0보다 크거나 같은 정수 N이 주어진다.
 */