const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString()


// 1은 2 초 그 다음부터는 알파벳 3개씩 1초더하기

let result = 0
let upper = {
    // 1은 2초부터 그다움부터는 1초씩 더하기 
    // PQRS, WXYZ 주의 
    ABC :3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
}

for(let i =0; i<=input.length; i++) {

    for(let el in upper) {
        // input[i]가 A면 ABC에 value 3초를 더하라
        if(el.includes(input[i])){
            result += upper[el]
        }
    }
}
console.log(result)