const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

let T = input[0]

let result = 0;
let count = 0


for(let i = 1; i<=T ; i++){
    // i = 1부터 T 개수와 작거나 같을때 까지 
    let arr = input[i].split('')

    for(let j =0; j<arr.length; j++) {
        // arr 중에 O 가 있으면 
        if(arr[j] === 'O') {
            result = result + 1 + count
            count+=1
        } 
        //arr가 X면 count 다시 0 으로만들어주기
        else  {count = 0;}
     }   
    console.log(result)
    // 초기화
    result = 0 
    count = 0
}





