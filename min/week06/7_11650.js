//11650번 좌표정렬하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//const input = ['7', '1 -1', '3 3', '1 -2', '1 1', '3 -2', '-2 1', '-3 1'];
const N = input.shift();
const coordinate = input.map(ele => ele.split(' ').map(Number));

let sortedCoordinate = coordinate.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } 
    else if (a[0] === b[0]){
    return a[1] - b[1];
    }
});

let result = ''
sortedCoordinate.forEach( ele => { result += `${ele[0]} ${ele[1]}\n` } )

console.log(result)