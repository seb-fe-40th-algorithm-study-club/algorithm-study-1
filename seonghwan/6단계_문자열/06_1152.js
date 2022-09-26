//문자열을 반복문으로 하나씩 조건 비교
//메모리 적게 사용
const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim()

let preVal = ' ';
let wordCnt = 0;
for(let i=0; i<input.length; i++){
  if(preVal===' ' && input[i]!==' ') wordCnt++; // 그전값이 공백이고 현재값이 공백이 아니면 새로운 단어가 나온것
  preVal = input[i];
}
console.log(wordCnt);



//문자열을 배열로 변환 후 비교
//실행속도 빠름
//빈문자열을 split()하면 ['']가 리턴된다. 조심해야됨
const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split(' ')

let wordCnt=0;
input[0] === '' ? console.log(0) : console.log(input.length)




/**
 * 문제
 * 단어의 개수
 * 
 * 입력
 * The Curious Case of Benjamin Button
 * 
 * 출력
 * 6
 * 
 * 내용
 * 문장에서의 단어 갯수 출력
 */