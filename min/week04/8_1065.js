//한수
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());


    let count = 0;
    for(let i=1; i <= input; i++){
        if(i <= 99){
            count++;
            continue; 
        }  
        let gap1 = Number(String(i)[1])- Number(String(i)[0]);
        let gap2 = Number(String(i)[2])- Number(String(i)[1]);
        if(gap1 === gap2){
            count++;
        } 
    }
    
console.log(count);