const gameInput = require("./day_input").gameInput;
const split = gameInput.split(/\n/);
const numbersSpelled = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const getValue = (val) => {
  switch (val) {
    case "1":
    case "one":
      return 1;
    case "2":
    case "two":
      return 2;
    case "3":
    case "three":
      return 3;
    case "4":
    case "four":
      return 4;
    case "5":
    case "five":
      return 5;
    case "6":
    case "six":
      return 6;
    case "7":
    case "seven":
      return 7;
    case "8":
    case "eight":
      return 8;
    case "9":
    case "nine":
      return 9;
    case "0":
    case "zero":
    default:
      return 0;
  }
};

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

const getValues = (str) => {
  let lowObj = {
    index: -1,
    number: -1,
  };
  let highObj = {
    index: -1,
    number: -1,
  };
  const searchFromEndOfString = (valueToFind, strToSearch) => {
    let idx = strToSearch.length - valueToFind.length;
    let idxIsZero = false;
    while (idx >= 0) {
      idxIsZero = idx === 0;
      const i = strToSearch.indexOf(valueToFind, idx);
      if (i > -1) {
        if (i > highObj.index) {
          highObj = {
            index: i,
            number: getValue(valueToFind),
          };
        } else {
          break;
        }
      }
      idx -= valueToFind.length;
      if (idx < 0 && !idxIsZero) {
        idx = 0;
      }
    }
  };
  const searchFromBeginningOfString = (valueToFind, strToSearch) => {
    let index = strToSearch.indexOf(valueToFind);
    if (index > -1 && (index < lowObj.index || lowObj.index === -1)) {
      lowObj = {
        index: index,
        number: getValue(valueToFind),
      };
    }
  };

  numbers.forEach((num) => {
    searchFromBeginningOfString(num, str);
    searchFromEndOfString(num, str);
  });
  numbersSpelled.forEach((num) => {
    searchFromBeginningOfString(num, str);
    searchFromEndOfString(num, str);
  });

  return +`${lowObj.number}${highObj.number}`;
};

const lineNumbers = [];
for (const line of split) {
  lineNumbers.push(getValues(line));
}

const lineNumbersReducers = (a, b) => a + b;
const answer = lineNumbers.reduce(lineNumbersReducers, 0);
console.log(answer);
