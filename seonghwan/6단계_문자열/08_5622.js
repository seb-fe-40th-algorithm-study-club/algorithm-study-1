const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim().split('');

function getTimeFromChar(str){
  const charLists = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  return 3+ charLists.findIndex((charList)=>{ //숫자1은 2초걸림. 숫자2는 3초걸림. 찾은 인덱스값 + 3 => 걸리는시간
    return charList.includes(str);
  });
}

const totalTime = input.reduce((acc, cur)=>{
  return acc + getTimeFromChar(cur);
},0);

console.log(totalTime);


/**
 * 문제
 * 다이얼
 * 
 * 입력
 * WA
 * 
 * 출력
 * 13
 * 
 * 내용
 * 첫째 줄에 다이얼을 걸기 위해서 필요한 최소 시간을 출력한다.
 */