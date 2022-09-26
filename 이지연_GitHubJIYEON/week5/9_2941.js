//참고 답안
const input = require("fs").readFileSync("dev/stdin").toString().trim();
let word = input;
const regex = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

regex.map((ele) => (word = word.replace(ele, "1")));
console.log(word.length);
