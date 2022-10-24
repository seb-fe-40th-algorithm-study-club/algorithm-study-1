//프로그래머스 하샤드 수


function solution(x) {
    let sum = String(x).split('').map(Number).reduce((a,b)=> a+b);
    if(x % sum === 0){
        return true;
    } 
    return false;
}