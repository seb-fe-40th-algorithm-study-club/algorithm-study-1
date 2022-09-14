const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'/dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString().split(' ')

console.log(Number(input[0])*Number(input[1]))