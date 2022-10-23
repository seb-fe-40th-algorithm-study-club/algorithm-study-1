function solution(arr) {
  let newArr = arr.slice(0);
  let sum = newArr.reduce((acc, cur)=>{
      return acc+cur;
  },0);
  return sum / newArr.length;
}