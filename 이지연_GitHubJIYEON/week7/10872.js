//0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
//입력 10 출력 3628800
//입력 0  출력 1
const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  if (n < 2) {
    return n;
  }

  return factorial(n - 1) * n;
};

console.log(factorial(input));
