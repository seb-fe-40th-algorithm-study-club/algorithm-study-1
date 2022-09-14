let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
    console.log(Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]));
}