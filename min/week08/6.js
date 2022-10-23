//프로그래머스 문자열 내 p와 y의 개수

//실패..테스트가 1개는 맞고 1개는 틀린다...??
function solution(s){
    let numberOfP = 0
    let numberOfY = 0
    let arr = s.toUpperCase().split('')
    
    while(arr.length > 0){
        if(arr.pop() === "P"){
            numberOfP++
        } else if(arr.pop() === "Y"){
             numberOfY++
        }
    }
    
    if(numberOfP === 0 && numberOfY === 0){
        return true
    } else if(numberOfP === numberOfY){
        return true
    } else if(numberOfP !== numberOfY){
        return false
    }
    
}

//런타임 에러
function solution(s){
    let numberOfP = s.toUpperCase().match(/P/gm).length;
    let numberOfY = s.toUpperCase().match(/Y/gm).length;
    
    if(numberOfP === numberOfY){
        return true;
    } else {
        return false;
    }
    
}

//런타임에러
function solution(s){
    let numberOfP = s.match(/P|p/gm);
    let numberOfY = s.match(/Y|y/gm);
    
    if(numberOfP.length === numberOfY.length){
        return true;
    } else {
        return false;
    }
    
}