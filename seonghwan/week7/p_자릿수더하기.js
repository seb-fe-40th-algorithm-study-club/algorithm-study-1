function solution(n) {
  let N = String(n).split('');
  let sum = N.reduce((acc, cur) => {
    return acc + +cur;
  }, 0)
  return sum;
}