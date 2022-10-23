let input = "2134";

console.log(
  input
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
