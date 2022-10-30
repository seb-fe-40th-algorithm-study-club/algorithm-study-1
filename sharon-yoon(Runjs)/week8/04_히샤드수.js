// ; 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// ; 예를 들어 18의 자릿수 합은 1+8=9이고, 
// ; 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.

function solution(x) {
    // x % 각 자릿수의 합 === 0
    // 각 자릿수의 합 구하기
    
    // 문자열.split("") -> ["1","0"]
    let arr = (""+x).split("");
    
    // 다시 숫자로 바꿔서 각 자리 수 합
    // x % 각 자릿수의 합 === 0 이면 true 아니면 false 
    return x % arr.reduce((acc,cur)=> +acc+ +cur, 0) ? false : true
}

//다른 사람 풀이
// 한줄코딩 
function Harshad(n){
    // 내 두줄 을 한 줄로.. 
    // !붙여서 n % 합이 0 이면 true 아니면 false 나오도록
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

// 속도 우선 
function solution2(x) {
    let num = x;
    let sum = 0;
    do{
        // 각 자리수 더해주기
        sum += x % 10;
        x = Math.floor(x/10)
    } while (x>0)
    // 나눠서 0이면 true 
    return !(num%sum)
}