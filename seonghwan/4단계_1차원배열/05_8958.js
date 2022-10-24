//배열을 이용한 풀이는 아님
const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
.toString().trim().split('\n')

const totalNum = +input[0];
const originArr = input.slice(1);

for(let i=0; i<totalNum; i++){
  let cnt=0;
  let sum=0;
  for(let j=0; j<originArr[i].length; j++){
    if(originArr[i][j]==='O'){ //o이 나올때마다 증가된 cnt값만큼 sum에 더해준다.
      cnt++;
      sum += cnt;
    }else{//o이 아닌값이 나오면 cnt 0으로 초기화
      cnt = 0;
    }
  }
  console.log(sum);
}
