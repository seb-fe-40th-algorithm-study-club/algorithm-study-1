const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n')

const totalNum = +input[0];
const arr = input.slice(1).map((el)=>{ //
  return el.split(' ').map(Number);
});

for(let i=0; i<totalNum; i++){
  const studentNum = arr[i][0];//학생수
  arr[i]=arr[i].slice(1)//학생 수 제외하고 점수만 남기기

  const sum = arr[i].reduce((acc, cur)=>{//점수의 합 구하기
    return acc+cur; 
  },0);

  const average = sum/studentNum;
  
  const cnt = arr[i].reduce((acc, cur)=>{//평균이 넘는 학생수 체크
    return result = cur > average ? acc+1 : acc;
  },0);

  console.log( (cnt/studentNum*100).toFixed(3)+'%');
}

