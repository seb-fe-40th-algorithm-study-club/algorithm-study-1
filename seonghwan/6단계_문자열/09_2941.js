//replace사용
const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim();
const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let el of alphabet) {
  do { //알파벳이 포함안되어있을때까지 반복해서 체크
    const idx = input.indexOf(el);
    if (idx !== -1) { //알파벳이 포함되어 있으면 replace로 대체
      input = input.replace(el, '.');
    } else {
      break;
    }
  } while (true)
}

console.log(input.length);


//replaceAll로 한번에 대체
const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim();
const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let el of alphabet) {
  input = input.replaceAll(el, '.');
}

console.log(input.length);

/**
 * 문제
 * 크로아티아 알파벳 
 * 
 * 입력
 * ljes=njak
 * 
 * 출력
 * 6
 * 
 * 내용
 * 몇개의 크로아티아 알파벳으로 이루어져있는지를 확인
 */