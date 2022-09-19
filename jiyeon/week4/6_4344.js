//평균은 넘겠지
// //입력
// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91
// //출력
// 40.000%
// 57.143%
// 33.333%
// 66.667%
// 55.556%
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let allCases = Number(input[0]);

for (let i = 1; i <= allCases; i++) {
  let cases = input[i].split(" ");
  let scoreCaseCount = Number(cases[0]);
  let sum = 0;

  for (let j = 1; j <= scoreCaseCount; j++) {
    sum += Number(cases[j]);
  }
  let reverage = sum / scoreCaseCount;

  let highScoreStudent = 0;
  for (let k = 1; k <= scoreCaseCount; k++) {
    if (reverage < cases[k]) {
      highScoreStudent++;
    }
  }

  result = ((highScoreStudent / scoreCaseCount) * 100).toFixed(3);
  console.log(result + "%");
}
