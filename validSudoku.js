/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var arr1 = new Array(9);
    var arr2 = new Array(9);
    var arr3 = new Array(9);
    var i, j, k, num;
    for(i = 0; i < 9; i++) {
        arr1[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    for(i = 0; i < 9; i++) {
        arr2[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    for(i = 0; i < 9; i++) {
        arr3[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    for(i = 0; i < 9; i++) {
        for(j = 0; j < 0; j++) {
            if(board[i][j] !== '.') {
                num = board[i][j] - '0' - 1;
                k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if(arr1[i][num] || arr2[j][num] || arr3[k][num]) {return false;}
                arr1[i][num] = 1;
                arr2[j][num] = 1;
                arr3[k][num] = 1;
            }
        }
    }
    return true;
};
