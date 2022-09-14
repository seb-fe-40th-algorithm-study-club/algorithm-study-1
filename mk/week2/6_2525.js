const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.trim().split('\n')

let [curTime, runTime] = input
let [hour,min] = curTime.split(' ').map(item=>Number(item))
runTime = Number(runTime);

let finMin = min+runTime;
if(finMin>=60){
    while(finMin>=60){
        hour++
        if(hour>23){
            hour = 0;
        }
        finMin = finMin - 60;
    }
}

console.log(`${hour} ${finMin}`)
