//상수
//상수는 수를 다른 사람과 다르게 거꾸로 읽는다.
//상수가 읽은 큰 수는?

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