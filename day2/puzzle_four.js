const gameInput = require("./day_input").gameInput;
const splitGames = gameInput.split(/\n/);

const powers = [];
for (const game of splitGames) {
  const cubes = {};
  const hands = game.split(":")[1].split(";");
  for (const eachHand of hands) {
    const colorArr = eachHand.split(",");
    for (eachColor of colorArr) {
      const color = eachColor.match(/(red|blue|green)/)[0];
      const number = eachColor.match(/\d+/)[0];
      if (cubes.hasOwnProperty(color)) {
        if (+cubes[color] < +number) {
          cubes[color] = number;
        }
      } else {
        cubes[color] = number;
      }
    }
  }
  const power = Object.values(cubes).reduce((a, b) => a * b, 1);
  powers.push(power);
}

const answer = powers.reduce((a, b) => a + b, 0);
console.log(answer);
