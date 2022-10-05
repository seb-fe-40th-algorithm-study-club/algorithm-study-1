const fs = require("fs");
const input= fs.readFileSync('dev/stdin').toString().trim().split('\n')


// 단어의 개수 num만 일단 빼기 
let num = input.shift()

//길이가 짧은 것 부터

// 단어 길이 관련 객체 만들어주기 
let obj = {};
for(let i =0 ; i<num ; i++) {
        obj[input[i]] = input[i].length;    
}

// 객체를 2차원 배열로 바꾸기 
// [ ['but', 3], [...]]
let arr = [];
for(let el in obj) {
    arr.push([el, obj[el]])
}

// 소문자 정렬 먼저 해주기
arr = arr.sort()
// 단어 길이 정렬하기 
arr.sort((a,b) => {
    return a[1] - b[1] 
})

let result = ''

for(let el of arr) {
    result += `${el[0]}\n`
}
console.log(result)
