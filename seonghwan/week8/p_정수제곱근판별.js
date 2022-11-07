function solution(n) {
  let result;
  let root = Math.sqrt(n);
  return result = root % 1 === 0 ? (root + 1) ** 2 : -1;
}