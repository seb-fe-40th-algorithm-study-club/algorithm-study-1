/*문제;
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
입력 A
출력 65

자바스크립트에서 문자를 아스키코드로 변환하고 싶을 때
charCodeAt()와 codePointAt()
*/
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input.charCodeAt());
