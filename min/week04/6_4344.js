const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
function aboveAverage(string){
    let testCase = Number(string.split(' ')[0]);
    let scores = string.split(' ').slice(1).map(Number);
    let avg = (scores.reduce( (a,b)=> a+b ) ) / testCase;
    let result = ( ( scores.filter(ele => ele > avg).length ) / testCase )* 100;
    let roundOff = result.toFixed(3);
return roundOff;
}

for(let i = 1; i <= Number(input[0]); i++){
    console.log(`${aboveAverage(input[i])}%`)
}
