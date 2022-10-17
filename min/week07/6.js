function solution(n) {
    
    function getDivisor(number){
    let arr = []
    for(let i=1; i <= number; i++){
        if( number % i === 0){
            arr.push(i)
        }
    }
    return arr;
    }
    
    let divisors = getDivisor(n);
    let sum = divisors.reduce((a,b)=>a+b)
    return sum
}