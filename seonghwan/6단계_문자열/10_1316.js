const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().trim().split('\n');

let [totalNum, ...allInput] = input;
let wordCnt = 0;

for (let i = 0; i < totalNum; i++) { //단어 반복
  let checkArr = []; // 나왔던 문자를 비교하기위해 문자저장해두는 배열
  let isGroupWord = true; // 그룹단어인지 여부
  for (let j = 0; j < allInput[i].length; j++) {
    if (allInput[i][j - 1] !== allInput[i][j]) {
      if (!checkArr.includes(allInput[i][j])) {
        checkArr.push(allInput[i][j]) // 새로나온 문자인경우 checkArr에 넣음
      } else {
        isGroupWord = false; //이미 나온문자면 그룹문자 아님
        break;
      }
    }
  }
  if (isGroupWord) wordCnt++;
}

console.log(wordCnt)






//checkArr에 해당 문자가 있는지 확인(전과 후가 다른문자일 경우)-> 있으면 그룹단어 아님
//->없으면 checkArr에 해당 문자 넣고 다시 다른문자가 나올때까지 순회, 반복


