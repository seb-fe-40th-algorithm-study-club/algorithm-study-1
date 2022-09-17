const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')


// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

let newArr = input.map(el => el % 42)

// Set객체 - 배열의 중복을 제거해줌
let set = new Set(newArr)

let newSet = [...set] // 배열로 만들어주기 

console.log(newSet.length)