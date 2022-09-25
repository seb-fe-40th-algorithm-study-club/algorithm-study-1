/* 문제
문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

입력
2
3 ABC
5 /HTP

출력
AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//['2', '3 ABC', '5 /HTP']

let count = Number(input[0]); //2
let result = "";

for (let i = 1; i <= count; i++) {
  let newCount = Number(input[i].split(" ")[0]); //문자를 input[i][0]번째 만큼 반복
  let cases = input[i].split(" ")[1]; // 각 문자열 분리

  for (let j = 0; j < cases.length; j++) {
    for (let k = 0; k < newCount; k++) {
      result += cases[j];
    }
  }
  result += "\n";
}
console.log(result);

/* 다른 풀이 
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let answer = '';
    
    const [num2, str] = input[i].split(" ");
    
    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < num2; c++) {
            answer += str[j];
  	}
    }
    
    console.log(answer);
}
*/
