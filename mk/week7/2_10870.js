const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const fibo = (n) => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));

console.log(fibo(+input));
