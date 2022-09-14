const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim().split('\n')

const nowTime = input[0].split(' ').map(Number); 
const takeTime = Number(input[1]);
let convertedTime = nowTime[0]*60 + nowTime[1] + takeTime;

if(convertedTime >= 1440 ){
  convertedTime = convertedTime-1440;
  console.log(`${Math.floor(convertedTime/60)} ${convertedTime%60}`)
}else{
  console.log( `${Math.floor(convertedTime/60)} ${convertedTime%60}` );
}