const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let count = Number(input[0]);
let arr = input[1].trim().split(' ').map(Number);
let maxNum = arr[0];
let minNum = arr[0];

for(let i=1; i < count; i++){
    if(maxNum < arr[i]){
        maxNum = arr[i];
    } 

    if(minNum > arr[i]){
        minNum = arr[i];
    } 
}

console.log(`${minNum} ${maxNum}`);