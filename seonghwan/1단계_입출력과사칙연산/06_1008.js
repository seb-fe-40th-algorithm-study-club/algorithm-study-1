const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split('\n')
let [input1, input2] = [input[0], input[1]];
input1 = input1.split(' ');
input2 = input2.split(' ');

console.log(input1[0]/input1[1])
console.log(input2[0]/input2[1])

