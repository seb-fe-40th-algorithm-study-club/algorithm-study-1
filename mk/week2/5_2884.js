const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.trim().split(' ').map((item)=>Number(item))

let [hour,min] = input;

if(min-45<0){ //45분 마이너스한 시간이 0보다 작다면 1시간 넘어간것
    hour--;
    min= min-45+60;
    if(hour<0){
        hour = 23;
    }
}else{
    min-=45;
}
console.log(`${hour} ${min}`)
