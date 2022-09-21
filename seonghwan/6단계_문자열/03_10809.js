const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim()

const startCode = 'a'.charCodeAt();
const endCode = 'z'.charCodeAt();

for(let i=startCode; i<=endCode; i++){
  console.log(input.indexOf( String.fromCharCode(i) ));
}


//아스키코드 소문자 영문 97~122까지
//a~z까지 순차적으로 해당 문자열에서 검색
//i 숫자를 아스키코드에 해당하는 문자로 변환 후 -> 입력받은 문자열에서 인덱스를 찾는다.


/**
 * 문제
 * 알파벳 찾기
 * 
 * 입력
 * baekjoon
 * 
 * 
 * 출력
 * 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
 * 
 * 내용
 * 단어의 각 알파벳에 대해 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력
 */