const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.split(' ').map((el)=>Number(el))

const [A] = input;
function score(a){
    if(A>=90)return console.log('A')
    if(A>=80)return console.log('B')
    if(A>=70)return console.log('C')
    if(A>=60)return console.log('D')
    if(A>=0)return console.log('F')
}
score(A)