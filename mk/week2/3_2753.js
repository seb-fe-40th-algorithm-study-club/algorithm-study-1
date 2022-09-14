const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.split(' ').map((el)=>Number(el))

const [A] = input;
if((A%4===0 && A%100 !==0) || A%400 ===0){
    console.log(1);
}else{
    console.log(0)
}

// const B = ((A%4===0 && A%100!==0 )|| A%400===0)
// // Switch 변수 B의 값이 case 라면 해당 case내부 실행문을 실행시킨다
// // if(A===true) console.log(1) , if (B===)
// switch(B){
//     case true:
//         console.log('1')
//     case false :
//         console.log('0')
// }