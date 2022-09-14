const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split(' ').map((el)=>Number(el));

console.log(input[0] + input[1])
console.log(input[0] - input[1])
console.log(input[0] * input[1])
console.log( Math.floor(input[0] / input[1]) )
console.log(input[0] % input[1])


