const fs = require("fs");
const input= fs.readFileSync('dev/stdin').toString().trim().split('\n')

// 점의 개수 num만 일단 빼기 
let num = input.shift()

// y좌표가 증가하는 순으로
// y좌표가 같으면 x좌표가 증가하는 순서 

//2차원 배열로 만들기
const newArr = input.map(el => el.split(' '))


newArr.sort((a,b) => {
    // y의 값이 같지않으면 오름차순 
    // console.log(a, b)
    if(a[1] !== b[1]) {
        return a[1] - b[1]
    } else {
        //y의 값이 같으면 x비교
        return a[0] - b[0]
    }
})

let result = ''

for(let el of newArr) {
    //여기서 console.log 찍으면 시간 에러 
   result += `${el[0]} ${el[1]}\n`
}
console.log(result)