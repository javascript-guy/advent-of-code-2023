const puzzleEight = () => {
  const input = require("./input").input;
  const lines = input.split(/\n/);
  const getLinePoints = (winningNumbers, elfsNumbers) =>
    winningNumbers.filter((num) => elfsNumbers.includes(num)).length;
  const lineAmounts = [];
  for (const line of lines) {
    const cardNumber = line.split(":")[0].match(/\d+/)[0];
    const winningNumbers = line
      .split(":")[1]
      .split("|")[0]
      .split(" ")
      .filter((num) => num.trim() !== "");
    const elfNumbers = line
      .split(":")[1]
      .split("|")[1]
      .split(" ")
      .filter((num) => num.trim() !== "");
    const wins = getLinePoints(winningNumbers, elfNumbers);
    lineAmounts.push({ wins, count: 1 });
  }

  for (let line = 0; line < lineAmounts.length; line++) {
    const curr = lineAmounts[line];
    for (let win = 1; win <= curr.wins; win++) {
      lineAmounts[line + win].count += curr.count;
    }
  }
  return lineAmounts.reduce((a, b) => a + b.count, 0);
};
module.exports = { puzzleEight };
