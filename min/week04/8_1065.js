//한수

//풀이1
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());


    let count = 0;
    for(let i=1; i <= input; i++){
        if(i <= 99){
            count++;
        }  
        let gap1 = Number(String(i)[1])- Number(String(i)[0]);
        let gap2 = Number(String(i)[2])- Number(String(i)[1]);
        if(gap1 === gap2){
            count++;
        } 
    }
    
console.log(count);

//풀이2 - 함수로 만들어서 풀기
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

function getHansoo(n){
    if(n<=99){
      return n;
    } else if(n>99 && n<999){ //100~999까지의 숫자
        let arr = [];
        for(let i=100; i<=n; i++){
            let gap1 = Number(String(i)[1])- Number(String(i)[0]);
            let gap2 = Number(String(i)[2])- Number(String(i)[1]);
            if(gap1 === gap2){
             arr.push(i)
            }
        }
        return arr.length + 99;
    } else {
        return 144;
    }
}

console.log(getHansoo(input));