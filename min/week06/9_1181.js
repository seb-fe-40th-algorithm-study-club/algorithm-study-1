//1181번 단어정렬하기
//길이가 짧은 것부터
//길이가 같으면 사전 순으로

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.toString().split("\n");

let [N, ...words] = input;

//중복제거하기
let setObject = new Set(words); //set객체를 이용해서 중복된 단어 제거
let setWords = [...setObject]; //set객체를 배열로 바꾸기

let sortedWords = setWords.sort().sort((a, b) => a.length - b.length);
//사전 순으로 정렬 후, 길이 순 정렬

sortedWords.forEach(i => console.log(i)); //콘솔로 배열의 요소를 한 줄씩 출력
