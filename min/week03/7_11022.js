const [N, ...arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

for (let i=0; i<N; i++) {
  const [A, B] = arr[i].split(' ').map(Number);
  console.log(`Case #${i+1}: ${A} + ${B} = ${A+B}`);
}