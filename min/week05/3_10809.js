//알파벳 찾기

//풀이1

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let result = [];
//indexOf는 배열 안에 찾는 문자가 없으면 -1을 반환함
//input 배열에서 a~z까지 찾아보고 없으면 -1을 있으면 인덱스 번호를 반환
for(let i=0; i < alphabet.length; i++){   
  result.push(input.indexOf(alphabet[i]))
}

console.log(result.join(' '));

//풀이2
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

//위처럼 a~z를 나열하면, 오타로 인해 답이 계속 틀릴 수 있음 -> 아스키코드 활용
let result = [];
for(let i=97; i <= 122 ; i++){   
  result.push(input.indexOf(alphabet[i]))
}

console.log(result.join(' '));