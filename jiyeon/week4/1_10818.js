// 최소, 최대;

// 입력;
// 5
// 20 10 35 30 7

// 출력
// 7 35

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//input = ['5', '20 10 35 30 7']

let count = Number(input[0]); //5
let numbers = input[1].split(" ").map((x) => Number(x)); //[20, 10, 35, 30, 7];

numbers.sort((a, b) => a - b); //[7, 10, 20, 30, 35]
//*** numbers.sort(); 는  [10, 20, 30, 35, 7] 출력되기 때문에 ((a,b) => a-b) 배열을 오름차순으로 정리

console.log(`${numbers[0]} ${numbers[count - 1]}`); //7 35
