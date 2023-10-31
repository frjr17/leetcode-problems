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

            if (cell !== '.') {
                const digit = parseInt(cell) - 1;

                if (rows[row][digit] || columns[col][digit] || boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)][digit]) {
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