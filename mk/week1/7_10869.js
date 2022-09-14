const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'/dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString().split(' ')
.map(item=>Number(item))


console.log(`${input[0]+input[1]}
${input[0]-input[1]}
${input[0]*input[1]}
${Math.floor(input[0]/input[1])}
${input[0]%input[1]}
`)