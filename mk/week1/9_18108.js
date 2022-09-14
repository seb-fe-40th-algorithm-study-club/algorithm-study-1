const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'/dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString()

console.log(Number(input)-543)
