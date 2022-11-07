//프로그래머스 약수

//런타임에러
// function solution(n) {

//     function getDivisor(number){
//     let arr = []
//     for(let i=1; i <= number; i++){
//         if( number % i === 0){
//             arr.push(i)
//         }
//     }
//     return arr;
//     }

//     let divisors = getDivisor(n);
//     let sum = divisors.reduce((a,b)=>a+b)
//     return sum
// }

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr.reduce((a, b) => a + b, 0);
  //return arr.reduce((a,b)=>a+b)으로 초기값을 안넣으면 시간초과난다
}
