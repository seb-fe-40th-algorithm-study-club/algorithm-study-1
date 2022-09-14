const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n');
let i=0;

while(input[i]!==undefined){
  console.log( Number(input[i][0]) + Number(input[i][2]) )
  i++;
}
