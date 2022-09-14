const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
input = Number(input);


for(let i=1; i<10; i++){
  console.log(`${input} * ${i} = ${input * i}`);
}