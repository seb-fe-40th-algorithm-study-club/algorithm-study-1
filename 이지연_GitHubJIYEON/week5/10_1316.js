//참고 답안

const readFileSyncAddress = "/dev/stdin";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 문제 풀이
function solution(input) {
  [n, ...list] = input;
  let isNotAnswer = 0;

  for (let i = 0; i < n; i++) {
    let item = list[i].trim();
    let checker = new Array(26).fill(0);
    for (let j = 0; j < item.length - 1; j++) {
      const current = item[j];
      const next = item[j + 1];

      // 같으면 그냥 넘어감
      if (current === next) continue;
      // 다를 때
      else {
        // next가 checker에 이미 등록되어 있으면
        if (checker[next.charCodeAt(0) - 97]) {
          isNotAnswer += 1;
          break;
        }

        checker[current.charCodeAt(0) - 97] += 1;
      }
    }
  }

  return n - isNotAnswer;
}

// 제출
console.log(solution(input));
