//그룹단어 체커
//그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

// let input = `5
// ab
// aa
// aca
// ba
// bb`.toString().trim().split('\n'); 

function check(str){
    let arr = [];
    for(i=0; i < str.length; i++){
        if(arr.includes(str[i])===false){
            arr.push(str[i])
        } else if(arr.includes(str[i]) && (str[i-1]=== str[i])){
            arr.push(str[i])
        }
    }
    if(arr.join('') === str){
        return true
    } 
    return false
}

let count = 0;
for(let j=1; j <= Number(input[0]) ; j++){

    if(check(input[j])){
        count = count+1
        //count++으로 하면 값이 하나 적게 나온다
    }
}

console.log(count)