let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" "); //['734', '893']

function newNum(num){
    return Number(num[2]+num[1]+num[0])
}

if(newNum(input[0]) > newNum(input[1])){
    console.log(newNum(input[0]));
} else {
    console.log(newNum(input[1]));
}