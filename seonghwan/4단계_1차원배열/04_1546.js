const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n')

const totalNum = +input[0];
const originArr = input[1].split(' ').map(Number);

const maxVal = Math.max(...originArr);

const newAverage = originArr.reduce((acc, cur)=>{
  return acc + cur/maxVal*100;
},0) / totalNum;

console.log(newAverage);

