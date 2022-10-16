

function solution(n)
{
    // 내 풀이
    // n의 각 자릿수의 합을 리턴 
    // 각 자릿수 합이니까 일단 문자열-> 배열로 한 자릿수씩 뜯어서담기
    let str = "" + n
    let arr = [...str]
        
    let result = 0 ;
    // 배열 돌면서 el number로 바꿔주면서 더해주기 
    for(let el of arr) {
        result += +el
    }
  return result
   
}

function solution2(n) {
     // 한줄 코딩
    return (n+"").split("").reduce((acc,cur)=>acc+parseInt(cur),0)
    // n+"" -> '123'.split("") -> ['1','2','3'] -> parseInt로 숫자로 만들어서 더해주기 
}
