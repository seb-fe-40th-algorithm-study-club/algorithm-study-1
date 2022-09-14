//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString().split(' ')

//n 입력수 만큼 별이 중첩되어 출력된다
// 두가지의 경우의 수가 존재해야한다
// 공백을 컨트롤할 i, 별을 컨트롤 할 j -> 하나의 수로 컨트롤하기엔 머리 연산이 안된다
let count = input[0]
for(let i =1; i<=count; i++){
    let sum = ''
    for(let j=0; j<count-i; j++){
        sum = sum + ' '
    }
    for(let k=0; k<i; k++){ // 점점 늘어나는 수 경계가 1->2->3->4->5->
        sum = sum + '*'
    }
    console.log(sum);
}

//예전에 작성한 코드;; 이게 더 짧네;;;
function solution(num){
    let star = '';
    let spc = '';
    for(let i=0; i<N; i++){
        star = star+'*';
        for(let j=1; j<N-i;j++){
            spc = spc+' ';
        }
        console.log(spc+star);
        spc = '';
    }
   
}
