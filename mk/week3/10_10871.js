//vsCode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" )
.toString().split('\n')

// 배열을 순회, 두번째로 들어온 값보다 작으면 배열에 담아서 리턴
// 각각의 값을 비교하여 짧으면 배열에 담는다
let [input2,numbers] = input;
input2 = input2.split(' ').map(Number)
numbers = numbers.split(' ').map(Number)
let result = []
for(let i=0; i<input2[0]; i++){
    if(numbers[i]<input2[1])result.push(numbers[i])
}
console.log(result.join(' '))
// 재귀 구현 완료  => 만약에 num보다 작지 않은 수일 경우엔 빈 배열과 리턴된 배열과 합치게 된다 => []+[]하면
// []이기 때문에 동작이 되는 것. 풀고나서 다시 확인했다,,,
function smallN(arr,count,num){
    let result = [];
    if(count===0)return [];
    if(arr[0]<num)result.push(arr[0])
    result = result.concat(smallN(arr.slice(1),count-1,num))
    return result
}
console.log(smallN(numbers,input2[0],input2[1]).join(' '))

//이번 문제는 정렬해서 출력하는 것이 아니기 떄문에 적절하지 않음
function smallSortN(arr,count,num){
    let sortArr = arr.sort((a,b)=>a-b)
    if(arr[0]>=num)return []; //정렬한 배열이기 떄문에 해당 숫자보다 크다면? 해당 for문을 중지
    return [arr[0]].concat(smallSortN(arr.slice(1),input-1,num))
}
console.log(smallSortN(numbers,input2[0],input2[1]))