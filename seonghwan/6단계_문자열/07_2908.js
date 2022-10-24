const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim().split(' ')

//reverse()는 배열에만 쓸수있네
const reverseInput = input.map((el) => {
  return +(el.split('').reverse().join(''));
});

reverseInput[0] > reverseInput[1] ? console.log(reverseInput[0]) : console.log(reverseInput[1]);


/**
 * 문제
 * 상수
 * 
 * 입력
 * 734 893
 * 
 * 출력
 * 437
 * 
 * 내용
 * 반전 시킨 숫자 기준 대소 비교(큰수) 후 출력
 */
