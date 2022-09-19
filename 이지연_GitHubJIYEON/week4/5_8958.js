//OX문제
//입력
// 5;
// OOXXOXXOOO;
// OOXXOOXXOO;
// OXOXOXOXOXOXOX;
// OOOOOOOOOO;
// OOOOXOOOOXOOOOX;
//출력
// 10;
// 9;
// 7;
// 55;
// 30;
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; num[i].length; j++) {
    if (input[i][j] === 0) {
      count++;
    } else {
      count = 0;
    }
    sum = sum + count;
  }
  console.log(sum);
}
