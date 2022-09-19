//평균
//입력1
// 3
// 40 80 60
//출력1
// 75.0;

//입력2
// 3
// 10 20 30
// //출력2
// 66.666667

//1. 점수 중에서 최대값 구하기
//2. 점수/max*100 로 새로운 점수 구하기
//3.새로운 점수의 총합 점수/과목의 개수 리턴

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//['3', '40 80 60']

let num = Number(input[0]); //3
let score = input[1].split(" "); //['40', '80', '60']

let max = Math.max(...score); //80
let sum = 0;

for (let i = 0; i < num; i++) {
  sum = sum + (score[i] / max) * 100;
}

console.log(sum / num);
