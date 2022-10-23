const input = 27;

let stars = [];

for (let i = 0; i < input; i++) {
  stars.push([]);
  for (let j = 0; j < input; j++) {
    stars[i].push("*");
  }
}

// (n * 1 / 3) % n 이상 (n * 2 / 3) % n 미만 -> " "
// e.g., n = 27
// (27 * 1 / 3 === 9) % 27 ~ (27 * 2 / 3 === 18) % 27
function makeStar(n) {
  if (n === 1) return;
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      if (
        i % n >= ((n * 1) / 3) % n &&
        i % n < ((n * 2) / 3) % n &&
        j % n >= ((n * 1) / 3) % n &&
        j % n < ((n * 2) / 3) % n
      ) {
        stars[i][j] = " ";
      }
    }
  }
  makeStar(n / 3);
}

makeStar(input);
console.log(stars.map((el) => el.join("")).join("\n"));
