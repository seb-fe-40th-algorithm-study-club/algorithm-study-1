//단어공부
//알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램

const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase()
//입력값 대문자로 바꾸기 

//let str = 'Mississipi'
let newObject = {};

//for...of문으로 문자열 순회하기
for(let character of str){
    if(newObject[character]){
        newObject[character]++; //newObject라는 객체에 character이라는 키가 있으면, 그 값을 ++ 
    } else {
        newObject[character] = 1; //없으면, 키를 만들고, 그 값에 1을 할당
    }
}

let maxNum = 0;
let mode = '';

//객체를 순회할 때는 for..in을 사용
for(let character in newObject){
    if(newObject[character] > maxNum){
        maxNum = newObject[character];
        mode = character;
    } else if(newObject[character] === maxNum){
        mode = '?'
    }
}

console.log(mode)