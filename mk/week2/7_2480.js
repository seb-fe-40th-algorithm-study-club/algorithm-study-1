const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.trim().split(' ').map(item=>Number(item))

const [a,b,c] = input
if(a===b &&b===c && a===c){
    console.log(10000+a*1000);
}else if(a===b||a===c||b===c){
    if(a===b || a===c){
        console.log(1000+a*100)
    }else if(b===c){
        console.log(1000+b*100)
    }
}else{
    if(a>b&&a>c) console.log(a*100)
    if(b>a&&b>c) console.log(b*100)
    if(c>a&&c>b) console.log(c*100)
}


