function solution(s) {
  let py = s
    .toLowerCase()
    .split("")
    .reduce(
      (acc, el) => {
        if (el === "p") acc[0] += 1;
        else if (el === "y") acc[1] += 1;
        return acc;
      },
      [0, 0]
    );

  return py[0] === py[1] ? true : false;
}
