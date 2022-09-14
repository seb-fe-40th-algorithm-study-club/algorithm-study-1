//vscode
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.split('\n')

//데이터 정제 data => [[1,2],[2,3],[3,4]]
const data = []
for(let i =1; i<=input[0]; i++){
    data.push(input[i].split(' '))
}
//arr length -> 0이 되면 함수를 종료
function sum(arr){
    if(arr.length===0)return ;
    console.log(Number(arr[0][0])+Number(arr[0][1]))
    return sum(arr.slice(1))
}
sum(data)

function recsum(arr){
    let data = `${arr[0]}`.split(' ').map(Number)
    console.log(data[0]+data[1])
    if(arr.length===1)return
    return recsum(arr.slice(1))
}
let newData = input.slice(1)
recsum(newData)

