//크로아티아 알파벳
//2941번
//단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력

let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();

let result = [];
//let str = 'ljes=njak'

while(str.length > 0){

    if( (str[0] === 'c' && str[1] === '=') || (str[0] === 'c' && str[1] === '-') ){
        result.push(1)
        str = str.slice(2)
    }
    else if(str[0] === 'd' && str[1] === 'z' && str[2] === '='){
        result.push(1);
        str = str.slice(3)
    }    
    else if(str[0] === 'd' && str[1] === '-'){
        result.push(1);
        str = str.slice(2)
    }
    else if(str[0] === 'l' && str[1] === 'j'){
        result.push(1);
        str = str.slice(2)
    }
    else if(str[0] === 'n' && str[1] === 'j'){
        result.push(1);
        str = str.slice(2)
    }
    else if(str[0] === 's' && str[1] === '='){
        result.push(1);
        str = str.slice(2)
    }
    else if(str[0] === 'z' && str[1] === '='){
        result.push(1);
        str = str.slice(2)
    } else {
        result.push(1);
        str = str.slice(1)
    }


}



let resultSum = result.reduce((a,b)=> a+b)

console.log(resultSum)