const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().split('\n');
let i=0;

while(true){
  if( !(Number( input[i][0]) || Number(input[i][2])) ) break;
  
  console.log( Number(input[i][0]) + Number(input[i][2]) );
  i++;
}
