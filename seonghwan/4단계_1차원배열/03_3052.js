const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n').map(Number);

let calArr = input.map((el)=>{
  return el%42;
})

let cnt = 0;

while(calArr.length>0){
  const firstVal = calArr[0];
  
  calArr = calArr.filter((el)=>{
    return el != firstVal;
  });

  cnt++;
}
console.log(cnt);
