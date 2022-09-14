const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split('\n');
const totalNum = Number(input[0]);

for(let i=1; i<totalNum+1; i++){
  const [fisrtNum, secondNum] = [Number(input[i][0]), Number(input[i][2])]
  console.log( `Case #${i}: ${fisrtNum} + ${ secondNum} = ${ fisrtNum + secondNum }` );
}