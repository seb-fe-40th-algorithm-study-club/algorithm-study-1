const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let mean, count, group;

for (let i = 1; i <= input[0]; i++) {
  group = input[i].split(" ").map(Number);
  mean = group.slice(1).reduce((acc, cur) => acc + cur) / group[0];
  count = 0;
  for (let j = 1; j <= group[0]; j++) {
    if (group[j] > mean) count++;
  }
  console.log(((count / group[0]) * 100).toFixed(3) + "%");
}
