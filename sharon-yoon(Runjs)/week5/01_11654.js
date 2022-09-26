const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')


// 알파벳 대문자 65~90
// 알파벳 소문자 97~122
// 숫자 0-9  48~57

let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower =  'abcdefghijklmnopqrstuvwxyz'
let num = '0123456789'


// str.includes(input) str에 input이 포함되어있으면 true
// str.indexof(input) str에 input이 포함되어있는 인덱스 반환
if(upper.includes(input)) {
    console.log(upper.indexOf(input)+65)
}
if(lower.includes(input)) {
    console.log(lower.indexOf(input)+97)
}
if(num.includes(input)){
    console.log(num.indexOf(input)+48)
}