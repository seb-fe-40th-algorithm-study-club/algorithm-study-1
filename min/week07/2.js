const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

function fibo(n){
    if(n === 0){ return 0 }
    if(n === 1){ return 1 }
    return fibo(n-1)+ fibo(n-2)
}
console.log(fibo(Number(input)))