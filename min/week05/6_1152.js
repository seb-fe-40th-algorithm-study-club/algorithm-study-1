//단어의 개수
//영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어

const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

//문장을 공백을 기준으로 나눈 배열로 만든다.
let wordArr = str.split(" ");
//배열의 갯수 = 단어의 수
let result = wordArr.length;

//입력값이 공백일 경우 -> 단어의 수는 0개
if(wordArr[0] === ''){
    console.log(0); 
} else {
    console.log(result);
}

