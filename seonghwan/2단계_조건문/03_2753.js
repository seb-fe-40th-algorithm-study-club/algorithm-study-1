const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split(' ').map(Number);


if(input%4===0 && !input%100===0 || input%400===0){
  console.Console.log('1')
}else{
  console.Console.log('0')
}
