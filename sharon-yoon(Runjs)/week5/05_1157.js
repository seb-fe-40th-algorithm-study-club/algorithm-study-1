const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().split('\n');

// 첫째줄에 가장 많이 사용된 알파벳을 대문자로 출력 
// 가장 많이 사용된 알파벳이 여러개인 경우는 ?

solution(input[0])

function solution(str) {
    let newStr = str.toLowerCase();
    let obj = {}
   

    for(let i =0; i< newStr.length; i++) {
       
        // obj에 key값으로 newStr[i] , value로 반복횟수 
            if(obj[newStr[i]] === undefined) {
               // 없으면 obj에 char : 1 생성
                obj[newStr[i]] = 1; 
            } else {
                // 있으면 1 증가
               obj[newStr[i]] += 1;

            }
         }
         let max = '';
         let count = 0;
         for(let key in obj) {
            // obj의 key 반복문 
            if(count < obj[key]){
                // obj[key] 가 더 크면 바꿔주기
                count = obj[key]
                // max에 key 담기
                max = key.toUpperCase();
            } else if (count === obj[key]){
            // 반복되는 갯수가 여러개인 경우
               max = "?"
            }
        }
        console.log(max)

}


