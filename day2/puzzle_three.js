const gameInput = require("./day_input").gameInput;
const splitGames = gameInput.split(/\n/);

const totalCubes = {
  red: 12,
  green: 13,
  blue: 14,
};
const impossibleGames = [];
const allGames = [];
for (const game of splitGames) {
  const gameNumber = game.split(":")[0].match(/\d+/)[0];
  allGames.push(+gameNumber);
  const hands = game.split(":")[1].split(";");
  for (const eachHand of hands) {
    const colorArr = eachHand.split(",");
    for (eachColor of colorArr) {
      const color = eachColor.match(/(red|blue|green)/)[0];
      const number = eachColor.match(/\d+/)[0];
      if (totalCubes[color] < number) {
        if (!impossibleGames.includes(+gameNumber)) {
          impossibleGames.push(+gameNumber);
        }
      }
    }
  }
}

const possibleGames = allGames.filter(
  (game) => !impossibleGames.includes(game)
);
const answer = possibleGames.reduce((a, b) => +a + +b, 0);
console.log(answer);
