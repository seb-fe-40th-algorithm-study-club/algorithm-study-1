const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString()

input = Number(input);

for(let i=1; i<input+1; i++){
  console.log('*'.repeat(i));
}