//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

//prev에다가 이전키를 저장한다. 이전키가 만약에 o고 현재키도 o라면 point는 1씩 올라가고 해당 수를 더한다
// O => 1
// OO => 1+2
// OOO => 1+2+3

let [testC] = input;
for (let i = 1; i <= testC; i++) {
  let [numOfpe, ...subject] = input[i].split(" ");
  let average = subject.reduce((acc, cur) => +acc + +cur) / +numOfpe; // 평균 점수 구하기
  const averageUp = subject.filter((el) => average < +el).length; // 평균 넘은사람 숫자 구하기
  console.log(((averageUp / +numOfpe) * 100).toFixed(3) + "%");
}
