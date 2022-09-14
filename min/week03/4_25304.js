let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = 0;
for(let i=2; i<= Number(input[1])+1; i++){
   result = result +( Number(input[i].split(' ')[0]) * Number(input[i].split(' ')[1]) );
};
if(result === Number(input[0])){
    console.log(`Yes`)
} else {
    console.log(`No`)
}