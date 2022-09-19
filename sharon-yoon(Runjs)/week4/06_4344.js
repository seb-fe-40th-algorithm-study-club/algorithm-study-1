const fs = require("fs");

const input = require('fs').readFileSync('예제.txt').toString().split('\n')

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

// 답은 나오는데 계속 실패 뜬다

let T = Number(input[0])
let result = 0;

for(let i = 1; i<=T ; i++){
    // 한줄씩 arr로 받아오기 
    let arr = input[i].split(' ').map(Number)
    result = 0;

    for(let j =1; j<=arr[0]; j++) {
        // j+1부터 점수 시작 ~ 
        result += arr[j]
     }   

   // 평균 넘는 사람들 filter로 재정비 
let uniqueArr = arr.filter(el => el > result/ arr[0])
let el = (uniqueArr.length / arr[0] * 100).toFixed(3)
// 숫자.toFixed(3) 3번째 자리수까지 나오고 반올림
    console.log(el + '%' )
 
}





