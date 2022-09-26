//단어의 개수

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

