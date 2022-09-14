  const fs = require('fs');
  const input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt')
  .toString().trim().split('\n').map(Number);
  
  let maxVal = input[0];
  let maxIdx = 1;
  
  input.forEach((el, idx)=>{
    if(el>maxVal){
      maxVal = el;
      maxIdx = idx+1;
    }
  })

  console.log(maxVal+'\n'+maxIdx)