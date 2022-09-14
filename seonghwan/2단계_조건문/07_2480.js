const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split(' ').map(Number);

if(input[0]===input[1]&& input[1]===input[2]&& input[0]===input[2]){
  console.log(10000+input[0]*1000);
}else if(input[0]===input[1] || input[0]===input[2]){
  console.log(1000+input[0]*100);
}else if(input[1]===input[2]){
  console.log(1000+input[1]*100);
}else{
  console.log(Math.max(input[0],input[1],input[2]) * 100);
}