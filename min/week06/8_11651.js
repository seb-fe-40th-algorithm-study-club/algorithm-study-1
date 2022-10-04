//11651번 좌표정렬하기2

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();
const coordinate = input.map(ele => ele.split(' ').map(Number));

let sortedCoordinate = coordinate.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } 
    else if (a[1] === b[1]){
    return a[0] - b[0];
    }
});

let result = ''
sortedCoordinate.forEach( ele => { result += `${ele[0]} ${ele[1]}\n` } )

console.log(result)