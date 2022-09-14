//별찍기2

let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
  let star = '';
    
  for (let j = num - 1; j >= 0; j--) {
      if(j<=i){
          star += "*"
      } else {
          star += " "
      }
  }
  
  console.log(star);
}
