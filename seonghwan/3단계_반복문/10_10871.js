const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().split('\n');

const [totalNum, baseVal] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let result = '';

for(let i =0; i<totalNum; i++){
  arr[i]<baseVal ? result += `${arr[i]} ` : null;
}
console.log(result);