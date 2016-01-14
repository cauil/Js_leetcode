/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if(board === null || board.length === 0) {
        return;
    }
    solve(board);
    
    function isValid(board, i, j, k) {
        for(var row = 0; row < 9; row ++) {
            if(board[row][j] === k) return false;
        }
        for(var col = 0; col < 9; col ++) {
            if(board[i][col] === k) return false;
        }
        for(row = Math.floor(i/3)*3; row < Math.floor(i/3)*3 + 3; row++){
            for(col = Math.floor(j/3)*3; col<Math.floor(j/3)*3+3; col++){
                if(board[row][col] === k) return false;
            }
        }
        return true;
    }
    
    function solve(board) {
        for(var i = 0; i < 9; i++) {
            for(var j = 0; j < 9; j++) {
                if(board[i][j] === '.') {
                    for(var k = 1; k < 10; k++) {
                        if(isValid(board, i, j, k)) {
                            board[i][j] = k;
                            if(solve(board)) return true;
                            else board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
    }
};
