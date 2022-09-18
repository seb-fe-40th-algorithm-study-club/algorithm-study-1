const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
//trim()을 안쓰면 틀린다...

let rest = input.map(ele => ele % 42);
let result = rest.filter((element, index) => rest.indexOf(element) === index);

console.log(result.length);