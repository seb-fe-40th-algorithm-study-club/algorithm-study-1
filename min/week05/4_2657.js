//문자열 반복
//2675번

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
//['2', '3 ABC', '5 /HTP']

//let inputCase = input[1].split(' ') //['3', 'ABC']

//배열을 넣으면 문자를 반복해주는 함수
function repetitionMaker(inputCase){
    let repetition = ''
    //2. 바깥쪽 반복문은 입력값의 길이만큼 반복 AAABBBCCC
    for(let j=0; j < inputCase[1].length ; j++){
        //1. 안쪽 반복문은 입력값 문자 하나의 반복 AAA
        for(let i=0; i < inputCase[0]; i++){
            repetition += inputCase[1][j];
        }
    }
    return repetition
}

for(let k=1; k < input.length; k++){
    let inputCase = input[k].split(' ')
    console.log(repetitionMaker(inputCase))
}
