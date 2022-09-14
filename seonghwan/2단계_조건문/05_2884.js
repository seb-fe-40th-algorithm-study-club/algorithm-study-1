const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split(' ').map(Number);

const [hour, min] = input;
const convertedTime = hour*60 + min - 45;

if(convertedTime < 0){
  const newConvertedTime = convertedTime + 1440;
  console.log( `${Math.floor(newConvertedTime/60)} ${newConvertedTime%60}` );
}else{
  console.log( `${Math.floor(convertedTime/60)} ${convertedTime%60}` );
}