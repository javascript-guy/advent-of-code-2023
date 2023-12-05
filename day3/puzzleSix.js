const puzzleSix = () => {
  const input = require("./input");

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
  const gears = new Map();
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
          let isGeared = false;
          let position;
          for (let k = idx; k < numLength; k++) {
            for (const [x, y] of rowDirections) {
              if (row[i + y]) {
                const char = engineRows[i + y].charAt(k + x);
                if (isNaN(char) && char !== ".") {
                  flag = true;
                }
                if (char === "*") {
                  position = i + y + "-" + (k + x);
                  isGeared = true;
                }
              }
            }
          }
          if (flag) {
            partNumber.push(nums);
          }
          if (isGeared) {
            if (!gears.get(position)) {
              gears.set(position, [nums]);
            } else {
              const val = gears.get(position);
              val.push(nums);
              gears.set(position, val);
            }
            position = "";
          }
        }
        idx = numLength;
        nums = 0;
      }
    }
  }
  let gearSum = 0;
  gears.forEach((value) => {
    if (value.length === 2) {
      gearSum += value[0] * value[1];
    }
  });
  return gearSum;
};

module.exports = puzzleSix;
