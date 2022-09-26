//그룹단어 체커

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
    }
}

console.log(count)