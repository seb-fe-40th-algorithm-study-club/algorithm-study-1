let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = ''
for(let i=1; i<= Number(input[0]); i++){
    console.log(`Case #${i}:`, Number(input[i].split(" ")[0])+Number(input[i].split(" ")[1]) )
};

//
const [N, ...arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

for (let i=0; i<N; i++) {
  const [A, B] = arr[i].split(' ').map(Number);
  console.log(`Case #${i+1}:`, A + B);
}