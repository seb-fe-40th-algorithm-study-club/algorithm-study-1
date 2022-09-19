const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

function getScore(str){
    let scores = [];
    if(str[0] === 'O'){
        scores.push(1)
    } else {
        scores.push(0)
    }

    for(let i=1; i< str.length; i++){
        if(str[i] === 'O'){
            if(str[i-1] === 'O'){
                scores.push(scores[i-1]+1)
            } else {
                scores.push(1)
            }
        }

        if(str[i] === 'X'){
            scores.push(0)
        }
    }
    return scores.reduce((a,b) => a+b)
}

for(let j=1; j <= Number(input[0]); j++){
    console.log(getScore(input[j]))
}

//풀긴 했는데...너무 복잡하게 푼 것 같다. 훨씬 간단한 풀이가 많다ㅠㅠ