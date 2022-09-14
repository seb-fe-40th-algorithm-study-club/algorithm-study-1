//실패3 - 런제이에서는 되는데, 백준에서 런타임오류
let [hh, mm] = input[0].split(' ').map(Number);
let cookTime = Number(input[1]);

if(mm + cookTime >= 60){
   hh = Math.floor((hh*60 + mm + cookTime)/60);
   mm = (mm + cookTime)%60;
    
}
if(hh >= 24){
    hh -= 24;
}

console.log(hh,mm)

//구글 답
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    // [[14 30], 20]
    
    let hour = input[0].split(' ')[0]
    let minute = input[0].split(' ')[1]
    let cookTime = input[1]

    solution(+hour, +minute, +cookTime)
    
    function solution(doneHour, doneMin, cookTime) {
        doneMin += cookTime

        while(doneMin >= 60) {
            doneMin -= 60
            doneHour += 1
        }

        doneHour %= 24;
        console.log(doneHour, doneMin)
    }
})

//구글답 참고 성공
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    // [[14 30], 20]
    
let [hh, mm] = input[0].split(' ').map(Number);
const cookTime = Number(input[1]);

mm += cookTime;
if(mm >= 60){
    hh += Math.floor(mm/60);
    mm %= 60;
}
if(hh >= 24){
    hh -= 24;
}

console.log(hh,mm)

    
})