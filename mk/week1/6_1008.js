const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'/dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString().split(' ').map(item=>Number(item))
.reduce((acc,cur)=> Number(acc)/Number(cur))

console.log(input)