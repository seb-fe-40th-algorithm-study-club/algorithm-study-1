const fs = require('fs')
const input = fs.readFileSync(process.platform==='linux'?'dev/stdin' : __filename.split('/').pop().slice(0,-3)+'.txt').toString().trim().split('\n')


// let [a,b] = input;
// a = Number(a)
// let multiple = 1;
// let sum = 0;

// for(let i = b.length; i>0; i--){ // 길이가 0이 되는게 엔드포인트 
//     if(i!==b.length){ // 일의 자리수는 1을 곱해야되고 그 이후엔 10씩 곱해서 배수를 만들어줌
//         multiple = multiple*10;
//     }
//     let result = Number(b.slice(i-1,i))*a //  b의 한자리와 a를 곱한 것 
//     console.log(result); //a랑 곱한 값을 계속 보여줘야함 동작
//     sum = sum + result * multiple // 배ㅅ
// }
// console.log(sum)

// for문 리팩토링
let [a,b] = input;
a =Number(a);
let result = 0;
let count = 0;
for(let i = b.length-1; i>-1; i--){
    console.log(a*Number(b[i]))
    result = result + a*Number(b[i])*(10**count);
    count++
}
console.log(result);
/*

*/
// 최종 결과값은 472*385
// 최종 리턴되는 값은 위에 곱한 결과가 나와야한다
// 하지만 실행 과정은 조금 다르다 .472*5 + 472*8 + 472*3 이 출력되어야 하며,
// 최종 결과값은 곱한 결과*각자리수 를 총 합한 값이 나와야한다 => recursive case
// 일단 단계별로 생각한다. console.log(472*3) => console.log(472*8) => console.log(472*5) 
// 보면 b를 하나씩 차근차근 잘라서 함수를 실행시킨다. => 그 후 b의 자리수가 존재하지 않으면 더이상 함수가 실행되면 안된다 -> basecase
// 우선적으로 단계적으로 다음 실행되는 함수는 b를 자른 배열로 넘겨주고 최종적으로 반환되는 값은 모든 곱의 합이기 떄문에
// return Number(a)*Number(b[0])*multiple+recursive(a,b.slice(1));

// let [a,b] = input
// b = b.split('').reverse().join('') // 문자열을 단어별 배열로 나누고, 역순으로 변경한뒤 join으로 합쳐줌
// let count = 0;

// function recursive(a,b){
//     // 계산을 위한 수들을 계산
//     // 중요한 것은 출력은 1의 자리수부터 차례되로 진행되야됨 
//     let multiple10 = 10**(count)
//     count++;
//     console.log(a*Number(b[0])) // 역순으로 바꿔서 1의 자리수부터 곱한값을 표현
//     if(b.length ===1) return a*Number(b[0])*(multiple10);
//     return Number(a)*Number(b[0])*multiple10+ recursive(a,b.slice(1)); // 전달
// }
// console.log(recursive(a,b))
