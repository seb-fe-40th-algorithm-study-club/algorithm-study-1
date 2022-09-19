const dnFunc = function(num){
  return  num + String(num).split('').reduce((acc, cur)=>{ //num값과 num의 각 자리 값을 합친 결과를 리턴
    return acc + +cur;
  },0)
};

let arr = [...new Array(10000)].map((el, idx) => { //1~10000로 채워진 배열 생성
  return idx + 1;
});

for(let i=0; i<arr.length; i++){ 
  let dnNum = dnFunc(arr[i]);
  let dnNumIdx = i;
  while(true){
    if(dnNum>10000) break;

    dnNumIdx = arr.indexOf(dnNum,dnNumIdx); //dnFunc의 리턴값을 arr 에서 찾는다.
    if(dnNumIdx!=-1) arr.splice(dnNumIdx,1); //값이 존재하면 arr에서 해당값 삭제

    dnNum = dnFunc(dnNum);
  }
}

for(let el of arr){
  console.log(el);
}
