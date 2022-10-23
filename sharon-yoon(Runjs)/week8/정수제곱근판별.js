function solution(n) {
    // n이 어떤 양의 정수 x의 제곱인지 판단
    // 맞다면 x+1의 제곱을 리턴, 아니라면 -1을 리턴하라
    
    // n의 제곱근이 정수여야 어떤 정수의 제곱일 수 있다. 
    // 나머지가 없는 경우는 (정수인 경우) 제곱근 % 1 === 0 으로 판단 
    // Math.sqrt(n) 제곱근 한 값에 +1 해주고 제곱해줄것! .
    
   return Math.sqrt(n) % 1 === 0 ?  
        Math.pow(Math.sqrt(n)+1,2) : -1

}

// 다른사람 코딩
// Number.isIntegar 함수는 해당 숫자가 정수면 true 아니면 false를 반환
// Number.isIntegar 알아두자! 

function nextSqaure(n){
    var result = 0;
    var n = Math.sqrt(n);
    result = Number.isInteger(n) ? Math.pow(n+1, 2) : -1;
    return result;
}
