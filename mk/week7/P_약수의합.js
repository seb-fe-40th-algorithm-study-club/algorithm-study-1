function solution(n) {
  // n에 약수가 존재한다면 해당 수는 n의 제곱근 보다 작다
  // for문을 n의 제곱근 까지만 나눠주면 된다.
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}
