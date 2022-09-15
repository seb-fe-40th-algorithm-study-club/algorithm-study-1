//vscode
// 입력이 존재하지 않음
// d(n)함수는 n과 n의 자릿수를 더하는 함수
// 10으로 나눈 나머지가 자릿수가 된다. 해당 수를 계속 잘라줘야된다 그리고 원본과 더해야한다
// 100 % 10 = 0 => 10%10 = 0, 1%10 = 1 0+0+1+10
function d(n) {
  let result = 0, // 자릿수의 합을 넣어줄 것이다
    num = n;
  for (let i = 0; i < String(n).length; i++) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result + n;
}
// 10000까지 비교하기 위해 false인 배열을 만들고 10000의 인덱스를 순회하면서
// d(n)에 리턴되는 수를 10000개 배열의 인덱스로 잡고 해당 인덱스를 false 만들어준다
// 그러면 셀프넘버가 아닌 수만 true로 남게 된다
let arr = Array(10001).fill(true);
for (let i = 0; i <= 10000; i++) {
  arr[d(i)] = false;
}

for (let i = 0; i < 10000; i++) {
  if (arr[i]) console.log(i);
}
