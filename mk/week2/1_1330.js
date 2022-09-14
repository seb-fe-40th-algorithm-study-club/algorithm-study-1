const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.split(' ').map((el)=>Number(el))

const [A,B] = input

A>B&&console.log('>')
A<B&&console.log('<')
A===B&&console.log('==')
function ab(a){
    return a.name || console.log('hi')
}
let obj = {
    name : 'hi'
}
ab(obj);