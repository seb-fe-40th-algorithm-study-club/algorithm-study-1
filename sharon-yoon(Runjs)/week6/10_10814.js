const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().trim().split('\n')


// 회원의 수 num 빼기 
let num = input.shift()

// 2차원 배열로 바꾸기 
let newArr = input.map(el => el.split(' '))

  // 나이 정렬
newArr.sort((a,b) =>  a[0] - b[0])


// 다시 문자열로 만들어주기 
let result = ''
for(let el of newArr) {
    result += `${el[0]} ${el[1]}\n`
}
console.log(result)