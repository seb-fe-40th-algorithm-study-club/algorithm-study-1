const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
//['3', '40 80 60']

let grades = input[1].split(' ').map(Number);
let maxGrade = grades[0];
for(let i = 1; i < grades.length; i++){
    if(grades[i] > maxGrade){
        maxGrade = grades[i];
    }
};
let newGrades = grades.map(ele => ele/maxGrade * 100);
let result = (newGrades.reduce((a,b)=> a+b)/(Number(input[0])));

console.log(result);