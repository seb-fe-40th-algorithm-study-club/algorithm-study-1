const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split(' ').map(Number);
const [a, b] = input;

if(a>b){
  console.log('>');
}else if(a<b){
  console.log('<');
}else{
  console.log('==');
}