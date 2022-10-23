//프로그래머스 자연수 뒤집어 배열로 만들기

function solution(n) {
    return (n + '').split('').reverse().map(Number);
    //return Array.from(String(n)).reverse().map(Number);
}