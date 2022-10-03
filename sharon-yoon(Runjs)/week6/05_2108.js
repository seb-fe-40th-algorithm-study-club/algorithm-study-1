const fs = require("fs");

const input= fs.readFileSync('예제.txt').toString().trim().split('\n').map(Number)

// <입력>
// 첫째줄은 수의 개수 N (홀수)
//<출력>
// 1. 산술평균(소수점 이하 첫째자리에서 반올림) ->Math.round(숫자)
// 2. 중앙값 (N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값)
// -> 중복제거 오름차순하고 그 가운데 
// 3. 최빈값 (  N개의 수들 중 가장 많이 나타나는 값)
// 4. 범위 ( N개의 수들 중 최댓값과 최솟값의 차이)

// 개수는 num으로 빼기 
let num = input.shift()

// 누적합으로 평균 구하기
// Math.round(숫자) => 첫째자리에서 반올림
let avg = Math.round(input.reduce((sum, curValue) => sum + curValue, 0) / num);
// 1. 산술평균
// -0이면 0으로 바뀌도록 출력
console.log(avg === -0? 0: avg)

// 2. 중앙값
// 오름차순 정렬하고 가운데 인덱스 구하기
let newArr = input.sort((a,b)=>a-b)
console.log(newArr[Math.floor(newArr.length/2)])

//3. 최빈값

// N개의 수 중 가장 많이 나타나는 값
let obj = {}
for(let i =0; i<num; i++) {
    if(obj[input[i]] === undefined) {
        // 없으면 obj에 "숫자" : 1 생성
         obj[input[i]] = 1; 
     } else {
         // 있으면 1 증가
        obj[input[i]] += 1;

     }
}

let count = 0;
let result = [];

for(let key in obj) {
    if(count < obj[key]) {
        // count보다 obj[key]가 더 크면 count 바꿔주기
        count = obj[key]
        // result 리셋 -> 큰 값이 여러개 있을 수 있으니 
        result = [];
        result.push(key);
        console.log(result)
    } else if (count === obj[key]) {
        // 최빈값 같은 거 있으면 result에 일단 push
        result.push(key)
    }
}
// result 길이 1보다 크면 2번째로 작은수 , 하나밖에 없으면 [0]
console.log(result.length > 1? Number(result.sort((a,b)=>a-b)[1]) : Number(result[0]) )


// 4. 범위 ( N개의 수들 중 최댓값과 최솟값의 차이)
console.log( Math.max(...newArr)- Math.min(...newArr))