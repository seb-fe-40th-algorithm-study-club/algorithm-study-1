const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim();
let arr;
let cnt = 0;

if(input.length===1) input = '0' + input;
arr = input;
arr=arr.split('').map(Number);

while(true){
  arr = [ arr[1], Number((arr[0] + arr[1]).toString().slice(-1))];
  cnt++;

  if(arr.join('')===input) break;
}
console.log(cnt);