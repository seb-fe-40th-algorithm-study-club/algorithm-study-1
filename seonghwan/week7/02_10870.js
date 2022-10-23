const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
  .toString().trim();

function Fibonacci(num){
  if(num < 2) return num;

  return Fibonacci(num-2) + Fibonacci(num-1);
}

console.log(Fibonacci(input));

/**
 * F(n) = F(n-1) + F(n-2)
 * F(0) = 0
 * F(1) = 1
 * F(2) = 1
 * F(3) = 2
 */


  /**
 * 문제
 * 피보나치 수 5
 * 
 * 입력
 * 10
 * 
 * 출력
 * 55
 * 
 * 내용
 * 첫째 줄에 n번째 피보나치 수를 출력한다.
 */