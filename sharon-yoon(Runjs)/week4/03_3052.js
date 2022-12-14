const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')


// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

let newArr = input.map(el => el % 42)

// Set객체 - 배열의 중복을 제거해줌
let set = new Set(newArr)

let newSet = [...set] // 배열로 만들어주기 

console.log(newSet.length)

//2번째 방법 filter로 중복 제거해보기

let newArr2 = input.map(el => el % 42)

const uniqueArr = newArr.filter((el,i) => {
    return newArr2.indexOf(el) === i;
})

console.log(uniqueArr.length)