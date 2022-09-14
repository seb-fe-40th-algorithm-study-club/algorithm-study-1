const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'test.txt').toString().split(' ').map((el)=>Number(el));

[a, b, c, d, e, f] = input;






/*
1 1 2 2 2 8
0 1 2 2 2 7
2 1 2 1 2 1
*/