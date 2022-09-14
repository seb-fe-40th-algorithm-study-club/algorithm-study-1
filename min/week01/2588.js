//곱셈

const fs = require("fs")

//입력값
472
385

//입력값을 배열로 바꾸기
`472
385`.trim().split('\n')

//시작
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

console.log(input)

//input = ['472', '385']


//3번
console.log(parseInt(input[0] * input[1][2]))
//4번
console.log(parseInt(input[0] * input[1][1]))
//5번
console.log(parseInt(input[0] * input[1][0]))
//6번
console.log(parseInt(input[0] * input[1]))