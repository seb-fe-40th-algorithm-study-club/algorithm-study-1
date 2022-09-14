const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split('\n')
const [str] = input;

console.log(`${str}??!`);

