//입력유형: 첫번째 줄에 테스트케이스의 총갯수, 두번째 줄부터는 각 줄에 2개의 입력값
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = ''
for(let i=1; i<= Number(input[0]); i++){
    answer += Number(input[i].split(" ")[0])+Number(input[i].split(" ")[1])+ '\n'
};
console.log(answer)
