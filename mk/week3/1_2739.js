//vscode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.split(' ').map((el)=>Number(el))

for(let i =1; i<10; i++){
    console.log(`${input[0]} * ${i} = ${input[0]*i}`)
}