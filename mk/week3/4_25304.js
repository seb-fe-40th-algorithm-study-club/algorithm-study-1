//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString().split('\n')
// 인풋으로 주어진 값을 사용하지 않으면 오답 처리됨 
// 3번째 인자 대신에 arr 길이로만 비교해도 정답이 나옴
// 배열의 인자로 [총금액,물건 개수, 물건1 개수 가격,물건2 개수 가격] 이 들어온다
// 이떄 가격과 개수를 곱해서 모든 더한값이 price가 되어야한다. 반대로 생각해보면
// price와 가격*개수를 뺸 값이 0이 되어야한다
// 배열의 요소 하나하나씩을 탐색한다. 0번 배열을 검사했으면 나머지 배열과 price를 뺀 값을 인자로 전달한다.
function cart(arr,price,buyItem){
    if(buyItem<=0)return price===0? 'Yes' : "No" 
    let data = `${arr[0]}`.split(' ').map(Number)
    return cart(arr.slice(1),price-(data[0]*data[1]),buyItem-1)
}   
console.log(cart(input.slice(2),input[0],Number(input[1])))