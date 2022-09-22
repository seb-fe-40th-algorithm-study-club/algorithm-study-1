/*문제
알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 
단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 
포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
입력
baekjoon
출력
1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
*/
//아스키코드 (a는 97이고 z는 122이다.)
// - 자바스크립트 fromCharCode 사용방법 (아스키코드를 문자열로 변환)
//   String.fromCharCode(아스키코드값);
//indexOf 메서드

let input = require("fs").readFileSync("/dev/stdin").toString();

let result = [];

for (let i = 97; i <= 122; i++) {
  let alpha = String.fromCharCode(i); //아스키코드를 문자열로 변환
  let answer = input.indexOf(alpha);

  result += answer + " ";
}
console.log(result);
