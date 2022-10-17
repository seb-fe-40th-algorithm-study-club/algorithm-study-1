function solution(n) {
  //풀이 3
  // return String(n).length===0? 0 : Number(String(n)[0])+solution(String(n).slice(1))

  // 풀이 2
  // let result = String(n)
  // if(result.length===0)return 0
  // return Number(result[0])+solution(result.slice(1))

  // 풀이 1
  return (n + "").split("").reduce((acc, cur) => +acc + +cur, 0);
}
