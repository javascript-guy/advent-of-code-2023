const puzzleFive = () => {
  const input = require("./input").input;

  const engineRows = input.split(/\n/);

  const rowDirections = [
    // as [x,y] coords
    // one row above "the last row"
    [-1, -1], // one character back
    [-1, 0], // directly above
    [-1, 1], // one character foward
    // same row
    [0, -1], // one character back
    [0, 1], // one character forward
    // one row below "the next row"
    [1, -1], // one character back
    [1, 0], // directly below
    [1, 1], // one character forward
  ];
  const partNumber = [];

  for (let i = 0; i < engineRows.length; i++) {
    const row = engineRows[i];
    let nums = 0;
    let idx = 0;
    while (idx < row.length - 1) {
      if (isNaN(row.charAt(idx))) {
        idx++;
      } else {
        nums = nums + parseInt(row.charAt(idx));
        let numLength = idx + 1;
        while (!isNaN(row.charAt(numLength)) && numLength < row.length) {
          nums = nums * 10 + parseInt(row.charAt(numLength));
          numLength++;
        }
        if (nums !== 0) {
          let flag = false;

          for (let k = idx; k < numLength; k++) {
            for (const [x, y] of rowDirections) {
              if (row[i + y]) {
                const char = engineRows[i + y].charAt(k + x);
                if (isNaN(char) && char !== ".") {
                  flag = true;
                }
              }
            }
          }
          if (flag) {
            partNumber.push(nums);
          }
        }
        idx = numLength;
        nums = 0;
      }
    }
  }
  const totalSum = partNumber.reduce((a, b) => a + b, 0);
  return totalSum;
};

module.exports = { puzzleFive };
