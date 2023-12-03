const gameInput = require("./day_input").gameInput;
const split = gameInput.split(/\n/);

const getStart = (str) => {
  let idx = -1;
  while (++idx < str.length) {
    if (!isNaN(str.charAt(idx))) {
      return str[idx];
    }
  }
  return 0;
};
const getEnd = (str) => {
  let idx = str.length;
  while (--idx >= 0) {
    if (!isNaN(str.charAt(idx))) {
      return str[idx];
    }
  }
  return 0;
};
const lineNumbers = [];
const lineNumberReducer = (a, b) => a + b;
for (const line of split) {
  const lineNumber = +`${+getStart(line)}${+getEnd(line)}`;
  lineNumbers.push(lineNumber);
}
const total = lineNumbers.reduce(lineNumberReducer, 0);
console.log("total: ", total);
