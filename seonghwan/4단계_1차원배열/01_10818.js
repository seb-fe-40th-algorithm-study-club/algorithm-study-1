const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().split('\n');

const arr = input[1].split(' ').map(Number);
let min = arr[0];
let max = arr[0];

arr.forEach((el)=>{
  if(el>max) max = el;
  if(el<min) min = el;
});

console.log(min, max);
