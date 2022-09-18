const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);

let maxNum = input[0];
for(let i=1; i < input.length; i++){
    if(input[i]>maxNum){
        maxNum = input[i]
    }
}

let indexMaxNum = input.indexOf(maxNum) + 1

console.log(`${maxNum}\n${indexMaxNum}`)