let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=0; i<input.length-1; i++){
    let output = input[i].split(' ').map(Number).reduce((a,b) => (a+b));
    
    console.log(Number(output));
       
}