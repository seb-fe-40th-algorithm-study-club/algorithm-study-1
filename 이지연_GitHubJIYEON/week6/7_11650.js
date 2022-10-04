/*
입력
5
3 4
1 1
1 -1
2 2
3 3
출력
1 -1
1 1
2 2
3 3
3 4
*/

let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const totalnum = Number(input.shift());

let arr = [];

// 2차원 배열 생성하기
for (let i = 0; i < iter; i++) {
  // input[i]를 하나의 배열로 만든 뒤, arr 배열에 push.
  arr.push(input[i].split(" ").map((item) => Number(item)));
}

// 2차원 배열에서의 오름차순 정렬 구현
// 기존 1차원 배열에서 쓰던 것에 []를 붙여서 사용한다고 생각하면 이해가 매우 쉽다.
arr.sort((a, b) => {
  // arr[0][0]과 arr[1][0], arr[1][0]과 arr[2][0]...이런 식으로 생각하면 된다.
  if (a[0] === b[0]) {
    // 여기서는 arr[0][1]과 arr[1][1]...이렇게 될 것이다.
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let ans = [];

for (let i = 0; i < iter; i++) {
  let answer = arr[i].join(" ");
  ans.push(answer);
}

console.log(ans.join("\n"));

//참고 https://velog.io/@rkio/%EB%B0%B1%EC%A4%80-Javascript-11650
