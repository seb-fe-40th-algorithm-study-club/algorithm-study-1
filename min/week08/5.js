//프로그래머스 정수 제곱근 판별

//Math.sqrt(n)은 n의 제곱근
function solution(n) {
    //정수 판별: 1로 나눈 나머지가 0이면 됨
    if(Math.sqrt(n) % 1 === 0){
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)
    } else {
        return -1
    }
}