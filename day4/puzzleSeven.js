const puzzleSeven = () => {
  const input = require("./input").input;
  const lines = input.split(/\n/);
  const points = [];
  for (line of lines) {
    const splitLine = line.split(":");
    const winningNumbers = splitLine[1].split("|")[0];
    const elfsNumbers = splitLine[1].split("|")[1];
    const winningArr = winningNumbers
      .split(" ")
      .filter((num) => num.trim() != "");
    const elfArr = elfsNumbers.split(" ").filter((num) => num.trim() != "");
    const matches = winningArr.filter((elf) => elfArr.includes(elf));
    let p = 0;
    if (matches.length) {
      matches.forEach((m) => {
        if (p == 0) {
          p = 1;
        } else {
          p *= 2;
        }
      });
    }
    points.push(p);
  }
  return points.reduce((a, b) => a + b, 0);
};

module.exports = { puzzleSeven };
