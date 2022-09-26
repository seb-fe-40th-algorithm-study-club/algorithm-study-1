//다이얼
//할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 최소 시간

let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();

//숫자 1은 2초 
//숫자 2는 3초 <-ABC
//
//숫자 9는 10초 <-WXYZ

let time = [];

for(let i=0; i < str.length; i++){
    if(str[i] === 'A' || str[i] === 'B' || str[i] === 'C'){
        time.push(3)
    } 
    else if(str[i] === 'D' || str[i] === 'E' || str[i] === 'F'){
        time.push(4)
    }
    else if(str[i] === 'G' || str[i] === 'H' || str[i] === 'I'){
        time.push(5)
    }
    else if(str[i] === 'J' || str[i] === 'K' || str[i] === 'L'){
        time.push(6)
    }
    else if(str[i] === 'M' || str[i] === 'N' || str[i] === 'O'){
        time.push(7)
    }
    else if(str[i] === 'P' || str[i] === 'Q' || str[i] === 'R' || str[i] === 'S'){
        time.push(8)
    }
    else if(str[i] === 'T' || str[i] === 'U' || str[i] === 'V'){
        time.push(9)
    }
    else if(str[i] === 'W' || str[i] === 'X' || str[i] === 'Y' || str[i] === 'Z'){
        time.push(10)
    }
}

let timeSum = time.reduce((a,b)=> a+b)

console.log(timeSum)