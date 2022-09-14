//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" )
.toString().split('\n')

// for문이 중지되는 시점은 두 수가 모두 0일때다
// 입력은 줄바꿈 개수이며, 출력은 해당 줄바꿈 개수만큼 출력된다
// 입력된 '1 2'의 데이터를 먼저 정제해준 후 배열을 순회하여 값을 리턴한다.
for(let i =0; i<input.length; i++){
    let data = input[i].split(' ').map(Number);
    let [num1,num2] = data;
    if(num1===0&&num2===0)break;
    console.log(num1+num2)
}

//줄바꿈으로 들어온다 재귀 구현
function stopSum(arr){
    let data = arr[0].split(' ').map(Number)
    let [num1,num2] = data
    if(num1===0&&num2===0)return ''
    console.log(num1+num2)
    return stopSum(arr.slice(1))
}
stopSum(input)

//줄바꿈으로 들어온다 재귀 구현, 해당문은 data를 정제해주고 먼저 console을 찍어주기 떄문에 0이 들어왔을 때 재귀는 종료되지만
//0이 리턴되서 문제와는 맞지 않다.
function stopSum1(arr){
    let data = arr[0].split(' ').map(Number)
    let [num1,num2] = data
    console.log(num1+num2)
    return num1===0&&num2===0?'':stopSum1(arr.slice(1))
}
stopSum1(input)