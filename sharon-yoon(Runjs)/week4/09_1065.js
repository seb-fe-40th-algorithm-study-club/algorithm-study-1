const fs = require("fs");
 
const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number)


function hanNum() {
    let count = 0;
    let num = parseInt(input)

    for(let n=1; n<=num; n++)    {
       // 두자리수일땐 모두 한수 
        if(0<n && n<100) count +=1
        else if(100<=n && n<1000)  {
            // 세자리수부터는 연속된 두개의 수의 차이가 일정한지 비교하기 
            if(Math.floor(n/100)-Math.floor((n%100)/10) === Math.floor((n%100)/10)- n%10){
                count +=1
            }}
        }
console.log(count)
}

hanNum()