let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=0; i<input.length; i++){
    let output = input[i].split(' ').map(Number).reduce((a,b) => (a+b));
    
    if(output === 0){
    break;
    } else {
    console.log(output);
    }    
}
