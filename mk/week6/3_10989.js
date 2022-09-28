//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = input.shift();
const arr = [...input];
console.log(N, input);
function quicksort(arr) {
  // 카운팅 정렬(배열의 범위가 작을 때 유리)
  // 배열을 반복문으로 돌며 원소의 갯수를 카운팅한다?
  // 카운팅을 위해 원소 중에 가장 큰수 +1의 배열을 만들어서 0으로 채워준다
  // 정렬해야 할 수들을 반복문으로 돌면서, 정렬해야 할 수를 array의 인덱스로 넣어서 증가시켜주면 된다?
  let empty = new Array(Math.max(...arr) + 1).fill(0);
  // arr [7,2,5,4,1,6]  empty = [0,0,0,0,0,0,0,0,0]
  for (let i = 0; i < N; i++) {
    // arr의 수
    // empty = [0,1,1,0,1,1,1,0,1] 해당 수가 존재할 때 해당 수의 인덱스 번호를 ++ 해준다
    empty[arr[i]]++;
  }
  let str = "";
  for (let i = 0; i < empty.length; i++) {
    if (empty[i]) {
      // 해당 수가 존재한다면? empty의 인덱스 값은 등장하는 숫자를 의미 인덱스 값은 등장하는 횟수를 의미
      for (let j = 0; j < empty[i]; j++) {
        str = str + i + "\n";
      }
    }
  }
  return str.slice(0, str.length - 1);
}
console.log(quicksort(input));
