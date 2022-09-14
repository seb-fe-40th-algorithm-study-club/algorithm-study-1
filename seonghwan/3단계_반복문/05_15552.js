const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split('\n')

const totalNum = Number(input[0]);
let result = '';

for(let i=0; i<totalNum; i++){
  const [fisrtNum, secondNum] = input[i+1].split(' ').map(Number);
  result += fisrtNum + secondNum +'\n';
}
console.log(result);