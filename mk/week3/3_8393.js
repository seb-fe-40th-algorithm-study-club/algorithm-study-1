//vscode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()

function sum(n){
    return n===0? 0 : sum(n-1)+n
}
console.log(sum(Number(input)))