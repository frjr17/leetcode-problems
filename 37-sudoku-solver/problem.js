/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    function findEmptyCell(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    return [row, col];
                }
            }
        }
        return null;
    }

    function isValidMove(board, row, col, num) {
        const numStr = num.toString();

        for (let i = 0; i < 9; i++) {
            if (board[row][i] === numStr || board[i][col] === numStr) {
                return false;
            }
        }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === numStr) {
                    return false;
                }
            }
        }

        return true;
    }

    function isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') {
                    const num = board[i][j];
                    board[i][j] = '.';
                    if (!isValidMove(board, i, j, num)) {
                        return false;
                    }
                    board[i][j] = num;
                }
            }
        }
        return true;
    }

    if (!isValidSudoku(board)) {
        return null;
    }

    if (solve(board)) {
        return board;
    } else {
        return null;
    }
    function solve(board) {
        const emptyCell = findEmptyCell(board);
        if (!emptyCell) {
            return true;
        }

        const [row, col] = emptyCell;

        for (let num = 1; num <= 9; num++) {
            if (isValidMove(board, row, col, num)) {
                board[row][col] = num.toString();

                if (solve(board)) {
                    return true;
                }

                board[row][col] = '.';
            }
        }

        return false;
    };
}
