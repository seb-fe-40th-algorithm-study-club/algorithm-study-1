//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString().split('\n')

// 모든 문자에 \n 줄바꿈을 해서 최종적으로 출력해준다
// 변수에 해당 더한 문자열을 모두 담아주어야 한다
// 메모리 초과
function sumStr(arr1,n1){
    let data = `${arr1[arr1.length-1]}`.split(' ').map(Number)
    if(n1<=1)return `${data[0]+data[1]}`;
    return sumStr(arr1.slice(0,-1),n1-1) + `\n${data[0]+data[1]}`
}
   
console.log(sumStr(input.slice(1),input[0]))

let strSum = ''
for(let i=1; i<=Number(input[0]);i++){
    let data = input[i].split(' ').map(Number)
    let [num1,num2] = data;
    if(i===Number(input[0])){
        strSum = strSum + (num1 + num2)
        break;
    }
    strSum = strSum + (num1 + num2) + '\n'   
}
console.log(strSum)