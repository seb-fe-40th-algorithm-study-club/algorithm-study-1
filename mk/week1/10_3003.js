const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'/dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString().split(' ').map(item=>Number(item))

//0 1 2 2 2 7

const defa = [1,1,2,2,2,8]
const result = []
for(let i=0; i<defa.length; i++){
    result.push(defa[i]-input[i])
}
console.log(result.join(' '));