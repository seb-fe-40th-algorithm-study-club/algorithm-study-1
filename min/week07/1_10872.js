const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

function factorial(number) {
    let n = Number(number);
    if(n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(input))