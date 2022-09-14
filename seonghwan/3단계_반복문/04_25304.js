const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().split('\n');

const receiptPrice = Number(input[0]);
const totalItemNum = Number(input[1]);
let totalSum = 0;

for(let i=0; i<totalItemNum; i++){
  const [eachItemPrice, eachItemNum] = input[i+2].split(' ').map(Number);
  totalSum += ( eachItemPrice * eachItemNum );
}

totalSum===receiptPrice ? console.log('Yes') : console.log('No');




