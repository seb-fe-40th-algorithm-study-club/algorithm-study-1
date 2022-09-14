//runJs

//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
//첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

//const input = '3 3'.split(' ').map(Number);
//console.log(input)
if(input[0] > input[1]) {console.log('>')} 
else if(input[0] < input[1]) {console.log('<')} 
else if(input[0] === input[1]) {console.log('==')} 