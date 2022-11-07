function solution(n) {
  let result = [];
  n = n + '';
  for (let i = n.length - 1; i > -1; i--) {
    result.push(Number(n[i]));
  }
  return result;
}