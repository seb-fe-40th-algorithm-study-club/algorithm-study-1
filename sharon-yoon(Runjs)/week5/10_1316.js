const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

// abbccb 인경우
// a->b로 바뀔때 bbaccb에서 a가 존재하는지 판단
// 존재하지 않으면 다음 알파벳 b로 넘어가기
// b->c로 바뀔때 ccb에 b가 존재하므로 그룹단어가 아니다
//aabbcc인 경우 
// a->b로 바뀔때 bbcc에 a가 없으므로 다음 알파벳 b로 넘어가기
// b->c로 바뀔때 cc에 b가 없으므로 그룹단어 한개 추가! 

let count = 0; // 중복단어 체크
const num = +input[0]
for(let i =1 ; i<=num; i++) {
    let str = input[i]
    // console.log(str)
    let temp = str[0] // 첫문자 담기
    let result = 1; 
      for(let j = 1; j< str.length; j++) {
            // str[1] 부터~ temp랑 같을땐 continue
            if(temp === str[j]) continue;
            // 같지않으면? 다른 알파벳으로 바뀔때 나머지 단어에 str[0]이 있으면 
            if(str.slice(j).includes(temp)) {
                // 중복단어가 아니므로 0리턴
                result = 0;
                break;
            } else {
                // 중복 단어 없으면
                    // temp에 다시 str[j]넣고 위에서 다시 비교
                temp = str[j] 
            }
          }
        // result 0이면 count x , 1이면 count+1
         if(result) count++
}
console.log(count)
