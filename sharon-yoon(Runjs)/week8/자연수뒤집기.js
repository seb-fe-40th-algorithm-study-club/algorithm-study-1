//자연수 뒤집어 배열로 만들기

// 12345 -> [5,4,3,2,1]

function solution(n) {
    // 숫자를 일단 문자열로 만들어야 split으로 배열로 만들 수 있다.
    // console.log((""+n).split('').reverse()) -> ['5','4'~]
    // .map(el => +el) -> 배열에 문자열을 숫자로 바꾸기 
    return (""+n).split('').reverse().map(el => +el)
}


// 다른사람 풀이

function solution2(n) {

  // 숫자풀이
  // 먼저 빈배열 선언하고 
 // 12345 -> [5,4,3,2,1]

  let arr = [];
// 첫 값에 arr에 n%10g해서 마지막 숫자인 5를 배열에 먼저 넣기..
// 그리고 n/10해서 5를 없애기 (n = 1234)  arr = [5]
  do {
      arr.push(n%10);
      n = Math.floor(n/10);
  } while (n>0);  // n이 0보다 클때까지 반복 

  return arr;
}