//10814번 나이순 정렬

const [N, ...members] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(
    members
        .map(ele => ({age: parseInt(ele.split(" ")[0]), name: ele.split(" ")[1]}))
        .sort((a, b) => a.age - b.age)
        .map(ele => String(ele.age) + " " + ele.name)
        .join("\n")
);