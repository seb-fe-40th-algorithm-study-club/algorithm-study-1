const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString().trim().split(' ')
.map((item)=>parseInt(item))

let [A,B,C] = input


console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C)*(B%C))%C)