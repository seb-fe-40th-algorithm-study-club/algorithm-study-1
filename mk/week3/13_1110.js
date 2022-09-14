//vsCode
// 백준 테스트에서 마지막 인풋이 줄바꿈 공백으로 있는 것 같음. 반복문 경계조건의 수정 필요
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" )
.toString().split(' ')

// 10보다 작으면 0을 붙여서 두자리수를 만들것
// input 26이라면? => 변수1(2+6)을 하고 6을 십의자리 8을 일의 자리로 옮긴다 => 68과 26을 비교한다
// 아니라면 다시 또 6+8을 더하고 8을 십의자리로, 14의 일의자리를 84로 
let count = 0;
let num = Number(input[0]) //초기 인풋값
let sum = 0;  
while(true){
    sum = num%10+Math.floor(num/10);  //1=> 1+0 sum = 1
    num = (num%10)*10+sum%10 // num%10*10은 일의 자리숫자를 십의 자리 숫자로 만들어주 준것, sum%10은 그대로 1의 자리 수로
    count++
    if(num===Number(input[0])){
        break;
    }
}
console.log(count)

