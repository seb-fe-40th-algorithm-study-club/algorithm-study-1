const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString()
let sum=0;
input = Number(input);

for(let i=1; i<=input; i++){
  sum += i;
}
console.log(sum)