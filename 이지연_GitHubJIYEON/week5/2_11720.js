문제: N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
입력;
1
1
출력;
1
입력2;
5
54321
출력2;
15

//풀이1 for문
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0])
let nums = input[1].split("")

let result = 0

for(let i = 0; i < count; i++) {
    result += Number(nums[i])
}
console.log(result)

//풀이2 .reduce( (acc누산기, cur현재값, inx인덱스, src원본배열) => , initialValue초기값 )
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let nums = input[1].split('');

let sum = nums.reduce((acc, cur) => {
    return acc = acc + cur*1
}, 0);

console.log(sum)