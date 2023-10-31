# Problem 35. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

## My Solution

```js
//  My Solution
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(false));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(false));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(false));

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];

      if (cell !== ".") {
        const digit = parseInt(cell) - 1;

        if (
          rows[row][digit] ||
          columns[col][digit] ||
          boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)][digit]
        ) {
          return false;
        }

        rows[row][digit] = true;
        columns[col][digit] = true;
        boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)][digit] = true;
      }
    }
  }

  return true;
};
```

It runs great (25.63% runtime, 23.23% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
