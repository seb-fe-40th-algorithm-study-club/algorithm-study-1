function solution(s) {
  let pCnt = 0;
  let yCnt = 0;
  let newStr = s.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'p') {
      pCnt++;
    } else if (newStr[i] === 'y') {
      yCnt++;
    }
  }
  return pCnt === yCnt ? true : false;
}