const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n')

const totalNum = input[0];
const restInput = input.slice(1);

for(let input of restInput){
  const [repeatNum, str] = input.split(' '); 
  let result = '';

  for(let el of str){
    result += el.repeat(+repeatNum); // 반복 횟수 만큼 각 글자를 반복해서 result에 담아준다
  }
  console.log(result); // 하나의 입력 케이스 출력
}



/**
 * 문제
 * 문자열 반복
 * 
 * 입력
 * 2
 * 3 ABC
 * 5 /HTP
 * 
 * 출력
 * AAABBBCCC
 * /////HHHHHTTTTTPPPPP
 * 
 * 내용
 * 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력
 */