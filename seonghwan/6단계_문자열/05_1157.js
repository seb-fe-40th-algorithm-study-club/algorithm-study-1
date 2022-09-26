const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim();
input = input.toUpperCase(); //소문자로 일괄 변경

let mostAlphabetCnt = 0;
let mostAlphabet = '';
const obj = { //가장 많이 사용되는 문자와 반복횟수 변수 선언

};

for(let el of input){ //각 알파벳의 횟수 할당
  obj[el] = (obj[el] || 0) + 1; //해당 키가 없으면 1, 존재하면 +1
}
let repeatCnt =0 ;

for(let alphabet in obj){ //가장 많이 사용되는 문자가 무엇인지 판별
  obj[alphabet] > mostAlphabetCnt ? ( mostAlphabetCnt = obj[alphabet], mostAlphabet = alphabet ) : null; //
}

for(let el in obj){//가장 많이 사용되는 문자횟수 중복 여부 판별
  if(obj[el] === mostAlphabetCnt) repeatCnt++;
}

repeatCnt>1 ? console.log('?') : console.log(mostAlphabet);




/**
 * 문제
 * 단어 공부
 * 
 * 입력
 * Mississipi
 * 
 * 출력
 * ?
 * 
 * 내용
 * 단어에서 가장 많이 사용된 알파벳을 대문자로 출력
 * 가장 많이 사용된 알파벳이 여러개일때 ?를 출력
 */