const [input, nums] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

const [N,X] = input.split(' ').map(Number);

let arr = nums.split(' ').map(Number);

let result = arr.filter(ele => ele < X)

console.log(result.join(' '))