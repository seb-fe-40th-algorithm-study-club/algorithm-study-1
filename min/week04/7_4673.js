function d(n){
    let result = 0;
    for(let i=0; i< String(n).length; i++){
    result += Number(String(n)[i])
    }
  return n + result;
}

//생성자가 있는 숫자 -> 배열로 만들기
let arr = [];
for (let i = 1; i <= 10000; i++) {
    arr.push(d(i))
}

let answer = [];
for (let i = 1; i <= 10000; i++) {
    if (arr.indexOf(i) === -1) {
      answer += i + "\n";
    }
  }
console.log(answer);