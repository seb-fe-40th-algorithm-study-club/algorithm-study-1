//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString().split('\n')

for(let i=1; i<=input[0]; i++){
    let data = input[i].split(' ').map(Number)
    console.log(`Case #${i}: ${data[0]+data[1]}`)
}
// 재귀 구현
function sumStr(arr1,n1){
    let data = `${arr1[0]}`.split(' ').map(Number)
    if(n1>Number(input[0]))return '';
    console.log(`Case #${n1}: ${data[0]+data[1]}`)
    return sumStr(arr1.slice(1),n1+1)
}
console.log(sumStr(input.slice(1),1))


// 모든 문자에 \n 줄바꿈을 해서 최종적으로 출력해준다
// 변수에 해당 더한 문자열을 모두 담아주어야 한다
// 메모리 초과
// function sumStr(arr1,n1){
//     let data = `${arr1[arr1.length-1]}`.split(' ').map(Number)    
//     if(n1<=1)return `Case #${n1}: ${data[0]} + ${data[1]} = ${data[0]+data[1]}`;
//     return sumStr(arr1.slice(0,-1),n1-1) + `\nCase #${n1}: ${data[0]} + ${data[1]} = ${data[0]+data[1]}`
// }
   
