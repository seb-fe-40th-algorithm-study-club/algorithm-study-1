function solution(x) {
  let sum = x.toString().split('').reduce((acc, cur) => {
    return acc + +cur;
  }, 0);
  return x % sum === 0 ? true : false;
}