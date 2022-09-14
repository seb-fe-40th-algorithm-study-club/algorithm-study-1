//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString().split(' ')

//n 입력수 만큼 별이 중첩되어 출력된다
let sum = ''
let counter =Number(input[0]);
while(counter>0){
    sum = sum +'*'
    counter-=1;
    console.log(sum)
}
// 재귀 구현
let starSum = ''
function recursiveStar(n){
    if(n===0)return
    starSum = starSum +'*'
    console.log(starSum)
    return recursiveStar(n-1)
}

recursiveStar(Number(input[0]))