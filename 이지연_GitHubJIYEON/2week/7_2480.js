// 런타임 에러!! 오답
const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c] = [input[0], input[1], input[2]];

if (A !== B && A !== C && B !== C) {
  console.log(A * 100);
} else if (A === B && B !== C) {
  console.log(1000 + A * 100);
} else if (B === C && C !== A) {
  console.log(1000 + B * 100);
} else if (C === A && A !== B) {
  console.log(1000 + C * 100);
} else {
  console.log(10000 + A * 1000);
}

//구글링 풀이
const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c] = [input[0], input[1], input[2]];

const output = (a, b, c) => {
  if (a === b && a === c && b === c) {
    return console.log(10000 + a * 1000);
  }

  if (a !== b || a !== c || b !== c) {
    if (a === b || a === c) {
      return console.log(1000 + a * 100);
    }
    if (b === c) {
      return console.log(1000 + b * 100);
    }
  }

  if (a !== b && a !== c && b !== c) {
    const sort = [a, b, c].sort();
    {
      return console.log(sort.pop() * 100);
    }
  }
};

output(a, b, c);
