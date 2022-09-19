const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n').map(Number)

const isSeq = function(num){
  const seperatedNum=String(num).split('').map(Number);
  if(seperatedNum.length===1 || seperatedNum.length===2) return true; //한자리 or 두자리수는 한수 취급

  const minusVal = seperatedNum[0]-seperatedNum[1]; //처음 두 수의 차이
  for(let i=0; i<seperatedNum.length-1; i++){
    if(seperatedNum[i]-seperatedNum[i+1] != minusVal) return false; //두 수의 차이가 달라지면 false 리턴
  }
  return true;
}

let cnt=0; //한수 카운터

for(let i=1; i<=input; i++){
  isSeq(i) ? cnt++ : null;
}
console.log(cnt)



//등차수열 확인?
//숫자를 한자리 단위로 전부 나눈뒤 계산
//i번째와 i+1번째의 차이값이 계속 반복되는지 여부 확인
//끝까지 다 동일하면 등차수열 true, 그렇지 않으면 등차수열이 아님. false
