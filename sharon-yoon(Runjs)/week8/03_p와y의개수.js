//대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 내 풀이
function solution(s){
    // 소문자로 
    let lower = s.toLowerCase()

    let cnt1 = 0;
    let cnt2 = 0; 

    for(let el of lower) {
        if(el === 'p') cnt1++
        if(el === 'y') cnt2++
    }
    
    // 같거나 둘다 0 이면 true
    return cnt1 === cnt2 || (cnt1 === 0 && cnt2 === 0) ? true : false  
  

}

//다른 사람 풀이

function numPY(s){
  //함수를 완성하세요
  // "PPOOOYY" -> split("P")하면 ->  ["", "", "OOOYY"]
  //"PPOOOYY" -> split("Y")하면 ->   ['PPOOO', '', '']
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

function solution2(s) {
    return [...s.toLowerCase()].reduce((acc,cur) => {
        if(cur === 'p') return acc + 1;
        else if(cur === 'y') return acc -1;
        return acc
    }, 0) ? false : true 
    // acc가 0이면 true 
}