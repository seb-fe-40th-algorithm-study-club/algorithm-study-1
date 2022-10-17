function solution(n)
{
    let arr = String(n).split("");
    return arr.reduce((prev, cur) => +prev + +cur, 0);
}
